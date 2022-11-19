import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { trpc } from '@/utils/trpc'
import { add } from 'date-fns'

import PhaseIndicator from '@/components/RetroView/components/PhaseIndicator'
import RetroTimer from '@/components/RetroView/components/RetroTimer'
import ActionButtons from '@/components/RetroView/components/ActionButtons'
import ItemCollector from '@/components/RetroView/components/ItemCollector'
import GridLoader from 'react-spinners/GridLoader'

const RetroView = () => {
  const { resolvedTheme } = useTheme()
  const router = useRouter()

  // get selected retro
  const retroId = String(router.query.id)
  const selectedRetro = trpc.retrospective.getById.useQuery(retroId)

  const [minutes, setMinutes] = useState(0)
  const [expiryTimestamp, setExpiryTimeStamp] = useState(selectedRetro.data?.timerExpiration)

  const updateTimer = trpc.retrospective.updateTimer.useQuery({
    id: retroId,
    timerExpiration: expiryTimestamp,
  })

  function handleTimer(minutes: number): void {
    const now: Date = new Date()

    const newExpiryTimestamp =
      selectedRetro.data && selectedRetro.data.timerExpiration.getTime() > now.getTime()
        ? selectedRetro.data.timerExpiration
        : add(now, {
            minutes: minutes,
          })

    setExpiryTimeStamp(newExpiryTimestamp)
  }

  function handleMinutes(minutes: number): void {
    setMinutes(minutes)
  }

  useEffect(() => {
    handleTimer(minutes)
  }, [minutes])

  useEffect(() => {
    updateTimer.refetch()
  }, [expiryTimestamp])

  return selectedRetro.isSuccess ? (
    <>
      <div className='flex items-center w-screen h-full max-w-screen-2xl'>
        <section className='w-full h-screen p-10 mx-5 border-2 border-black rounded-md dark:border-neutral-200'>
          <h2 className='p-5'>{selectedRetro.data?.name}</h2>

          <div className='grid w-full h-full grid-cols-3 grid-rows-2 gap-5 place-items-center'>
            <div className='col-start-1 row-start-1 p-10 border-2 border-black rounded-md dark:border-neutral-200'>
              <PhaseIndicator />
            </div>
            <div className='col-start-2 row-start-1 p-10 border-2 border-black rounded-md dark:border-neutral-200'>
              {expiryTimestamp ? (
                <RetroTimer
                  expiryTimestamp={expiryTimestamp}
                  handleTimer={handleTimer}
                  handleMinutes={handleMinutes}
                  minutes={minutes}
                />
              ) : null}
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
