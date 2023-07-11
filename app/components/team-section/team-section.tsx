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
          <Toast.Title className='text-md flex items-center gap-2'>
            <span>Successfully sent login link!</span>
            <IconCheck />
          </Toast.Title>
        </Toast.Root>

        <div className='flex h-full w-screen max-w-screen-2xl items-center'>
          <section className='relative mx-5 mt-10 h-full w-full rounded-md border-2 border-base-dark bg-base-light p-10 shadow-md dark:border-base-light dark:bg-base-dark'>
            <div className='flex flex-row items-baseline'>
              <h2 className='p-5 text-center'>TEAM</h2>
              <div className='mb-10 flex w-full justify-end'>
                <InviteUserDialog handleToastOpen={setOpen} />
              </div>
            </div>

            {open ? (
              <Toast.Viewport className='fixed bottom-0 right-0 z-10 m-10 w-fit gap-2 rounded-md border-2 border-base-dark bg-base-light p-5 text-base-dark dark:border-base-light dark:bg-base-dark dark:text-base-light ' />
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

            <div className='flex flex-grow flex-row flex-wrap items-start justify-center gap-4 sm:justify-start'>
              {users.data &&
                users.data.map((user: User) => (
                  <div
                    key={user.id}
                    className='grid-col-1 row-start-2 mx-4 my-1 grid h-72 min-h-min w-52 min-w-min auto-rows-min gap-4 rounded-md border-2 border-black p-5 transition ease-in-out hover:scale-105 hover:cursor-pointer dark:border-neutral-200'
                  >
                    <div className='grid auto-rows-auto place-items-start'>
                      <h2 className='text-left text-2xl font-bold'>{user.name}</h2>
                      <p className='mt-2 text-lg '>{user.role}</p>
                    </div>
                    <div className='retro-pattern row-start-3 h-28'></div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </Toast.Provider>
    </>
  )
}
