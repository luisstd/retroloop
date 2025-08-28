import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retroloop - Imprint',
  description: 'Retroloop Imprint',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='prose text-foreground prose-headings:text-foreground prose-a:text-foreground prose-strong:text-foreground mx-auto px-5'>
      {children}
    </main>
  )
}
