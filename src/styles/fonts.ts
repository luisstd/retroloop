import { Recursive } from 'next/font/google'

export const font = Recursive({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
  weight: 'variable',
  style: ['normal'],
  axes: ['CASL', 'CRSV', 'MONO', 'slnt'],
  variable: '--font-sans',
  fallback: ['system-ui', 'Inter'],
})
