import { Card } from '@/app/ui/card'

export default function RetroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Card className='m-5 flex w-[calc(100%-1rem)] flex-col place-items-center gap-5 p-5 lg:grid lg:grid-cols-3'>
      {children}
    </Card>
  )
}
