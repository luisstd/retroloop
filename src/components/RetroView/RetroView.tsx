import { Retrospective } from '@prisma/client'
import { add } from 'date-fns'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import GridLoader from 'react-spinners/GridLoader'

import ActionButtons from '@/components/RetroView/components/ActionButtons'
import ItemCollector from '@/components/RetroView/components/ItemCollector/ItemCollector'
import PhaseIndicator from '@/components/RetroView/components/PhaseIndicator'
import RetroTimer from '@/components/RetroView/components/RetroTimer'
import { trpc } from '@/utils/trpc'

const RetroView = () => {
  const { resolvedTheme } = useTheme()
  const router = useRouter()

  // get selected retro
  const retroId = String(router.query.id)
  const selectedRetro = trpc.retrospective.getById.useQuery(retroId)

  const [minutes, setMinutes] = useState(0)
  const [expiryTimestamp, setExpiryTimeStamp] = useState(selectedRetro.data?.timerExpiration)

  const editRetro = trpc.retrospective.edit.useMutation({
    onSuccess: async () => {
      selectedRetro.refetch()
    },
  })

  const handleUpdateRetro = (input: Retrospective) => {
    editRetro.mutate(input)
  }

  const updateTimer = trpc.retrospective.updateTimer.useQuery({
    id: retroId,
    timerExpiration: expiryTimestamp,
  })

  function handleUpdateTimer(minutes: number): void {
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
    handleUpdateTimer(minutes)
  }, [minutes])

  useEffect(() => {
    updateTimer.refetch()
  }, [expiryTimestamp])

  return selectedRetro.data ? (
    <>
      <div className='flex items-center w-screen h-full max-w-screen-2xl'>
        <section className='w-full h-screen p-5 mx-5 border-2 border-black rounded-md dark:border-neutral-200'>
          <h2 className='p-5'>{selectedRetro.data.name}</h2>

          <div className='grid w-full grid-cols-3 gap-5 grid-rows-auto h-5/6 place-items-center'>
            <div className='w-full col-start-1 row-start-1 p-5 border-2 border-black rounded-md dark:border-neutral-200'>
              <PhaseIndicator
                retrospective={selectedRetro.data}
                handleUpdateRetro={handleUpdateRetro}
              />
            </div>
            <div className='col-start-2 row-start-1 p-5 border-2 border-black rounded-md dark:border-neutral-200'>
              {expiryTimestamp ? (
                <RetroTimer
                  expiryTimestamp={expiryTimestamp}
                  handleTimer={handleUpdateTimer}
                  handleMinutes={handleMinutes}
                  minutes={minutes}
                />
              ) : null}
            </div>
            <ActionButtons
              retrospective={selectedRetro.data}
              handleUpdateRetro={handleUpdateRetro}
            />

            {selectedRetro.data ? (
              <>
                <div className='w-full h-full col-start-1 row-span-6 row-start-2 p-5 border-2 border-black rounded-md dark:border-neutral-200'>
                  <ItemCollector
                    retrospective={selectedRetro.data}
                    itemType='success'
                    title={'things that went well'}
                  />
                </div>
                <div className='w-full h-full col-start-2 row-span-6 row-start-2 p-5 border-2 border-black rounded-md dark:border-neutral-200'>
                  <ItemCollector
                    retrospective={selectedRetro.data}
                    itemType='improvement'
                    title={'things that can be improved'}
                  />
                </div>
                <div className='w-full h-full col-start-3 row-span-6 row-start-2 p-5 border-2 border-black rounded-md dark:border-neutral-200'>
                  <ItemCollector
                    retrospective={selectedRetro.data}
                    itemType='action'
                    title={'things to start doing'}
                  />
                </div>
              </>
            ) : null}
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
