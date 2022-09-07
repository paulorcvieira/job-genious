import type { GetServerSideProps } from 'next'

import NewJob from 'components/job/NewJob'
import Layout from 'components/layout'
import { isAuthenticatedUser } from 'utils/isAuthenticated'

interface NewJobPageProps {
  token: string
}

const NewJobPage = ({ token }: NewJobPageProps) => {
  return (
    <Layout title='Job Genious - Register a new job'>
      <NewJob token={token} />
    </Layout>
  )
}

export default NewJobPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies.access

  const user = isAuthenticatedUser(String(token))

  if(!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      token
    }
  }
}
