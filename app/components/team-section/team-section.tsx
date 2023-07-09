'use client'

import { User } from '@prisma/client'
import * as Toast from '@radix-ui/react-toast'
import { IconCheck } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { GridLoader } from 'react-spinners'

import { InviteUserDialog } from '@/components/team-section/components/invite-user-dialog'
import { trpc } from '@/utils/trpc'

export function TeamSection() {
  const { resolvedTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const users = trpc.user.getAll.useQuery()

  return (
    <>
      <Toast.Provider swipeDirection='right'>
        <Toast.Root open={open} onOpenChange={setOpen}>
          <Toast.Title className='flex items-center gap-2 text-md'>
            <span>Successfully sent login link!</span>
            <IconCheck />
          </Toast.Title>
        </Toast.Root>

        <div className='flex items-center w-screen h-full max-w-screen-2xl'>
          <section className='relative w-full h-full p-10 mx-5 mt-10 border-2 rounded-md shadow-md border-base-dark dark:border-base-light bg-base-light dark:bg-base-dark'>
            <div className='flex flex-row items-baseline'>
              <h2 className='p-5 text-center'>TEAM</h2>
              <div className='flex justify-end w-full mb-10'>
                <InviteUserDialog handleToastOpen={setOpen} />
              </div>
            </div>

            {open ? (
              <Toast.Viewport className='fixed bottom-0 right-0 z-10 gap-2 p-5 m-10 border-2 rounded-md bg-base-light dark:bg-base-dark dark:text-base-light border-base-dark text-base-dark w-fit dark:border-base-light ' />
            ) : null}

            {users.isLoading && (
              <div className='grid place-items-center'>
                <GridLoader
                  color={resolvedTheme === 'light' ? 'black' : 'white'}
                  loading={users.isLoading}
                  size={15}
                  aria-label='Loading Spinner'
                />
              </div>
            )}

            <div className='flex flex-row flex-wrap items-start justify-center flex-grow gap-4 sm:justify-start'>
              {users.data &&
                users.data.map((user: User) => (
                  <div
                    key={user.id}
                    className='grid row-start-2 gap-4 p-5 mx-4 my-1 transition ease-in-out border-2 border-black rounded-md h-72 w-52 dark:border-neutral-200 auto-rows-min grid-col-1 hover:cursor-pointer hover:scale-105 min-w-min min-h-min'
                  >
                    <div className='grid auto-rows-auto place-items-start'>
                      <h2 className='text-2xl font-bold text-left'>{user.name}</h2>
                      <p className='mt-2 text-lg '>{user.role}</p>
                    </div>
                    <div className='row-start-3 h-28 retro-pattern'></div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </Toast.Provider>
    </>
  )
}
