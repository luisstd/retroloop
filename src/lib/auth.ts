import { render } from '@react-email/render'
import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { magicLink } from 'better-auth/plugins'
import { createElement } from 'react'
import { Resend } from 'resend'

import MagicLinkEmail from '@/emails/magic-link'
import { env } from '@/env.mjs'
import { db } from '@/server/db'

const resend = new Resend(env.RESEND_API_KEY)

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: 'postgresql',
  }),
  /**
   * Field mappings to preserve NextAuth database schema compatibility.
   * Better Auth field names → Existing Prisma column names:
   * - verification: identifier→token, value→identifier (magic link plugin uses these fields inversely)
   * - account: Maps snake_case OAuth columns (access_token, etc.)
   * - session: Maps expires and sessionToken to maintain backward compatibility
   */
  verification: {
    modelName: 'VerificationToken',
    fields: {
      identifier: 'token',
      value: 'identifier',
      expiresAt: 'expires',
    },
  },
  account: {
    fields: {
      providerId: 'provider',
      accountId: 'providerAccountId',
      accessToken: 'access_token',
      accessTokenExpiresAt: 'access_token_expires_at',
      refreshToken: 'refresh_token',
      expiresAt: 'expires_at',
      idToken: 'id_token',
    },
  },
  emailAndPassword: {
    enabled: false,
  },
  socialProviders: {
    github: {
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET as string,
    },
  },
  plugins: [
    magicLink({
      expiresIn: 300,
      async sendMagicLink({ email, url }) {
        try {
          const html = await render(
            createElement(MagicLinkEmail, { magicLink: url }),
          )

          const result = await resend.emails.send({
            from: env.EMAIL_FROM,
            to: email,
            subject: 'Sign in to Retroloop',
            html,
          })

          if (result.error) {
            throw new Error(`Resend API error: ${result.error.message}`)
          }
        } catch (error) {
          console.error('Failed to send magic link email to', email, error)
          throw error
        }
      },
    }),
  ],
  session: {
    fields: {
      expiresAt: 'expires',
      token: 'sessionToken',
    },
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },
  trustedOrigins: [env.NEXTAUTH_URL],
  secret: env.NEXTAUTH_SECRET,
  baseURL: env.NEXTAUTH_URL,
})

export type Session = typeof auth.$Infer.Session
