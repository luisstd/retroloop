import { Retrospective } from '@prisma/client'
import { IconAlarm, IconPlayerPlay, IconPlayerStop } from '@tabler/icons-react'
import { RealtimeChannel } from 'ably'
import {
  add,
  addSeconds,
  differenceInSeconds,
  format,
  isFuture,
} from 'date-fns'
import { useEffect, useState } from 'react'

import { Button } from '@/app/ui/button'
import { Card } from '@/app/ui/card'
import { Input } from '@/app/ui/input'
import { useToast } from '@/app/ui/use-toast'

type RetroTimerProps = {
  selectedRetro: Retrospective
  handleUpdateRetro: (retro: Retrospective) => void
  timerDisplay: string
  channel: RealtimeChannel
}

export function RetroTimer({
  selectedRetro,
  handleUpdateRetro,
  channel,
  timerDisplay,
}: RetroTimerProps) {
  const { toast } = useToast()
  const [minutes, setMinutes] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    function scheduleNextUpdate() {
      const now = new Date()
      const nextTick = 1000 - now.getMilliseconds()
      timeoutId = setTimeout(updateTimer, nextTick)
    }

    function updateTimer() {
      if (
        selectedRetro.timerExpiration &&
        isFuture(selectedRetro.timerExpiration)
      ) {
        setIsTimerRunning(true)
        const now = new Date()
        const expirationDate = new Date(selectedRetro.timerExpiration)
        const secondsDiff = differenceInSeconds(expirationDate, now)

        const displayTime = format(
          addSeconds(new Date(0), secondsDiff),
          'mm:ss',
        )
        channel.publish('timerDisplay', displayTime)
        scheduleNextUpdate()
      } else {
        setIsTimerRunning(false)
      }
    }

    scheduleNextUpdate()

    return () => clearTimeout(timeoutId)
  }, [selectedRetro.timerExpiration, channel])

  function handleStartTimer() {
    updateTimer(minutes)
    toast({
      title: 'Timer started',
      description: `Timer set to ${minutes} minutes`,
    })
  }

  function handleStopTimer() {
    handleUpdateRetro({
      ...selectedRetro,
      timerExpiration: new Date(),
    })
    toast({
      title: 'Timer stopped',
      description: 'Timer has been reset',
    })
  }

  function updateTimer(minutes: number) {
    const newExpiryTimestamp = add(new Date(), { minutes })
    handleUpdateRetro({
      ...selectedRetro,
      timerExpiration: newExpiryTimestamp,
    })
  }

  return (
    <Card className='flex h-full w-full items-center justify-center gap-3 p-3'>
      <IconAlarm size={32} />

      <h1 className='text-2xl font-bold'>Timer</h1>

      <div className='mx-2 flex gap-2 text-center text-2xl'>
        {isTimerRunning ? (
          <span className='text-3xl tabular-nums'>{timerDisplay}</span>
        ) : (
          <>
            <Input
              type='number'
              min={0}
              max={99}
              maxLength={2}
              size={2}
              placeholder='00'
              onChange={(e) => setMinutes(Number(e.currentTarget.value))}
            />
            <span className='self-center'>min</span>
          </>
        )}
      </div>

      {isTimerRunning ? (
        <Button
          size='icon'
          variant='ghost'
          onClick={handleStopTimer}
          aria-label='Reset timer'
        >
          <IconPlayerStop size={24} />
        </Button>
      ) : (
        <Button
          size='icon'
          variant='ghost'
          onClick={handleStartTimer}
          aria-label='Start timer'
        >
          <IconPlayerPlay size={24} />
        </Button>
      )}
    </Card>
  )
}
