import type { NextPage } from 'next'

import InternalServerError from '../components/layout/errors/InternalServerError'

const InternalServerErrorPage: NextPage = () => {
  return (
    <InternalServerError />
  )
}

export default InternalServerErrorPage
