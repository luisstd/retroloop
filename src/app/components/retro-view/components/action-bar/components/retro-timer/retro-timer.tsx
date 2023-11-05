'use client'

import { Retrospective } from '@prisma/client'
import { IconAlarm, IconPlayerPause, IconPlayerPlay, IconRefresh } from '@tabler/icons-react'
import { add } from 'date-fns'
import { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'
import { Button } from 'src/app/ui/button/button'
import { Card } from 'src/app/ui/card/card'
import { Input } from 'src/app/ui/input/input'
import { useToast } from 'src/app/ui/toast/use-toast'

type RetroTimerProps = {
  selectedRetro: Retrospective
  handleUpdateRetro: (input: Retrospective) => void
}

export function RetroTimer({ selectedRetro, handleUpdateRetro }: RetroTimerProps) {
  const { toast } = useToast()
  const [minutes, setMinutes] = useState(0)
  const [timerStarted, setTimerStarted] = useState(false)
  const [isSingleDigit, setIsSingleDigit] = useState({ minutes: false, seconds: false })

  const timer = useTimer({
    expiryTimestamp: selectedRetro.timerExpiration,
    autoStart: selectedRetro.timerExpiration.getTime() > new Date().getTime(),
    onExpire: () => console.warn('onExpire called'),
  })

  const checkIsSingleDigit = (num: number) => num.toString().length === 1

  function updateTimer(minutes: number): void {
    const now: Date = new Date()

    const newExpiryTimestamp =
      selectedRetro.timerExpiration.getTime() > now.getTime()
        ? selectedRetro.timerExpiration
        : add(now, {
            minutes: minutes,
          })

    handleUpdateRetro({
      ...selectedRetro,
      timerExpiration: newExpiryTimestamp,
    })

    setTimerStarted(true)
  }

  function resumeTimer(): void {
    timer.minutes || timer.seconds ? timer.resume() : timer.restart(selectedRetro.timerExpiration)
  }

  function onStartTimer(): void {
    updateTimer(minutes)
    toast({
      title: 'Timer started',
      description: `Timer set to ${minutes} minutes`,
    })
  }

  useEffect(() => {
    setIsSingleDigit({
      minutes: checkIsSingleDigit(timer.minutes),
      seconds: checkIsSingleDigit(timer.seconds),
    })
  }, [timer.minutes, timer.seconds])

  useEffect(() => {
    if (timerStarted && !timer.isRunning) {
      resumeTimer()
      setTimerStarted(false)
    }
  }, [timerStarted, timer.isRunning])

  return (
    <Card className='flex h-full w-full items-center justify-center gap-3 p-3'>
      <IconAlarm size={32} />

      <h1 className='text-2xl font-bold'>Timer</h1>

      <div className='mx-2 flex gap-2 text-center text-2xl'>
        {!timer.isRunning && !timer.minutes ? (
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
        ) : (
          <>
            <span className='w-12 text-4xl'>
              {isSingleDigit.minutes ? 0 : null}
              {timer.minutes}
            </span>
            <span className='self-center text-4xl'>:</span>
            <span className='w-12 text-4xl'>
              {isSingleDigit.seconds ? 0 : null}
              {timer.seconds}
            </span>
          </>
        )}
      </div>

      <Button size='icon' variant='ghost' onClick={timer.isRunning ? timer.pause : onStartTimer}>
        {timer.isRunning ? <IconPlayerPause size={24} /> : <IconPlayerPlay size={24} />}
      </Button>

      <Button
        size='icon'
        variant='ghost'
        onClick={() => {
          const time = new Date()

          handleUpdateRetro({
            ...selectedRetro,
            timerExpiration: new Date(),
          })

          timer.restart(time)
        }}
      >
        <IconRefresh size={24} />
      </Button>
    </Card>
  )
}
