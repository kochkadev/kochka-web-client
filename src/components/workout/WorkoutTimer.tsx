import { useEffect, useState } from 'react'
import { formatTime } from '@/utils/time'

interface WorkoutTimerProps {
  onTimeUpdate?: (time: number) => void
}

export default function WorkoutTimer({ onTimeUpdate }: WorkoutTimerProps) {
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      const newTime = Math.floor((Date.now() - startTime) / 1000)
      setElapsedTime(newTime)
      onTimeUpdate?.(newTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [onTimeUpdate])

  return (
    <div className="text-gray-400 text-sm">
      Время тренировки: {formatTime(elapsedTime)}
    </div>
  )
} 