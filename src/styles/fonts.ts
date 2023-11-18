import { Space_Grotesk } from 'next/font/google'

export const font = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
})
