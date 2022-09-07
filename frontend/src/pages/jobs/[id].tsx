import type { GetServerSideProps } from 'next'

import Layout from 'components/layout'

import api from 'services/api'

import JobDetails from 'components/job/JobDetails'
import NotFound from 'components/layout/errors/NotFound'

import { Job } from 'interfaces/Job'

interface JobDetailsPageProps {
  job: Job
  candidates: number
  error?: string
  token: string
}

const JobDetailsPage = ({
  job,
  candidates,
  error,
  token
}: JobDetailsPageProps) => {
  if(error?.includes('Not found.')) return <NotFound />

  return (
    <Layout title={`Job Genious - ${job.title}`}>
      <JobDetails job={job} candidates={candidates} token={token} />
    </Layout>
  )
}

export default JobDetailsPage


export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const token = req.cookies.access

  try {
    const response = await api.get(`/jobs/${params?.id}`)

    return {
      props: {
        job: response.data.job,
        candidates: response.data.candidates,
        token: token || '',
      }
    }
  } catch (error: any) {
    return {
      props: {
        error: error.response.data.detail,
      }
    }
  }
}
