'use client'

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-100">Профиль</h1>
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gray-700"></div>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-100">Имя пользователя</h2>
            <p className="text-gray-400">user@example.com</p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <h3 className="text-lg font-medium text-gray-100 mb-2">Статистика</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-100">0</p>
                <p className="text-sm text-gray-400">Тренировок</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-100">0</p>
                <p className="text-sm text-gray-400">Упражнений</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 