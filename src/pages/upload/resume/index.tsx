import type { NextPage } from 'next'

import Layout from 'components/layout'
import UploadResume from 'components/user/UploadResume'

const UploadResumePage: NextPage = () => {
  return (
    <Layout title='Job Genious - Upload Resume'>
      <UploadResume />
    </Layout>
  )
}

export default UploadResumePage
