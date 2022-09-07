import { ReactNode } from 'react'

import { AuthProvider } from './Auth'
import { JobProvider } from './Job'

type AppProviderProps = {
  children: ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <JobProvider>
        {children}
      </JobProvider>
    </AuthProvider>
  )
}
