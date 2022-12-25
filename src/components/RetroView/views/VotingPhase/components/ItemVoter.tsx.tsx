import { RetroItem, Retrospective } from '@prisma/client'
import { IconThumbDown, IconThumbUp } from '@tabler/icons'
import { useSession } from 'next-auth/react'

import CommonDeleteDialog from '@/components/common/CommonDeleteDialog'
import CommonEditDialog from '@/components/common/CommonEditDialog'
import { trpc } from '@/utils/trpc'

type ItemVoterProps = {
  title: string
  retrospective: Retrospective
  itemType: string
}

function ItemVoter({ title, retrospective, itemType }: ItemVoterProps) {
  const retroItems = trpc.retroItem.getAllByRetroId.useQuery(retrospective.id)
  const { data: session } = useSession()

  const userId = session?.user?.id

  const mutationEdit = trpc.retroItem.edit.useMutation({
    onSuccess: () => {
      retroItems.refetch()
    },
  })

  function handleEditRetroItem(input: RetroItem): void {
    mutationEdit.mutate(input)
  }

  return (
    <div className='w-full h-full'>
      <div className='flex flex-row items-center pb-3 border-b-2 border-black dark:border-neutral-200'>
        <h2 className='p-1 m-2 mr-auto text-xl font-bold'>{title}</h2>
      </div>
      <ul>
        {retroItems.data &&
          retroItems.data.map((item, index) =>
            item.type === itemType ? (
              <li
                className='flex justify-between p-2 my-3 border-2 border-black rounded-md dark:border-neutral-200'
                key={index}
              >
                <p className='p-1'>{item.content}</p>

                <div className='flex items-center mx-2'>
                  <IconThumbUp size={28} />
                </div>
              </li>
            ) : null
          )}
      </ul>
    </div>
  )
}

export default ItemVoter
