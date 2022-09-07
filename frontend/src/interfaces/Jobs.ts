import { Job } from "./Job"

export interface Jobs {
  count: number
  resPerPage: number
  jobs: Job[]
}
