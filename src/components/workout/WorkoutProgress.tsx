'use client'

import { Exercise } from '@/stores/workout/types'
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { useEffect, useRef } from 'react'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend
)

interface WorkoutProgressProps {
  exercises: Exercise[]
}

export default function WorkoutProgress({ exercises }: WorkoutProgressProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    const datasets = exercises.map((exercise) => {
      const currentMaxWeight = Math.max(...exercise.sets.map(set => set.weight))
      const previousMaxWeight = exercise.previousSets 
        ? Math.max(...exercise.previousSets.map(set => set.weight))
        : 0

      return {
        label: exercise.name,
        data: [previousMaxWeight, currentMaxWeight].filter(weight => weight > 0),
        borderColor: exercise.name === 'Приседания со штангой' ? 'rgb(59, 130, 246)' : 'rgb(16, 185, 129)',
        backgroundColor: exercise.name === 'Приседания со штангой' ? 'rgba(59, 130, 246, 0.5)' : 'rgba(16, 185, 129, 0.5)',
        tension: 0.3
      }
    })

    const today = new Date()
    const previousDate = new Date(today)
    previousDate.setDate(previousDate.getDate() - 7) 

    const data = {
      labels: [
        previousDate.toLocaleDateString('ru-RU'),
        today.toLocaleDateString('ru-RU')
      ],
      datasets
    }

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: 'rgb(156, 163, 175)'
            }
          },
          title: {
            display: true,
            text: 'Прогресс максимальных весов',
            color: 'rgb(243, 244, 246)',
            font: {
              size: 16
            }
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'вес (кг)',
              color: 'rgb(156, 163, 175)'
            },
            grid: {
              color: 'rgba(75, 85, 99, 0.3)'
            },
            ticks: {
              color: 'rgb(156, 163, 175)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Дата тренировки',
              color: 'rgb(156, 163, 175)'
            },
            grid: {
              color: 'rgba(75, 85, 99, 0.3)'
            },
            ticks: {
              color: 'rgb(156, 163, 175)'
            }
          }
        }
      }
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [exercises])

  return (
    <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
      <canvas ref={chartRef} />
    </div>
  )
} 