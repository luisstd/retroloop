'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { Feedback } from '@/app/components/feedback/feedback'
import { SignUpForm } from '@/app/components/sign-up/sign-up-form'
import { Retros } from '@/app/dashboard/retros/retros'
import { Team } from '@/app/dashboard/team/team'
import { useSession } from '@/lib/auth-client'
import { api } from '@/trpc/react'

export default function Dashboard() {
  const { data: session, isPending } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isAuthenticated = !!session?.user

  const {
    data: user,
    isLoading: isUserLoading,
    refetch: refetchUser,
  } = api.user.getLoggedIn.useQuery(undefined, {
    enabled: isAuthenticated && !isPending,
  })

  const isSignedUp = !!user?.name

  useEffect(() => {
    if (!isPending && !isAuthenticated) {
      const currentUrl = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`
      const callbackURL = encodeURIComponent(currentUrl)
      router.push(`/auth/login?callbackurl=${callbackURL}`)
    }
  }, [isPending, isAuthenticated, router, pathname, searchParams])

  if (isPending || !isAuthenticated || isUserLoading) {
    return null
  }

  if (!isSignedUp) {
    return <SignUpForm onSuccess={refetchUser} />
  }

  return (
    <>
      {user.email && <Feedback userEmail={user.email} />}
      <Retros userId={user.id} />
      <Team />
    </>
  )
}
