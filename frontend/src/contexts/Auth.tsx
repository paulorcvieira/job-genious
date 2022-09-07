import axios from 'axios'
import Router from 'next/router'
import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'

import { User } from 'interfaces/User'
import { toast } from 'react-toastify'
import api from 'services/api'

type SignInCredentials = {
  username: string
  password: string
}

type UserProps = User & {
  password: string
}

type AuthProviderProps = {
  children: ReactNode
}

export type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => void
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  setLoading: (loading: boolean) => void
  error: string | null
  register: (data: UserProps) => Promise<void>
  updateProfile: (data: Partial<UserProps>) => Promise<void>
  clearError: () => void
  token: string
  setToken: (token: string) => void
  uploadResume: (formData: FormData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextData)

let authChannel: BroadcastChannel

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState(null)
  const [token, setToken] = useState('')

  useEffect(() => {
    authChannel = new BroadcastChannel('auth')
    authChannel.onmessage = message => {
      switch (message.data) {
        case 'signIn':
          Router.push('/')
          break
        case 'signOut':
          Router.push('/')
          break
        default:
          return
      }
    }
  }, [])

  async function signOut() {
    setLoading(true)
    try {
      const response = await axios.post('/api/auth/logout')

      if(response.data.success) {
        setIsAuthenticated(false)
        setUser(null)
        authChannel.postMessage('signOut')
        clearError()
      }
    } catch (error: any) {
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.message)
      )
    } finally {
      setLoading(false)
    }
  }

  const loadUser = useCallback(async () => {
    setLoading(true)

    try {
      const response = await axios.get('/api/auth/user', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      if(response.data.user) {
        setUser(response.data.user)
      }

    } catch (error: any) {
      setIsAuthenticated(false)
      setUser(null)
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.message)
      )
    } finally {
      setLoading(false)
    }
  }, [token])

  useEffect(() => {
    if (!user) {
      loadUser()
    }
  }, [user, loadUser])

  async function signIn({ username, password }: SignInCredentials) {
    setLoading(true)

    try {
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      })

      if(response.data.success) {
        setIsAuthenticated(true)
        setToken(String(response.data.token))
        loadUser()
        authChannel.postMessage('signIn')
      }
    } catch (error: any) {
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.message)
      )
    } finally {
      setLoading(false)
    }
  }

  async function register({
    first_name,
    last_name,
    password,
    email,
    username,
  }: UserProps) {
    setLoading(true)

    try {
      const response = await api.post('/register', {
        first_name,
        last_name,
        password,
        email,
        username,
      })

      if(response.data.message) {
        toast.success('Registered successfully.')
        signIn({ username, password })
      }
    } catch (error: any) {
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.message)
      )
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({
    first_name,
    last_name,
    password,
    email,
    username,
  }: Partial<UserProps>) {
    setLoading(true)

    try {
      const response = await api.put('/me/update', {
        first_name,
        last_name,
        password,
        email,
        username,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      if(response.status === 200) {
        toast.success('Updated successfully.')
        setUser(response.data)
      }
    } catch (error: any) {
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.message)
      )
    } finally {
      setLoading(false)
    }
  }

  async function uploadResume(formData: FormData) {
    setLoading(true)

    try {
      const response = await api.put('/upload/resume', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      if(response.status === 200) {
        toast.success('Uploaded successfully.')
        setUser(response.data)
      }
    } catch (error: any) {
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.message)
      )
    } finally {
      setLoading(false)
    }
  }

  const clearError = () => setError(null)

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        signIn,
        signOut,
        isAuthenticated,
        user,
        error,
        register,
        clearError,
        updateProfile,
        token,
        setToken,
        uploadResume,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
