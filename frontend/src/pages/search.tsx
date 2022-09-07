import type { NextPage } from 'next'

import Layout from '../components/layout'
import Search from '../components/layout/Search'

const SearchPage: NextPage = () => {
  return (
    <Layout title='Job Genious - Search'>
      <Search />
    </Layout>
  )
}

export default SearchPage
