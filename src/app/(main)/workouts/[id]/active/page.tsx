'use client'

import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import { Workout, Exercise, CompletedSet } from '@/stores/workout/types'
import WorkoutTable from '@/components/workout/WorkoutTable'





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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

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
        <div className="bg-gray-800 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-100 mb-3 sm:mb-4">Разминка</h2>
          <div className="text-center">
            <div className="text-4xl sm:text-6xl font-bold text-blue-500 mb-3 sm:mb-4">{formatTime(timer)}</div>
            <p className="text-sm sm:text-base text-gray-400">Разомнитесь перед началом тренировки</p>
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-100 mb-3 sm:mb-4">
            {workout.exercises[currentExercise].name}
          </h2>
          
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1">Вес (кг)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="70"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1">Повторения</label>
                <input
                  type="number"
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="12"
                />
              </div>
            </div>
            <button
              onClick={handleSetComplete}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm sm:text-base"
            >
              Записать подход
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
            {/* Текущая тренировка */}
            <WorkoutTable 
              title="Текущая тренировка"
              sets={workout.exercises[currentExercise].sets.map((set, index) => ({
                ...set,
                weight: completedSets[index]?.weight || 0,
                reps: completedSets[index]?.reps || 0
              }))}
            />

            {/* Прошлая тренировка */}
            <WorkoutTable 
              title="Прошлая тренировка"
              sets={workout.exercises[currentExercise].previousSets || []}
              isHistory
            />
          </div>

          {completedSets.length >= workout.exercises[currentExercise].sets.length && (
            <div className="mt-4 sm:mt-6">
              <button
                onClick={handleNextExercise}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm sm:text-base"
                disabled={currentExercise === workout.exercises.length - 1}
              >
                {currentExercise === workout.exercises.length - 1 
                  ? 'Тренировка завершена'
                  : 'Следующее упражнение'
                }
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
} 