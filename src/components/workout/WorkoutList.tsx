'use client'

import { Workout } from '@/stores/workout/types'
import WorkoutItem from './WorkoutItem'

interface WorkoutListProps {
  workouts: Workout[]
}

export default function WorkoutList({ workouts }: WorkoutListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {workouts.map((workout) => (
        <WorkoutItem key={workout.id} workout={workout} />
      ))}
    </div>
  )
} 