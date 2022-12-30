import { RetroItem } from '@prisma/client'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons'

type ItemSwitcherProps = {
  handleNextItem: () => void
  handlePreviousItem: () => void
  retroItems: RetroItem[]
  currentIndex: number
}

function ItemSwitcher({
  handleNextItem,
  handlePreviousItem,
  currentIndex,
  retroItems,
}: ItemSwitcherProps) {
  return (
    <div className='flex items-center gap-2 mx-2'>
      {currentIndex > 0 ? (
        <button
          onClick={handlePreviousItem}
          className='flex flex-row items-center gap-2 px-5 py-2 text-lg transition ease-in-out border-2 border-black rounded-md w-fit dark:border-neutral-200 hover:scale-105 hover:cursor-pointe'
        >
          <IconArrowLeft />
          Previous
        </button>
      ) : (
        <button className='flex flex-row items-center gap-2 px-5 py-2 text-lg transition ease-in-out border-2 border-black rounded-md w-fit dark:border-neutral-200 hover:scale-105 hover:cursor-pointe'>
          <IconArrowLeft />
          Previous
        </button>
      )}
      {currentIndex < retroItems.length - 1 ? (
        <button
          onClick={handleNextItem}
          className='flex flex-row items-center gap-2 px-5 py-2 text-lg transition ease-in-out border-2 border-black rounded-md w-fit dark:border-neutral-200 hover:scale-105 hover:cursor-pointe'
        >
          Next
          <IconArrowRight />
        </button>
      ) : (
        <button className='flex flex-row items-center gap-2 px-5 py-2 text-lg transition ease-in-out border-2 border-black rounded-md w-fit dark:border-neutral-200 hover:scale-105 hover:cursor-pointe'>
          Next
          <IconArrowRight />
        </button>
      )}
    </div>
  )
}

export default ItemSwitcher
