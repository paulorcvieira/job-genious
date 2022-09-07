import { GetServerSideProps } from "next"
import api from "services/api"

import Layout from "components/layout"
import NotFound from "components/layout/errors/NotFound"

import { isAuthenticatedUser } from "utils/isAuthenticated"

import Loader from "components/layout/Loader"
import { Apply } from "interfaces/Apply"
import dynamic from "next/dynamic"

interface JobDetailsPageProps {
  candidates: Apply[]
  error?: string
}

const JobCandidates = dynamic(() => import('components/job/JobCandidates'), {
  loading: () => <Loader />,
  ssr: false,
})

const JobDetailsPage = ({ candidates, error }: JobDetailsPageProps) => {
  if(error?.includes('Not found.')) return <NotFound />

  return (
    <Layout title={`Jobbee - Candidates`}>
      <JobCandidates candidates={candidates} />
    </Layout>
  )
}

export default JobDetailsPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const token = context.req.cookies.access

    const user = await isAuthenticatedUser(String(token))

    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        }
      }
    }

    const res = await api.get(`/jobs/${context.params?.id}/candidates`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return {
      props: {
        candidates: res.data,
      }
    }
  } catch (error: any) {
    return {
      props: {
        error: error.response.data.detail
      }
    }
  }
}
