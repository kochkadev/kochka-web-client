'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-100">Добро пожаловать в Kochka</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Link href="/workouts" className="block">
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <h2 className="text-xl font-semibold text-gray-100 mb-2">Тренировки</h2>
            <p className="text-gray-400">Просмотр и управление вашими тренировками</p>
          </div>
        </Link>
        
        <Link href="/profile" className="block">
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <h2 className="text-xl font-semibold text-gray-100 mb-2">Профиль</h2>
            <p className="text-gray-400">Управление вашим профилем и настройками</p>
          </div>
        </Link>
      </div>
    </div>
  )
} 