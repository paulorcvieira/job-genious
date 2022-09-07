import { GetServerSideProps } from "next"
import dynamic from "next/dynamic"

import Layout from "components/layout"
import Loader from "components/layout/Loader"

import api from "services/api"

import { isAuthenticatedUser } from "utils/isAuthenticated"

import { Apply } from "interfaces/Apply"

interface JobsAppliedPageProps {
  candidates: Apply[]
}

const JobsApplied = dynamic(() => import('components/job/JobsApplied'), {
  loading: () => <Loader />,
  ssr: false,
})

export default function JobsAppliedPage({ candidates }: JobsAppliedPageProps) {
  return (
    <Layout title="Jobbee - My Applied Jobs">
      <JobsApplied candidates={candidates} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies.access

  const user = isAuthenticatedUser(String(token))

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const res = await api.get('/me/jobs/applied', {
      headers: { Authorization: `Bearer ${token}` }
    }
  )

  const candidates = res.data

  return {
    props: {
      candidates
    }
  }
}
