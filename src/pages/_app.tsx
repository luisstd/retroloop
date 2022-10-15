import { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { trpc } from '@/utils/trpc'

import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/400-italic.css'
import '@fontsource/space-mono/700.css'
import '@fontsource/space-mono/700-italic.css'

import '@/styles/globals.css'

const queryClient = new QueryClient()

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <SessionProvider session={session}>
    <ThemeProvider attribute='class' enableColorScheme={true} enableSystem={true}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </SessionProvider>
)

export default trpc.withTRPC(App)
