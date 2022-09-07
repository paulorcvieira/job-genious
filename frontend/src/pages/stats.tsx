import type { NextPage } from 'next'

import Layout from '../components/layout'
import TopicStats from '../components/stats/TopicStats'

const StatsPage: NextPage = () => {
  return (
    <Layout title='Job Genious - Get Topic Stats'>
      <TopicStats />
    </Layout>
  )
}

export default StatsPage
