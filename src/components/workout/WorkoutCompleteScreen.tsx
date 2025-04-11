import { formatTime } from '@/utils/time'

interface WorkoutCompleteScreenProps {
  duration: number
  onBack: () => void
}

export default function WorkoutCompleteScreen({ duration, onBack }: WorkoutCompleteScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-green-500 mb-4">Поздравляем! 🎉</h2>
        <p className="text-xl text-gray-300 mb-2">Тренировка завершена!</p>
        <p className="text-gray-400">Общее время тренировки:</p>
        <p className="text-2xl font-bold text-gray-100 mt-2">{formatTime(duration)}</p>
      </div>
      
      <button
        onClick={onBack}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Вернуться к программе
      </button>
    </div>
  )
} 