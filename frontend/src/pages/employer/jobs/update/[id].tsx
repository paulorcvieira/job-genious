import type { GetServerSideProps } from 'next'

import UpdateJob from 'components/job/UpdateJob'
import Layout from 'components/layout'
import NotFound from 'components/layout/errors/NotFound'
import { Job } from 'interfaces/Job'
import api from 'services/api'
import { isAuthenticatedUser } from 'utils/isAuthenticated'

interface EmployerJobUpdateProps {
  job: Job
  token: string
  error?: string
}

const EmployerJobUpdate = ({ job, token, error }: EmployerJobUpdateProps) => {
  if(error?.includes('Not found.')) return <NotFound />

  return (
    <Layout title='Job Genious - Update job details'>
      <UpdateJob job={job} token={token} />
    </Layout>
  )
}

export default EmployerJobUpdate

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies.access

  const user = isAuthenticatedUser(String(token))

  if(!user || !context.params?.id) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const response = await api.get(`/jobs/${context.params.id}`);

  return {
    props: {
      token,
      job: response.data.job,
    }
  }
}
