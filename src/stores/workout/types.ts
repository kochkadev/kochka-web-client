export interface Set {
  weight: number
  reps: number
}

export interface Exercise {
  id: number
  name: string
  image?: string
  sets: Set[]
  previousSets?: Set[]
}

export interface Workout {
  id: string
  date: string
  name: string
  exercises: Exercise[]
}

export interface CompletedSet {
  weight: number
  reps: number
}

