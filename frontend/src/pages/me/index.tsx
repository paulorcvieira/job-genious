import type { GetServerSideProps, NextPage } from 'next'

import { isAuthenticatedUser } from 'utils/isAuthenticated'

import Layout from 'components/layout'
import UpdateProfile from 'components/user/UpdateProfile'

const MePage: NextPage = () => {
  return (
    <Layout title='Job Genious - Profile'>
      <UpdateProfile />
    </Layout>
  )
}

export default MePage

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
    props: {}
  }
}
