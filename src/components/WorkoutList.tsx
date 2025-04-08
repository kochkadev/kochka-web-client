'use client'

import Link from 'next/link'
import { Workout } from '@/stores/workout/types'

interface WorkoutListProps {
  workouts: Workout[]
}

export default function WorkoutList({ workouts }: WorkoutListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {workouts.map((workout) => (
        <Link 
          key={workout.id} 
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
      ))}
    </div>
  )
}

function getExerciseWord(count: number): string {
  if (count === 1) return 'упражнение'
  if (count >= 2 && count <= 4) return 'упражнения'
  return 'упражнений'
} 