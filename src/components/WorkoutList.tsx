import { Workout } from "@/stores/workout/types";


const workouts: Workout[] = [
  {
    id: 1,
    name: 'Кардио тренировка',
    duration: '45 мин',
    type: 'Кардио',
    intensity: 'Medium'
  },
  {
    id: 2,
    name: 'Силовая тренировка',
    duration: '60 мин',
    type: 'Силовая',
    intensity: 'High'
  },
  {
    id: 3,
    name: 'Йога',
    duration: '30 мин',
    type: 'Растяжка',
    intensity: 'Low'
  }
];

export default function WorkoutList() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-100">Список тренировок</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-700"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-100">{workout.name}</h3>
                <span className={`inline-block px-2 py-1 rounded-full text-sm ${
                  workout.intensity === 'High' ? 'bg-red-900 text-red-100' :
                  workout.intensity === 'Medium' ? 'bg-yellow-900 text-yellow-100' :
                  'bg-green-900 text-green-100'
                }`}>
                  {workout.intensity}
                </span>
              </div>
              <div className="mt-auto">
                <p className="text-gray-400 mb-2">{workout.type}</p>
                <p className="text-gray-400 font-medium">{workout.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 