import { Card } from '@/app/ui/card/card'

export default function RetroLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='flex flex-col items-center'>
        <Card className='m-5 p-5'>
          <div className='grid-rows-auto flex h-5/6 w-full grid-cols-3 flex-col place-items-center gap-5 lg:grid'>
            {children}
          </div>
        </Card>
      </div>
    </>
  )
}
