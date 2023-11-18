import Login from '@/app/auth/login/page'
import { getServerAuthSession } from '@/server/auth'

export default async function LoginLayout() {
  const session = await getServerAuthSession()

  if (session) {
    return { redirect: { destination: '/dashboard' } }
  } else {
    return <Login />
  }
}
