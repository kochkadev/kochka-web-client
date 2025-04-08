import WorkoutList from '@/components/workout/WorkoutList'
import { Workout } from '@/stores/workout/types'

// Временные данные для демонстрации
const mockWorkouts: Workout[] = [
  {
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
        ]
      },
      {
        id: 2,
        name: 'Становая тяга',
        sets: [
          { weight: 80, reps: 10 },
          { weight: 90, reps: 8 },
          { weight: 100, reps: 6 }
        ]
      }
    ]
  },
  {
    id: '2',
    date: '2024-04-07',
    name: 'Тренировка спины и бицепса',
    exercises: [
      {
        id: 1,
        name: 'Подтягивания',
        sets: [
          { weight: 0, reps: 10 },
          { weight: 0, reps: 8 },
          { weight: 0, reps: 6 }
        ]
      },
      {
        id: 2,
        name: 'Тяга штанги в наклоне',
        sets: [
          { weight: 60, reps: 12 },
          { weight: 70, reps: 10 },
          { weight: 80, reps: 8 }
        ]
      }
    ]
  }
]

export default function WorkoutsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-100">Тренировки</h1>
      </div>
      <WorkoutList workouts={mockWorkouts} />
    </div>
  )
} 