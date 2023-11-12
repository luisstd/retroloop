import { QueryClient } from '@tanstack/react-query'
import { getServerSession } from 'next-auth'

import { MenuBar } from '@/app/components/menu-bar/menu-bar'
import { Providers } from '@/app/providers'
import { Toaster } from '@/app/ui/toast/toaster'
import { authOptions } from '@/server/auth'
import { font } from '@/styles/fonts'
import { cn } from '@/utils/cn'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  const session = await getServerSession(authOptions)

  return (
    session && (
      <html lang='en'>
        <body>
          <Providers queryClient={queryClient} session={session}>
            <main
              className={
                (cn(font.className),
                'relative mx-auto flex w-screen max-w-screen-2xl flex-col items-center')
              }
            >
              <div className='opacity-gradient pattern-dots absolute -z-50 h-full min-h-screen w-screen pattern-bg-transparent pattern-foreground pattern-opacity-5 pattern-size-2' />
              <MenuBar />
              {children}
              <Toaster />
            </main>
          </Providers>
        </body>
      </html>
    )
  )
}
