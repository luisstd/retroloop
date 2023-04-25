import { Retrospective } from '@prisma/client'
import { IconAlarm, IconPlayerPause, IconPlayerPlay, IconRefresh } from '@tabler/icons-react'
import { add } from 'date-fns'
import { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'

type RetroTimerProps = {
  selectedRetro: Retrospective
  handleUpdateRetro: (input: Retrospective) => void
}

function RetroTimer({ selectedRetro, handleUpdateRetro }: RetroTimerProps) {
  const timer = useTimer({
    expiryTimestamp: selectedRetro.timerExpiration,
    autoStart: false,
    onExpire: () => console.warn('onExpire called'),
  })

  function checkLength(timeUnit: number): number {
    return timeUnit.toString().length
  }

  function handleUpdateTimer(minutes: number): void {
    const now: Date = new Date()
    const newExpiryTimestamp =
      selectedRetro && selectedRetro.timerExpiration.getTime() > now.getTime()
        ? selectedRetro.timerExpiration
        : add(now, {
            minutes: minutes,
          })

    selectedRetro
      ? handleUpdateRetro({
          ...selectedRetro,
          timerExpiration: newExpiryTimestamp,
        })
      : null
  }

  const [minutes, setMinutes] = useState(0)

  const [isSecondsSingleDigit, setSecondsSingleDigit] = useState(false)
  const [isMinutesSingleDigit, setMinutesSingleDigit] = useState(false)

  function handleMinutes(minutes: number): void {
    setMinutes(minutes)
  }

  useEffect(() => {
    checkLength(timer.minutes) === 1 ? setMinutesSingleDigit(true) : setMinutesSingleDigit(false)
    checkLength(timer.seconds) === 1 ? setSecondsSingleDigit(true) : setSecondsSingleDigit(false)

    const now = new Date()
    const doesTimerExist: boolean = selectedRetro.timerExpiration.getTime() > now.getTime()
    doesTimerExist
      ? () => {
          handleUpdateTimer(minutes),
            timer.minutes || timer.seconds
              ? timer.resume()
              : timer.restart(selectedRetro.timerExpiration)
        }
      : null
  }, [timer.minutes, timer.seconds, selectedRetro.timerExpiration])

  return timer ? (
    <div className='flex items-center justify-center gap-3'>
      <IconAlarm size={36} />
      <h1 className='text-2xl font-bold'>Timer</h1>
      <div className='flex gap-2 mx-2 text-2xl '>
        {!timer.isRunning && !timer.minutes ? (
          <input
            type='number'
            className='p-1 border-2 rounded-md bg-neutral-100 dark:bg-neutral-700 border-base-dark dark:border-base-light max-w-max'
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
            handleUpdateTimer(minutes)
            timer.minutes || timer.seconds
              ? timer.resume()
              : timer.restart(selectedRetro.timerExpiration)
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
