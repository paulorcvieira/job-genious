import { AuthContext, AuthContextData } from 'contexts/Auth'
import { useContext } from 'react'

export const useAuth = () => {
  const context = useContext<AuthContextData>(AuthContext)
  if (!context) throw new Error('useAuth must be use within a AuthProvider')
  return context
}
