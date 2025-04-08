export interface Exercise {
  id: number
  name: string
  image?: string
  sets: {
    weight: number
    reps: number
  }[]
  previousSets?: {
    weight: number
    reps: number
  }[]
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

