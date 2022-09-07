import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback } from "react"
import Pagination from 'react-js-pagination'

import JobItem from "../job/JobItem"
import Filters from "../layout/Filters"


import { Container, NoJobFound, PaginationWrapper } from './styles'

import { Jobs } from "../../interfaces/Jobs"

interface HomeProps {
  data: Jobs
}

const Home = ({ data }: HomeProps) => {
  const router = useRouter()

  const { jobs, count, resPerPage } = data

  const { page = 1, keyword } = router.query

  let queryParams: URLSearchParams | undefined
  if(typeof window === 'object') {
    queryParams = new URLSearchParams(window.location.search)
  }

  const handlePageClick = useCallback((currentPage: number) => {
    if(queryParams?.has('page')) {
      queryParams.set('page', String(currentPage))
    } else {
      queryParams?.append('page', String(currentPage))
    }

    router.push({ search: queryParams?.toString() })
  }, [queryParams, router])

  return (
    <Container>
      <div className="container container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <Filters />
          </div>

          <div className="col-xl-9 col-lg-8 content-left-offset">
            <div className="my-5">
              <h4 className="page-title">
                {keyword
                  ? `${jobs.length} Results for "${keyword}"`
                  : "Latest Jobs"
                }
              </h4>
              <Link href="/stats">
                <button className="btn btn-secondary float-right stats_btn">
                  Get Topic stats
                </button>
              </Link>
              <div className="d-block">
                <Link href="/search">Go to Search</Link>
              </div>
            </div>

            {!!jobs.length
              ? jobs.map(job => <JobItem key={job.id} job={job} />)
              : <NoJobFound>No jobs found</NoJobFound>
            }

            {resPerPage < count && (
              <PaginationWrapper>
                <Pagination
                  activePage={Number(page)}
                  itemsCountPerPage={resPerPage}
                  totalItemsCount={count}
                  onChange={handlePageClick}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="First"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </PaginationWrapper>
            )}

          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home
