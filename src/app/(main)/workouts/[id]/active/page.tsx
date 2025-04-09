'use client'

import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import { Workout, CompletedSet } from '@/stores/workout/types'
import WarmupScreen from '@/components/workout/WarmupScreen'
import CurrentExercise from '@/components/workout/CurrentExercise'

// Временные данные для демонстрации
const mockWorkout: Workout = {
  id: '1',
  date: '2024-04-08',
  name: 'Тренировка ног',
  exercises: [
    {
      id: 1,
      name: 'Приседания со штангой',
      sets: [
        { weight: 60, reps: 12 },
        { weight: 70, reps: 10 },
        { weight: 80, reps: 8 }
      ],
      previousSets: [
        { weight: 55, reps: 12 },
        { weight: 65, reps: 10 },
        { weight: 75, reps: 8 }
      ]
    },
    {
      id: 2,
      name: 'Становая тяга',
      sets: [
        { weight: 80, reps: 10 },
        { weight: 90, reps: 8 },
        { weight: 100, reps: 6 }
      ],
      previousSets: [
        { weight: 75, reps: 10 },
        { weight: 85, reps: 8 },
        { weight: 95, reps: 6 }
      ]
    }
  ]
}

export default function ActiveWorkoutPage({ params }: { params: Promise<{ id: string }> }) {
  const [workout] = useState<Workout>(mockWorkout)
  const [isWarmup, setIsWarmup] = useState(true)
  const [timer, setTimer] = useState(10)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [completedSets, setCompletedSets] = useState<CompletedSet[]>([])
  const [weight, setWeight] = useState('')
  const [reps, setReps] = useState('')
  const resolvedParams = use(params)

  useEffect(() => {
    if (isWarmup && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)

      return () => clearInterval(interval)
    } else if (isWarmup && timer === 0) {
      setIsWarmup(false)
    }
  }, [isWarmup, timer])

  const handleSetComplete = () => {
    if (weight && reps) {
      setCompletedSets([...completedSets, {
        weight: Number(weight),
        reps: Number(reps)
      }])
      setWeight('')
      setReps('')
    }
  }

  const handleNextExercise = () => {
    if (currentExercise < workout.exercises.length - 1) {
      setCurrentExercise(prev => prev + 1)
      setCompletedSets([])
    }
  }

  return (
    <div className="container mx-auto py-4 sm:py-8 px-4">
      <div className="mb-4 sm:mb-6">
        <Link 
          href={`/workouts/${resolvedParams.id}`}
          className="text-gray-400 hover:text-white flex items-center gap-2 mb-3 sm:mb-4 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span className="text-sm sm:text-base">Вернуться к программе</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-2">{workout.name}</h1>
      </div>

      {isWarmup ? (
        <WarmupScreen timer={timer} />
      ) : (
        <CurrentExercise
          exercise={workout.exercises[currentExercise]}
          completedSets={completedSets}
          weight={weight}
          reps={reps}
          onWeightChange={setWeight}
          onRepsChange={setReps}
          onSetComplete={handleSetComplete}
          onNextExercise={handleNextExercise}
          isLastExercise={currentExercise === workout.exercises.length - 1}
        />
      )}
    </div>
  )
} 