import { Loader as UILoader } from '@/app/ui/loader'

type LoaderProps = {
  isLoading: boolean
  fullHeight?: boolean
}

export function Loader({ isLoading, fullHeight }: LoaderProps) {
  if (!isLoading) return null

  return (
    <div
      className={`grid w-full place-items-center ${fullHeight ? 'h-screen' : 'min-h-[200px] py-8'}`}
    >
      <UILoader size='lg' />
    </div>
  )
}
