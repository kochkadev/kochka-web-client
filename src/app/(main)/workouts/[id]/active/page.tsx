'use client'

import { useState, useEffect, use } from 'react'
import { Workout, CompletedSet } from '@/stores/workout/types'
import WarmupScreen from '@/components/workout/WarmupScreen'
import CurrentExercise from '@/components/workout/CurrentExercise'
import BackButton from '@/components/ui/BackButton'
import WorkoutTimer from '@/components/workout/WorkoutTimer'
import WorkoutCompleteScreen from '@/components/workout/WorkoutCompleteScreen'

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
  const [workoutDuration, setWorkoutDuration] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
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
    } else {
      setIsComplete(true)
    }
  }

  const handleBack = () => {
    window.location.href = `/workouts/${resolvedParams.id}`
  }

  return (
    <div className="container mx-auto py-4 sm:py-8 px-4">
      <div className="mb-4 sm:mb-6">
        <BackButton href={`/workouts/${resolvedParams.id}`} label="Вернуться к программе" />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-2">{workout.name}</h1>
        {!isWarmup && !isComplete && <WorkoutTimer onTimeUpdate={setWorkoutDuration} />}
      </div>

      {isWarmup ? (
        <WarmupScreen timer={timer} />
      ) : isComplete ? (
        <WorkoutCompleteScreen duration={workoutDuration} onBack={handleBack} />
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