import '@/globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProps } from 'next/app'
import { Space_Grotesk } from 'next/font/google'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'

import { trpc } from '@/utils/trpc'

const queryClient = new QueryClient()

const space_grotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

type CustomPageProps = {
  session: Session
}

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps<CustomPageProps>) => (
  <SessionProvider session={session}>
    <ThemeProvider attribute='class' enableColorScheme={true} enableSystem={true}>
      <QueryClientProvider client={queryClient}>
        <PlausibleProvider domain='retroloop.io' customDomain='stats.retroloop.io'>
          <main className={space_grotesk.className}>
            <Component {...pageProps} />
          </main>
        </PlausibleProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </SessionProvider>
)

export default trpc.withTRPC(App)
