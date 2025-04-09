'use client'

interface SetInputFormProps {
  weight: string
  reps: string
  onWeightChange: (value: string) => void
  onRepsChange: (value: string) => void
  onSubmit: () => void
}

export default function SetInputForm({ 
  weight, 
  reps, 
  onWeightChange, 
  onRepsChange, 
  onSubmit 
}: SetInputFormProps) {
  return (
    <div className="mb-4 sm:mb-6">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="flex-1">
          <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1">Вес (кг)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => onWeightChange(e.target.value)}
            className="w-full bg-gray-700 text-white rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="70"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1">Повторения</label>
          <input
            type="number"
            value={reps}
            onChange={(e) => onRepsChange(e.target.value)}
            className="w-full bg-gray-700 text-white rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="12"
          />
        </div>
      </div>
      <button
        onClick={onSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm sm:text-base"
      >
        Записать подход
      </button>
    </div>
  )
} 