import { User } from '@prisma/client'
import { useTheme } from 'next-themes'
import { GridLoader } from 'react-spinners'

import InviteUserDialog from '@/components/TeamSection/components/InviteUserDialog'
import { UserInput } from '@/types/user'
import { trpc } from '@/utils/trpc'

export default function TeamSection() {
  const { resolvedTheme } = useTheme()

  const users = trpc.user.getAll.useQuery()

  const mutation = trpc.user.add.useMutation({
    onSuccess: async () => {
      users.refetch()
    },
  })

  const handleAddUser = async (input: UserInput) => {
    mutation.mutate(input)
  }

  return (
    <div className='flex items-center w-screen h-full max-w-screen-2xl'>
      <section className='relative w-full h-full p-10 mx-5 mt-10 border-2 rounded-md shadow-md border-base-dark dark:border-base-light bg-base-light dark:bg-base-dark'>
        <div className='flex flex-row items-baseline'>
          <h2 className='p-5 text-center'>TEAM</h2>
          <div className='flex justify-end w-full mb-10'>
            <InviteUserDialog handleAddUser={handleAddUser} />
          </div>
        </div>

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
  )
}
