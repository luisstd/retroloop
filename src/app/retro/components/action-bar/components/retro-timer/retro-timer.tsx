import { Retrospective } from '@prisma/client'
import { IconAlarm, IconPlayerPlay, IconPlayerStop } from '@tabler/icons-react'
import { add, differenceInSeconds, format, isFuture } from 'date-fns'
import { useEffect, useState } from 'react'

import { Button } from '@/app/ui/button/button'
import { Card } from '@/app/ui/card/card'
import { Input } from '@/app/ui/input/input'
import { useToast } from '@/app/ui/toast/use-toast'

type RetroTimerProps = {
  selectedRetro: Retrospective
  handleUpdateRetro: (retro: Retrospective) => void
}

export function RetroTimer({ selectedRetro, handleUpdateRetro }: RetroTimerProps) {
  const { toast } = useToast()
  const [minutes, setMinutes] = useState(0)
  const [timerDisplay, setTimerDisplay] = useState('00:00')
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedRetro.timerExpiration && isFuture(selectedRetro.timerExpiration)) {
        setIsTimerRunning(true)
        const secondsDiff = differenceInSeconds(selectedRetro.timerExpiration, new Date())
        setTimerDisplay(format(add(new Date(0), { seconds: secondsDiff }), 'mm:ss'))
      } else {
        clearInterval(interval)
        setIsTimerRunning(false)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [selectedRetro.timerExpiration])

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
          <span className='w-28 text-4xl'>{timerDisplay}</span>
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
        <Button size='icon' variant='ghost' onClick={handleStopTimer}>
          <IconPlayerStop size={24} />
        </Button>
      ) : (
        <Button size='icon' variant='ghost' onClick={handleStartTimer}>
          <IconPlayerPlay size={24} />
        </Button>
      )}
    </Card>
  )
}
