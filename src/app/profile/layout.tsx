import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile - Retroloop',
  description: 'Manage your account settings and subscription',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='flex h-full w-[calc(100%-2.5rem)] flex-col items-center gap-10 pb-10'>
      {children}
    </section>
  )
}
