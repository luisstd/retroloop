'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { Feedback } from '@/app/components/feedback/feedback'
import { SignUpForm } from '@/app/components/sign-up/sign-up-form'
import { Retros } from '@/app/dashboard/retros/retros'
import { Team } from '@/app/dashboard/team/team'
import { useSession } from '@/lib/auth-client'

export default function Dashboard() {
  const { data: session, isPending } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isAuthenticated = !!session?.user
  const isSignedUp = !!session?.user?.name

  useEffect(() => {
    if (!isPending && !isAuthenticated) {
      const currentUrl = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`
      const callbackURL = encodeURIComponent(currentUrl)
      router.push(`/auth/login?callbackurl=${callbackURL}`)
    }
  }, [isPending, isAuthenticated, router, pathname, searchParams])

  if (isPending || !isAuthenticated) {
    return null
  }

  if (!isSignedUp) {
    return <SignUpForm />
  }

  return (
    <>
      {session?.user?.email && <Feedback userEmail={session.user.email} />}
      {session?.user?.id && <Retros userId={session.user.id} />}
      <Team />
    </>
  )
}
