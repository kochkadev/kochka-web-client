import { Set } from '@/stores/workout/types'

interface WorkoutTableProps {
  title: string
  sets: Set[]
  isHistory?: boolean
}

export default function WorkoutTable({ title, sets, isHistory = false }: WorkoutTableProps) {
  const textColor = isHistory ? 'text-gray-400' : 'text-gray-300'
  const headerBgColor = isHistory ? 'bg-gray-700' : 'bg-gray-700'

  return (
    <div className="overflow-x-auto bg-gray-900 rounded-lg">
      <div className={`${headerBgColor} px-4 py-3 rounded-t-lg border-b border-gray-600`}>
        <h3 className={`${isHistory ? 'text-gray-400' : 'text-gray-100'} font-semibold`}>{title}</h3>
      </div>
      <div className="p-4">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr>
              <th className={`text-left pb-3 text-sm font-semibold ${textColor} border-b border-gray-700`}>Подход</th>
              <th className={`text-right pb-3 text-sm font-semibold ${textColor} border-b border-gray-700`}>Вес</th>
              <th className={`text-right pb-3 text-sm font-semibold ${textColor} border-b border-gray-700`}>Повт.</th>
            </tr>
          </thead>
          <tbody>
            {sets.map((set, index) => (
              <tr key={index}>
                <td className={`py-3 ${textColor} border-b border-gray-800`}>{index + 1}</td>
                <td className={`py-3 text-right ${isHistory ? textColor : 'text-gray-200'} font-medium border-b border-gray-800`}>
                  {set.weight || '—'}
                </td>
                <td className={`py-3 text-right ${isHistory ? textColor : 'text-gray-200'} border-b border-gray-800`}>
                  {set.reps || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 