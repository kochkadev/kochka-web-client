export interface UserState {
    id: string | null
    username: string | null
    setUser: (username: string, password: string) => Promise<void>
    clearUser: () => void
}
