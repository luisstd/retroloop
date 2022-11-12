import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { trpc } from '@/utils/trpc'
import { add } from 'date-fns'

import PhaseIndicator from '@/components/RetroView/components/PhaseIndicator'
import RetroTimer from '@/components/RetroView/components/RetroTimer'
import ActionButtons from '@/components/RetroView/components/ActionButtons'
import ItemCollector from '@/components/RetroView/components/ItemCollector'
import GridLoader from 'react-spinners/GridLoader'
import { useTheme } from 'next-themes'

const RetroView = (props: any) => {
  const { resolvedTheme } = useTheme()
  const router = useRouter()

  // get selected retro
  const retroId = String(router.query.id)
  const selectedRetro = trpc.retrospective.getById.useQuery(retroId)

  const [expiryTimestamp, setExpiryTimeStamp] = useState(selectedRetro.data?.timerExpiration)

  const [seconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  function handleTimer(seconds: number, minutes: number): void {
    const now = new Date()
    const newExpiryTimestamp = add(now, { minutes: minutes, seconds: seconds })

    setExpiryTimeStamp(newExpiryTimestamp)
  }

  function handleMinutes(minutes: number): void {
    setMinutes(minutes)
  }

  useEffect(() => {
    handleTimer(seconds, minutes)
  }, [seconds, minutes])

  return selectedRetro.isSuccess ? (
    <>
      <div className='flex items-center w-screen h-full max-w-screen-2xl'>
        <section className='w-full h-screen p-10 mx-5 border-2 border-black rounded-md dark:border-neutral-200'>
          <h2 className='p-5'>{props.retroName}</h2>

          <div className='grid w-full h-full grid-cols-3 grid-rows-2 gap-5 place-items-center'>
            <div className='col-start-1 row-start-1 p-10 border-2 border-black rounded-md dark:border-neutral-200'>
              <PhaseIndicator />
            </div>
            <div className='col-start-2 row-start-1 p-10 border-2 border-black rounded-md dark:border-neutral-200'>
              <RetroTimer
                expiryTimestamp={expiryTimestamp}
                handleTimer={handleTimer}
                handleMinutes={handleMinutes}
                seconds={seconds}
                minutes={minutes}
              />
            </div>
            <div className='col-start-3 row-start-1 p-10 border-2 border-black rounded-md dark:border-neutral-200'>
              <ActionButtons />
            </div>

            <div className='col-start-1 row-start-2 p-10 border-2 border-black rounded-md dark:border-neutral-200'>
              <ItemCollector />
            </div>
            <div className='col-start-2 row-start-2 p-10 border-2 border-black rounded-md dark:border-neutral-200'>
              <ItemCollector />
            </div>
            <div className='col-start-3 row-start-2 p-10 border-2 border-black rounded-md dark:border-neutral-200'>
              <ItemCollector />
            </div>
          </div>
        </section>
      </div>
    </>
  ) : (
    <div className='grid h-screen place-items-center'>
      <GridLoader
        color={resolvedTheme === 'light' ? 'black' : 'white'}
        loading={selectedRetro.isLoading}
        size={15}
        aria-label='Loading Spinner'
      />
    </div>
  )
}

export default RetroView
