import type { NextPage } from 'next'

import Register from '../components/auth/Register'
import Layout from '../components/layout'

const RegisterPage: NextPage = () => {
  return (
    <Layout title='Job Genious - Register'>
      <Register />
    </Layout>
  )
}

export default RegisterPage
