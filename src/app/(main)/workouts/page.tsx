"use client"

import WorkoutList from '@/components/workout/WorkoutList'
import { Workout } from '@/stores/workout/types'
import { useState } from 'react'

// Временные данные для демонстрации
const mockWorkoutsByWeek: Record<number, Workout[]> = {
  1: [
    {
      id: '1-1',
      date: '2024-04-08',
      name: 'Тренировка 1',
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
      id: '1-2',
      date: '2024-04-10',
      name: 'Тренировка 2',
      exercises: [
        {
          id: 1,
          name: 'Жим лежа',
          sets: [
            { weight: 70, reps: 12 },
            { weight: 80, reps: 10 },
            { weight: 90, reps: 8 }
          ]
        }
      ]
    },
    {
      id: '1-3',
      date: '2024-04-12',
      name: 'Тренировка 3',
      exercises: [
        {
          id: 1,
          name: 'Подтягивания',
          sets: [
            { weight: 0, reps: 10 },
            { weight: 0, reps: 8 },
            { weight: 0, reps: 6 }
          ]
        }
      ]
    }
  ],
  2: [
    {
      id: '2-1',
      date: '2024-04-15',
      name: 'Тренировка 1',
      exercises: [
        {
          id: 1,
          name: 'Приседания со штангой',
          sets: [
            { weight: 65, reps: 12 },
            { weight: 75, reps: 10 },
            { weight: 85, reps: 8 }
          ]
        }
      ]
    },
    {
      id: '2-2',
      date: '2024-04-17',
      name: 'Тренировка 2',
      exercises: [
        {
          id: 1,
          name: 'Жим лежа',
          sets: [
            { weight: 75, reps: 12 },
            { weight: 85, reps: 10 },
            { weight: 95, reps: 8 }
          ]
        }
      ]
    },
    {
      id: '2-3',
      date: '2024-04-19',
      name: 'Тренировка 3',
      exercises: [
        {
          id: 1,
          name: 'Подтягивания',
          sets: [
            { weight: 0, reps: 12 },
            { weight: 0, reps: 10 },
            { weight: 0, reps: 8 }
          ]
        }
      ]
    }
  ],
  3: [
    {
      id: '3-1',
      date: '2024-04-22',
      name: 'Тренировка 1',
      exercises: [
        {
          id: 1,
          name: 'Приседания со штангой',
          sets: [
            { weight: 70, reps: 12 },
            { weight: 80, reps: 10 },
            { weight: 90, reps: 8 }
          ]
        }
      ]
    },
    {
      id: '3-2',
      date: '2024-04-24',
      name: 'Тренировка 2',
      exercises: [
        {
          id: 1,
          name: 'Жим лежа',
          sets: [
            { weight: 80, reps: 12 },
            { weight: 90, reps: 10 },
            { weight: 100, reps: 8 }
          ]
        }
      ]
    },
    {
      id: '3-3',
      date: '2024-04-26',
      name: 'Тренировка 3',
      exercises: [
        {
          id: 1,
          name: 'Подтягивания',
          sets: [
            { weight: 0, reps: 12 },
            { weight: 0, reps: 10 },
            { weight: 0, reps: 8 }
          ]
        }
      ]
    }
  ],
  4: [
    {
      id: '4-1',
      date: '2024-04-29',
      name: 'Тренировка 1',
      exercises: [
        {
          id: 1,
          name: 'Приседания со штангой',
          sets: [
            { weight: 75, reps: 12 },
            { weight: 85, reps: 10 },
            { weight: 95, reps: 8 }
          ]
        }
      ]
    },
    {
      id: '4-2',
      date: '2024-05-01',
      name: 'Тренировка 2',
      exercises: [
        {
          id: 1,
          name: 'Жим лежа',
          sets: [
            { weight: 85, reps: 12 },
            { weight: 95, reps: 10 },
            { weight: 105, reps: 8 }
          ]
        }
      ]
    },
    {
      id: '4-3',
      date: '2024-05-03',
      name: 'Тренировка 3',
      exercises: [
        {
          id: 1,
          name: 'Подтягивания',
          sets: [
            { weight: 0, reps: 12 },
            { weight: 0, reps: 10 },
            { weight: 0, reps: 8 }
          ]
        }
      ]
    }
  ]
}

export default function WorkoutsPage() {
  const [selectedGroup, setSelectedGroup] = useState(1)

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-100 mb-4">Тренировки</h1>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((group) => (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`px-4 py-2 rounded-lg ${
                selectedGroup === group
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Неделя {group}
            </button>
          ))}
        </div>
      </div>
      <WorkoutList workouts={mockWorkoutsByWeek[selectedGroup] || []} />
    </div>
  )
} 