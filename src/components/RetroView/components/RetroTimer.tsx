import React, { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'

import { IconAlarm, IconPlayerPause, IconPlayerPlay, IconRefresh } from '@tabler/icons'

type RetroTimerProps = {
  expiryTimestamp: Date
  minutes: number
  handleMinutes: (minutes: number) => void
  handleTimer: (minutes: number) => void
}

function RetroTimer({ expiryTimestamp, minutes, handleMinutes, handleTimer }: RetroTimerProps) {
  const timer = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => console.warn('onExpire called'),
  })

  function checkLength(timeUnit: number): number {
    return timeUnit.toString().length
  }

  const [isSecondsSingleDigit, setSecondsSingleDigit] = useState(false)
  const [isMinutesSingleDigit, setMinutesSingleDigit] = useState(false)

  useEffect(() => {
    checkLength(timer.minutes) === 1 ? setMinutesSingleDigit(true) : setMinutesSingleDigit(false)
    checkLength(timer.seconds) === 1 ? setSecondsSingleDigit(true) : setSecondsSingleDigit(false)

    const now = new Date()
    const doesTimerExist: boolean = expiryTimestamp.getTime() > now.getTime()
    doesTimerExist
      ? () => {
          handleTimer(minutes),
            timer.minutes || timer.seconds ? timer.resume() : timer.restart(expiryTimestamp)
        }
      : null
  }, [timer.minutes, timer.seconds, expiryTimestamp])

  return timer ? (
    <div className='flex items-center justify-center gap-3'>
      <IconAlarm size={36} />
      <h1 className='text-2xl font-bold'>Timer</h1>
      <div className='flex gap-2 mx-2 text-2xl '>
        {!timer.isRunning && !timer.minutes ? (
          <input
            type='number'
            className='p-1 border-2 border-black rounded-md max-w-min dark:border-neutral-200'
            min={0}
            max={99}
            maxLength={2}
            size={2}
            placeholder='00'
            onChange={(e) => handleMinutes(Number(e.currentTarget.value))}
          />
        ) : (
          <span className='text-4xl'>
            {isMinutesSingleDigit ? 0 : null}
            {timer.minutes}:
          </span>
        )}
        {!timer.isRunning && !timer.minutes ? (
          <span className='self-center'>min</span>
        ) : (
          <span className='text-4xl'>
            {isSecondsSingleDigit ? 0 : null}
            {timer.seconds}
          </span>
        )}
      </div>
      {!timer.isRunning ? (
        <button
          onClick={() => {
            handleTimer(minutes)
            timer.minutes || timer.seconds ? timer.resume() : timer.restart(expiryTimestamp)
          }}
        >
          <IconPlayerPlay size={36} />
        </button>
      ) : (
        <button onClick={timer.pause}>
          <IconPlayerPause size={36} onClick={timer.pause} />
        </button>
      )}
      <button
        onClick={() => {
          const time = new Date()
          timer.restart(time)
        }}
      >
        <IconRefresh size={34} />
      </button>
    </div>
  ) : null
}

export default RetroTimer
