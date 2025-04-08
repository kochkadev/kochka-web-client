import Image from 'next/image'
import { Exercise } from '@/stores/workout/types'
import WorkoutTable from './workout/WorkoutTable'
import ImageIcon from '@/assets/icons/image.svg'

interface ExerciseCardProps {
  exercise: Exercise
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row md:h-[350px]">
        <div className="md:w-1/3 relative h-[250px] md:h-auto">
          {exercise.image ? (
            <Image
              src={exercise.image}
              alt={exercise.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
              <ImageIcon className="w-24 h-24 text-gray-600" />
            </div>
          )}
        </div>
        <div className="p-6 md:w-2/3 overflow-y-auto">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">{exercise.name}</h2>
          <div className="grid grid-cols-2 gap-6">
            <WorkoutTable 
              title="План"
              sets={exercise.sets}
            />
            <WorkoutTable 
              title="Прошлая тренировка"
              sets={exercise.previousSets || []}
              isHistory
            />
          </div>
        </div>
      </div>
    </div>
  )
} 