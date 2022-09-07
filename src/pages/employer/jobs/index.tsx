import { GetServerSideProps } from "next"

import Layout from "components/layout"

import Loader from "components/layout/Loader"
import { Job } from "interfaces/Job"
import dynamic from "next/dynamic"
import api from "services/api"
import { isAuthenticatedUser } from "utils/isAuthenticated"

interface MyJobsPageProps {
  jobs: Job[]
  token: string
}

const MyJobs = dynamic(() => import('components/job/MyJobs'), {
  loading: () => <Loader />,
  ssr: false,
})

const MyJobsPage = ({ jobs, token }: MyJobsPageProps) => {
  return (
    <Layout title="Jobbee - My Jobs">
      <MyJobs jobs={jobs} token={token} />
    </Layout>
  )
}

export default MyJobsPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies.access

  const user = await isAuthenticatedUser(String(token))

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const response = await api.get('/me/jobs', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const jobs = response.data

  return {
    props: {
      jobs,
      token,
    }
  }
}
