import type { NextPage } from 'next'
import Login from '../components/auth/Login'
import Layout from '../components/layout'

const LoginPage: NextPage = () => {
  return (
    <Layout title='Job Genious - Login'>
      <Login />
    </Layout>
  )
}

export default LoginPage

