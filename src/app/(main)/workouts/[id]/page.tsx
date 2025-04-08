'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Workout } from '@/stores/workout/types'

// Временные данные для демонстрации
const mockWorkout: Workout = {
  id: '1',
  date: '2024-04-08',
  name: 'Тренировка ног',
  exercises: [
    {
      id: 1,
      name: 'Приседания со штангой',
      image: '/exercises/squat.jpg', 
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
      image: '/exercises/deadlift.jpg', 
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

export default function WorkoutPage({ params }: { params: Promise<{ id: string }> }) {
  const [workout] = useState<Workout>(mockWorkout)
  const router = useRouter()
  const resolvedParams = use(params)

  const handleStartWorkout = () => {
    router.push(`/workouts/${resolvedParams.id}/active`)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link 
          href="/workouts" 
          className="text-gray-400 hover:text-white flex items-center gap-2 mb-4 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Назад к тренировкам
        </Link>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-100">{workout.name}</h1>
            <time className="text-gray-400">{new Date(workout.date).toLocaleDateString('ru-RU')}</time>
          </div>
          <button
            onClick={handleStartWorkout}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
            </svg>
            Начать тренировку
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {workout.exercises.map((exercise) => (
          <div key={exercise.id} className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row md:h-[350px]">
              <div className="md:w-1/3 relative h-[250px] md:h-auto">
                {exercise.image ? (
                  <Image
                    src={exercise.image}
                    alt={exercise.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <svg className="w-24 h-24 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6 md:w-2/3 overflow-y-auto">
                <h2 className="text-xl font-semibold text-gray-100 mb-4">{exercise.name}</h2>
                <div className="grid grid-cols-2 gap-6">
                  {/* План */}
                  <div className="overflow-x-auto bg-gray-900 rounded-lg">
                    <div className="bg-gray-700 px-4 py-3 rounded-t-lg border-b border-gray-600">
                      <h3 className="text-gray-100 font-semibold">План</h3>
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
                          {exercise.sets.map((set, index) => (
                            <tr key={index}>
                              <td className="py-3 text-gray-200 border-b border-gray-800">{index + 1}</td>
                              <td className="py-3 text-right text-gray-200 font-medium border-b border-gray-800">{set.weight}</td>
                              <td className="py-3 text-right text-gray-200 border-b border-gray-800">{set.reps}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Прошлая тренировка */}
                  <div className="overflow-x-auto bg-gray-900 rounded-lg">
                    <div className="bg-gray-700 px-4 py-3 rounded-t-lg border-b border-gray-600">
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
                          {exercise.previousSets?.map((set, index) => (
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 