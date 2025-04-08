'use client'

import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import { Workout, Exercise, CompletedSet } from '@/stores/workout/types'





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
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link 
          href={`/workouts/${resolvedParams.id}`}
          className="text-gray-400 hover:text-white flex items-center gap-2 mb-4 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Вернуться к программе
        </Link>
        <h1 className="text-3xl font-bold text-gray-100 mb-2">{workout.name}</h1>
      </div>

      {isWarmup ? (
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">Разминка</h2>
          <div className="text-center">
            <div className="text-6xl font-bold text-blue-500 mb-4">{formatTime(timer)}</div>
            <p className="text-gray-400">Разомнитесь перед началом тренировки</p>
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">
            {workout.exercises[currentExercise].name}
          </h2>
          
          <div className="mb-6">
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-400 mb-1">Вес (кг)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="70"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-400 mb-1">Повторения</label>
                <input
                  type="number"
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="12"
                />
              </div>
            </div>
            <button
              onClick={handleSetComplete}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Записать подход
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Текущая тренировка */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="bg-gray-800 px-4 py-3 border-b border-gray-700">
                <h3 className="text-gray-100 font-semibold">Текущая тренировка</h3>
              </div>
              <div className="p-4">
                <table className="w-full border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="text-left pb-3 text-sm font-semibold text-gray-300 border-b border-gray-700">Подход</th>
                      <th className="text-right pb-3 text-sm font-semibold text-gray-300 border-b border-gray-700">Вес</th>
                      <th className="text-right pb-3 text-sm font-semibold text-gray-300 border-b border-gray-700">Повт.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workout.exercises[currentExercise].sets.map((set, index) => {
                      const completedSet = completedSets[index];
                      return (
                        <tr key={index}>
                          <td className="py-3 text-gray-300 border-b border-gray-800">{index + 1}</td>
                          <td className="py-3 text-right text-gray-200 font-medium border-b border-gray-800">
                            {completedSet?.weight || '—'}
                          </td>
                          <td className="py-3 text-right text-gray-200 border-b border-gray-800">
                            {completedSet?.reps || '—'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Прошлая тренировка */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="bg-gray-800 px-4 py-3 border-b border-gray-700">
                <h3 className="text-gray-400 font-semibold">Прошлая тренировка</h3>
              </div>
              <div className="p-4">
                <table className="w-full border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="text-left pb-3 text-sm font-semibold text-gray-400 border-b border-gray-700">Подход</th>
                      <th className="text-right pb-3 text-sm font-semibold text-gray-400 border-b border-gray-700">Вес</th>
                      <th className="text-right pb-3 text-sm font-semibold text-gray-400 border-b border-gray-700">Повт.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workout.exercises[currentExercise].previousSets?.map((set, index) => (
                      <tr key={index}>
                        <td className="py-3 text-gray-400 border-b border-gray-800">{index + 1}</td>
                        <td className="py-3 text-right text-gray-400 font-medium border-b border-gray-800">{set.weight}</td>
                        <td className="py-3 text-right text-gray-400 border-b border-gray-800">{set.reps}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {completedSets.length >= workout.exercises[currentExercise].sets.length && (
            <div className="mt-6">
              <button
                onClick={handleNextExercise}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
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