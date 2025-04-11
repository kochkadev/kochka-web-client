'use client'

import { Exercise, CompletedSet } from '@/stores/workout/types'
import WorkoutTable from './WorkoutTable'
import SetInputForm from './SetInputForm'
import Image from 'next/image'
import ImageIcon from '@/assets/icons/image.svg'

interface CurrentExerciseProps {
  exercise: Exercise
  completedSets: CompletedSet[]
  weight: string
  reps: string
  onWeightChange: (value: string) => void
  onRepsChange: (value: string) => void
  onSetComplete: () => void
  onNextExercise: () => void
  isLastExercise: boolean
}

export default function CurrentExercise({
  exercise,
  completedSets,
  weight,
  reps,
  onWeightChange,
  onRepsChange,
  onSetComplete,
  onNextExercise,
  isLastExercise
}: CurrentExerciseProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-100 mb-3 sm:mb-4">
        {exercise.name}
      </h2>

      <div className="relative w-full h-[200px] sm:h-[300px] mb-4 sm:mb-6 rounded-lg overflow-hidden">
        {exercise.image ? (
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, 800px"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <ImageIcon className="w-16 sm:w-24 h-16 sm:h-24 text-gray-600" />
          </div>
        )}
      </div>
      
      {completedSets.length < exercise.sets.length && (
        <SetInputForm
          weight={weight}
          reps={reps}
          onWeightChange={onWeightChange}
          onRepsChange={onRepsChange}
          onSubmit={onSetComplete}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <WorkoutTable 
          title="Текущая тренировка"
          sets={exercise.sets.map((set, index) => ({
            ...set,
            weight: completedSets[index]?.weight || 0,
            reps: completedSets[index]?.reps || 0
          }))}
        />

        <WorkoutTable 
          title="Прошлая тренировка"
          sets={exercise.previousSets || []}
          isHistory
        />
      </div>

      {completedSets.length >= exercise.sets.length && (
        <div className="mt-4 sm:mt-6">
          <button
            onClick={onNextExercise}
            className={`w-full ${
              isLastExercise 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm sm:text-base`}
          >
            {isLastExercise 
              ? 'Тренировка завершена'
              : 'Следующее упражнение'
            }
          </button>
        </div>
      )}
    </div>
  )
} 