import { IconUsersGroup } from '@tabler/icons-react'

export function TeamFallback() {
  return (
    <div className='col-span-full grid place-items-center gap-4 p-5 sm:p-16'>
      <IconUsersGroup size={100} />
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        Your team members will show up here
      </h3>
      <p className='text-lg text-muted-foreground'>
        Anyone who collaborated in a retrospective with you will be added to your dashboard
      </p>
    </div>
  )
}
