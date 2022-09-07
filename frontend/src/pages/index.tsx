import type { GetServerSideProps } from 'next'

import Home from '../components/Home'
import Layout from '../components/layout'
import api from '../services/api'

import { Jobs } from '../interfaces/Jobs'

interface HomeProps {
  data: Jobs
}

const HomePage = ({ data }: HomeProps) => {
  return (
    <Layout title='Job Genious - Oportunidades para Desenvolvedores'>
      <Home data={data} />
    </Layout>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const jobType = context.query.jobType ?? ''
  const education = context.query.education ?? ''
  const experience = context.query.experience ?? ''
  const keyword = context.query.keyword ?? ''
  const location = context.query.location ?? ''
  const page = context.query.page ?? ''

  let min_salary = ''
  let max_salary = ''

  if(context.query.salary) {
    const [min, max] = String(context.query.salary).split("-")
    min_salary = min
    max_salary = max
  }

  let queryString = ''

  if(keyword.length) queryString = queryString.concat(`keyword=${keyword}`)
  if(location.length) queryString = queryString.concat(`&location=${location}`)
  if(page.length) queryString = queryString.concat(`&page=${page}`)
  if(jobType.length) queryString = queryString.concat(`&jobType=${jobType}`)
  if(education.length) queryString = queryString.concat(`&education=${education}`)
  if(experience.length) queryString = queryString.concat(`&experience=${experience}`)
  if(min_salary.length) queryString = queryString.concat(`&min_salary=${min_salary}`)
  if(max_salary.length) queryString = queryString.concat(`&max_salary=${max_salary}`)

  const response = await api.get(
    `/jobs?${queryString.length ? queryString : ''}`
  )

  return {
    props: {
      data: response.data
    }
  }
}
