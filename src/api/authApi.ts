import axios from 'axios'
import { apiConfig } from '@/config'
import { useAuthStore } from '@/stores/auth/useAuthStore'

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${apiConfig}/login`, { username, password })
    const token = response.data.token

    useAuthStore.getState().setToken(token)

    return response.data
  } catch (error) {
    throw new Error(`Login failed: ${error}`)
  }
}

export const logout = () => {
  useAuthStore.getState().logout()
}
