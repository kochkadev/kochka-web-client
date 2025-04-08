'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Workout } from '@/stores/workout/types'
import ExerciseCard from '@/components/ExerciseCard'
import BackIcon from '@/assets/icons/back.svg'
import PlayIcon from '@/assets/icons/play.svg'

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
          <BackIcon className="w-5 h-5" />
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
            <PlayIcon className="w-5 h-5" />
            Начать тренировку
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {workout.exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  )
} 