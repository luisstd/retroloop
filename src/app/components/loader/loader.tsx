import { useTheme } from 'next-themes'
import { GridLoader } from 'react-spinners'

type LoaderProps = {
  isLoading: boolean
  fullHeight?: boolean
}

export function Loader({ isLoading, fullHeight }: LoaderProps) {
  const { resolvedTheme } = useTheme()

  return (
    <div className={`grid w-full place-items-center ${fullHeight && 'h-screen'}`}>
      <GridLoader
        color={resolvedTheme === 'light' ? 'black' : 'white'}
        loading={isLoading}
        size={15}
        aria-label='Loading Spinner'
      />
    </div>
  )
}
