import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retroloop - Terms',
  description: 'Retroloop Terms of Service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='prose mx-auto px-5 text-foreground prose-headings:text-foreground prose-a:text-foreground prose-strong:text-foreground'>
      {children}
    </main>
  )
}
