import { QueryClient } from '@tanstack/react-query'
import { getServerSession } from 'next-auth'
import { Providers } from 'src/app/providers'
import { authOptions } from 'src/pages/api/auth/[...nextauth]'

import { font } from '@/styles/fonts'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const query_client = new QueryClient()
  const { data: session } = await getServerSession(authOptions)

  return (
    session && (
      <html lang='en'>
        <body>
          <Providers queryClient={query_client} session={session}>
            <main className={font.className}>{children}</main>
          </Providers>
        </body>
      </html>
    )
  )
}
