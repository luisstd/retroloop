import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verify Email - Retroloop',
  description: 'Check your email to complete sign in',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function VerifyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
