'use client'

import { useState, use } from 'react'
import { useRouter } from 'next/navigation'
import { Workout } from '@/stores/workout/types'
import ExerciseCard from '@/components/ExerciseCard'
import BackButton from '@/components/ui/BackButton'
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
      image: '/exercises/squat.jpg', 
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
    <div className="container mx-auto py-4 sm:py-8 px-4">
      <div className="mb-4 sm:mb-6">
        <BackButton href="/workouts" label="Назад к тренировкам" />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-4 sm:mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-100">{workout.name}</h1>
            <time className="text-sm sm:text-base text-gray-400">{new Date(workout.date).toLocaleDateString('ru-RU')}</time>
          </div>
          <button
            onClick={handleStartWorkout}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <PlayIcon className="w-5 h-5" />
            <span className="text-sm sm:text-base">Начать тренировку</span>
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