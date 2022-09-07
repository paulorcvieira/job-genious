import { Job } from "./Job"

export type Apply = {
  job: Job
  id: number
  user: number
  title: string
  resume: string
  appliedAt: Date
}
