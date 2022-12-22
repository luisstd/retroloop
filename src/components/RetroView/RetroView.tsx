import { Retrospective } from '@prisma/client'
import { add } from 'date-fns'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import GridLoader from 'react-spinners/GridLoader'

import VotingView from '@/components/RetroView/views/VotingPhase/VotingView'
import WritingView from '@/components/RetroView/views/WritingPhase/WritingView'
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

  return selectedRetro.data && expiryTimestamp ? (
    <>
      <div className='flex items-center w-screen h-full max-w-screen-2xl'>
        {selectedRetro.data.phase === 'WRITING' ? (
          <WritingView
            selectedRetro={selectedRetro.data}
            expiryTimestamp={expiryTimestamp}
            minutes={minutes}
            handleMinutes={handleMinutes}
            handleUpdateRetro={handleUpdateRetro}
            handleUpdateTimer={handleUpdateTimer}
          />
        ) : null}

        {selectedRetro.data.phase === 'VOTING' ? (
          <VotingView
            selectedRetro={selectedRetro.data}
            expiryTimestamp={expiryTimestamp}
            minutes={minutes}
            handleMinutes={handleMinutes}
            handleUpdateRetro={handleUpdateRetro}
            handleUpdateTimer={handleUpdateTimer}
          />
        ) : null}
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
