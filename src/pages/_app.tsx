import '@fontsource/space-grotesk/300.css'
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'
// import '@fontsource/ia-writer-quattro'
// import '@fontsource/ia-writer-mono'
// import '@fontsource/spline-sans'
// import '@fontsource/spline-sans-mono'
import '@/styles/globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProps } from 'next/app'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'

import { trpc } from '@/utils/trpc'

const queryClient = new QueryClient()

type CustomPageProps = {
  session: Session
}

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps<CustomPageProps>) => (
  <SessionProvider session={session}>
    <ThemeProvider attribute='class' enableColorScheme={true} enableSystem={true}>
      <QueryClientProvider client={queryClient}>
        <PlausibleProvider domain='retroloop.io' customDomain='stats.retroloop.io'>
          <Component {...pageProps} />
        </PlausibleProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </SessionProvider>
)

export default trpc.withTRPC(App)
