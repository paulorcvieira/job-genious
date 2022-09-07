import { useRouter } from 'next/router'
import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

import api from 'services/api'

import { Job } from 'interfaces/Job'
import { Stats } from 'interfaces/Stats'

type UpdateJobProps = {
  id: number
  data: Partial<Job>
  token: string
}

type JobProviderProps = {
  children: ReactNode
}

interface NewJobData {
  title: string
  description: string
  email: string
  address: string
  salary: number
  positions: number
  company: string
  jobType: string
  education: string
  industry: string
  experience: string
}

export type JobContextData = {
  loading: boolean
  error: string | null
  applyToJob: (id: number, token: string) => Promise<void>
  clearError: () => void
  checkJobApplied: (id: number, token: string) => Promise<void>
  getTopicStats: (topic: string) => Promise<void>
  newJob: (data: NewJobData, token: string) => Promise<void>
  updateJob: ({ id, data, token }: UpdateJobProps) => Promise<void>
  deleteJob: (id: number, token: string) => Promise<void>
  stats: Stats | null
  applied: boolean
}

export const JobContext = createContext({} as JobContextData)

export function JobProvider({ children }: JobProviderProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [stats, setStats] = useState<Stats | null>(null)
  const [applied, setApplied] = useState(false)

  const router = useRouter()

  const applyToJob = async (id: number, token: string) => {
    setLoading(true)

    try {
      const res = await api.post(`/jobs/${id}/apply`, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      if (res.data.applied === true) {
        toast.success('Applied successfully.')
        setApplied(true)
      }
    } catch (error: any) {
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      )
    } finally {
      setLoading(false)
    }
  }

  const checkJobApplied = async (id: number, token: string) => {
    try {
      const response = await api.get(`/jobs/${id}/check`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })

      setApplied(response.data)
    } catch (error: any) {
      setError(
        error.response &&
          (error.response.statusText || error.response.data.error)
      )
    }
  }

  const getTopicStats = async (topic: string) => {
    setLoading(true)

    try {
      const res = await api.get(`/stats/${topic}`)

      setStats(res.data)
    } catch (error: any) {
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      )
    } finally {
      setLoading(false)
    }
  }

  const newJob = async (data: NewJobData, token: string) => {
    setLoading(true)

    try {
      const res = await api.post('/jobs/new', data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      if (res.status === 201) {
        toast.success('Registered successfully.')
        router.push('/')
      }
    } catch (error: any) {
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      )
    } finally {
      setLoading(false)
    }
  }

  const updateJob = async ({ id, data, token }: UpdateJobProps) => {
    setLoading(true)

    try {
      const res = await api.put(`/jobs/${id}/update`, data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      if (res.status === 200) {
        toast.success('Updated successfully.')
      }
    } catch (error: any) {
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      )
    } finally {
      setLoading(false)
    }
  }

  const deleteJob = async (id: number, token: string) => {
    setLoading(true)

    try {
      const res = await api.delete(`/jobs/${id}/delete`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      if (res.status === 200) {
        toast.success('Deleted successfully.')
        router.push('/employer/jobs')
      }
    } catch (error: any) {
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      )
    } finally {
      setLoading(false)
    }
  }

  const clearError = () => setError(null)

  return (
    <JobContext.Provider
      value={{
        loading,
        error,
        clearError,
        applyToJob,
        checkJobApplied,
        getTopicStats,
        newJob,
        updateJob,
        deleteJob,
        stats,
        applied,
      }}
    >
      {children}
    </JobContext.Provider>
  )
}
