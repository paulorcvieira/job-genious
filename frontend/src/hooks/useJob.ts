import { useContext } from 'react'

import { JobContext, JobContextData } from 'contexts/Job'

export const useJob = () => {
  const context = useContext<JobContextData>(JobContext)
  if (!context) throw new Error('useJob must be use within a JobProvider')
  return context
}
