import { IconUserCircle } from '@tabler/icons-react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'

export function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Link href='/profile'>
          <IconUserCircle size={30} className='cursor-pointer' />
        </Link>
      </>
    )
  }
  return (
    <>
      <button
        className='px-2 py-1 text-lg italic font-bold border-2 border-black rounded-md dark:border-neutral-200'
        onClick={() => signIn()}
      >
        Login
      </button>
    </>
  )
}
