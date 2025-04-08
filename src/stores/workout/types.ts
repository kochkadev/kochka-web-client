export interface Workout {
    id: number;
    name: string;
    duration: string;
    type: string;
    intensity: 'Low' | 'Medium' | 'High';
  }