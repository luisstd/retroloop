import { trpc } from '@/utils/trpc'
import { User } from '@prisma/client'

import InviteUserDialog from '@/components/TeamSection/components/InviteUserDialog'

export default function TeamSection() {
  const users = trpc.useQuery(['user.getAll'])

  const mutation = trpc.useMutation(['user.add'], {
    onSuccess: async () => {
      users.refetch()
    },
  })

  const handleAddUser = async (values: User) => {
    mutation.mutate(values)
  }

  return (
    <div className='flex items-center w-screen h-full max-w-screen-2xl'>
      <section className='w-full h-full p-10 mx-5 mt-10 border-2 border-black rounded-md dark:border-neutral-200'>
        <div className='flex'>
          <h2 className='p-5'>TEAM</h2>
          <div className='flex justify-end w-full mb-10'>
            <InviteUserDialog handleAddUser={handleAddUser} />
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-start gap-4'>
          {users.data &&
            users.data.map((user: User) => (
              <div
                key={user.id}
                className='grid row-start-2 gap-4 p-5 pb-0 mx-4 transition ease-in-out border-2 border-black rounded-md h-72 w-52 dark:border-neutral-200 auto-rows-min grid-col-1 hover:cursor-pointer hover:scale-105 min-w-min min-h-min'
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
