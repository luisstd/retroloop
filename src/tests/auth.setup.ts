import { expect, Page, test as setup } from '@playwright/test'
import * as dotenv from 'dotenv'

dotenv.config()

const authFile = 'playwright/.auth/user.json'
const username = process.env.GOOGLE_E2E_USERNAME
const password = process.env.GOOGLE_E2E_PASSWORD
const googleClientId = process.env.GOOGLE_CLIENT_ID
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET
const googleRefreshToken = process.env.GOOGLE_REFRESH_TOKEN

if (!username || !password || !googleClientId || !googleClientSecret || !googleRefreshToken) {
  throw new Error('One or more required environment variables are not set.')
}

async function fetchOAuthToken(page: Page) {
  return page.evaluate(
    async ({ clientId, clientSecret, refreshToken }) => {
      const response = await fetch('https://www.googleapis.com/oauth2/v4/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'refresh_token',
          client_id: clientId,
          client_secret: clientSecret,
          refresh_token: refreshToken,
        }),
      })

      return response.json()
    },
    {
      clientId: googleClientId,
      clientSecret: googleClientSecret,
      refreshToken: googleRefreshToken,
    }
  )
}

async function fetchUserInfo(page: Page, accessToken: string) {
  return page.evaluate(async (accessToken: string) => {
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    return response.json()
  }, accessToken)
}

setup('authenticate', async ({ page }) => {
  const { access_token } = await fetchOAuthToken(page)
  if (access_token) {
    const userInfo = await fetchUserInfo(page, access_token)
    console.log('User Info:', userInfo)
  }

  await page.goto('/')
  await page.getByRole('button', { name: 'Login' }).click()
  await expect(page.getByRole('button', { name: 'Sign in with Google' })).toBeVisible()
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Sign in with Google' }).click()

  await page.getByLabel('Email or phone').waitFor()
  await page.getByLabel('Email or phone').fill(username)

  await page.locator('#identifierNext').waitFor()
  await page.locator('#identifierNext').click()

  await page.getByLabel('Enter your password').waitFor()
  await page.getByLabel('Enter your password').fill(password)

  await page.locator('#passwordNext').waitFor()
  await page.locator('#passwordNext').click()
  await page.waitForTimeout(5000)

  await page.waitForURL('/dashboard')
  await expect(page.getByRole('button', { name: 'Start retro' })).toBeVisible()

  await page.context().storageState({ path: authFile })
})
