import '@/styles/globals.css'

import { headers } from 'next/headers'

import { MenuBar } from '@/app/components/menu-bar/menu-bar'
import { Providers } from '@/app/providers'
import { Toaster } from '@/app/ui/toast/toaster'
import { getServerAuthSession } from '@/server/auth'
import { font } from '@/styles/fonts'
import { TRPCReactProvider } from '@/trpc/react'
import { cn } from '@/utils/cn'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerAuthSession()

  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers session={session}>
          <TRPCReactProvider headers={headers()}>
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
          </TRPCReactProvider>
        </Providers>
      </body>
    </html>
  )
}
