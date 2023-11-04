import '@/styles/globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProps } from 'next/app'
import { Space_Grotesk } from 'next/font/google'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'

import { MenuBar } from '@/components/menu-bar/menu-bar'
import { Toaster } from '@/ui/toast/toaster'
import { cn } from '@/utils/cn'
import { trpc } from '@/utils/trpc'

const queryClient = new QueryClient()

const font = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
})

type CustomPageProps = {
  session: Session
}

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps<CustomPageProps>) => (
  <SessionProvider session={session}>
    <ThemeProvider attribute='class' enableColorScheme={true} enableSystem={true}>
      <QueryClientProvider client={queryClient}>
        <PlausibleProvider domain='retroloop.io' customDomain='stats.retroloop.io'>
          <div
            className={
              (cn(font.className),
              'relative mx-auto flex w-screen max-w-screen-2xl flex-col items-center')
            }
          >
            <div className='opacity-gradient pattern-dots absolute -z-50 h-full min-h-screen w-screen pattern-bg-transparent pattern-foreground pattern-opacity-5 pattern-size-2' />
            <MenuBar />
            <Component {...pageProps} />
            <Toaster />
          </div>
        </PlausibleProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </SessionProvider>
)

export default trpc.withTRPC(App)
