'use client'

import WorkoutList from '@/components/WorkoutList'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-100">Тренировки</h1>
        <WorkoutList />
      </div>
    </main>
  )
}
