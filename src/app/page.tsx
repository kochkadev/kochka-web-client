'use client'

import { useCounter } from '@/stores/counter'

export default function Home() {
  const { count, increase, decrease } = useCounter()

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Count: {count}</h1>
      <div className="flex gap-2">
        <button onClick={decrease} className="px-4 py-2 bg-red-500 text-white rounded">
          -
        </button>
        <button onClick={increase} className="px-4 py-2 bg-green-500 text-white rounded">
          +
        </button>
      </div>
    </main>
  )
}
