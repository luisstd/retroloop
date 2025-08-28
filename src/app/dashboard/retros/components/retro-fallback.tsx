import { IconLayoutDashboard } from '@tabler/icons-react'

export function RetroFallback() {
  return (
    <div className='col-span-full grid place-items-center gap-4 p-5 sm:p-16'>
      <IconLayoutDashboard size={100} />

      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        Your retrospectives will show up here
      </h3>

      <p className='text-muted-foreground text-lg'>
        Any retro you join or create will be added to your dashboard
      </p>
    </div>
  )
}
