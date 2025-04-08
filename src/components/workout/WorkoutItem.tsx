'use client'

import Link from 'next/link'
import { Workout } from '@/stores/workout/types'

interface WorkoutItemProps {
  workout: Workout
}

export default function WorkoutItem({ workout }: WorkoutItemProps) {
  return (
    <Link 
      href={`/workouts/${workout.id}`}
      className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors h-full"
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold text-gray-100">{workout.name}</h2>
          <time className="text-gray-400 text-sm">
            {new Date(workout.date).toLocaleDateString('ru-RU')}
          </time>
        </div>
        <div className="mt-auto">
          <p className="text-gray-400">
            {workout.exercises.length} {getExerciseWord(workout.exercises.length)}
          </p>
        </div>
      </div>
    </Link>
  )
}

function getExerciseWord(count: number): string {
  if (count === 1) return 'упражнение'
  if (count >= 2 && count <= 4) return 'упражнения'
  return 'упражнений'
} 