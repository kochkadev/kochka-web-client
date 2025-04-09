interface WarmupScreenProps {
  timer: number
}

export default function WarmupScreen({ timer }: WarmupScreenProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-100 mb-3 sm:mb-4">Разминка</h2>
      <div className="text-center">
        <div className="text-4xl sm:text-6xl font-bold text-blue-500 mb-3 sm:mb-4">{formatTime(timer)}</div>
        <p className="text-sm sm:text-base text-gray-400">Разомнитесь перед началом тренировки</p>
      </div>
    </div>
  )
} 