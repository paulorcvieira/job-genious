import Link from 'next/link'
import { useEffect } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'

import { useJob } from 'hooks/useJob'
import { Job } from 'interfaces/Job'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

interface MyJobsProps {
  jobs: Job[]
  token: string
}

interface ColumnsProps extends TableColumn<any> {
  name: string
  sortable: boolean
  selector: any
}

interface DataProps {
  id: number
  title: string
  salary: number
  action: JSX.Element
}

const MyJobs = ({ jobs, token }: MyJobsProps) => {
  const router = useRouter()
  const {
    clearError,
    error,
    deleteJob
  } = useJob()

  useEffect(() => {
    if (error) {
      toast.error(error)
      clearError()
    }
  }, [clearError, error, router])

  const columns: ColumnsProps[] = [
    {
      name: 'Job ID',
      sortable: true,
      selector: (row: Job) => row.id
    },
    {
      name: 'Job name',
      sortable: true,
      selector: (row: Job) => row.title
    },
    {
      name: 'Salary',
      sortable: true,
      selector: (row: Job) => row.salary
    },
    {
      name: 'Action',
      sortable: true,
      selector: (row: Job) => row.action
    },
  ]
  const data: DataProps[] = jobs ? jobs.map(item => {
    return {
      id: item.id,
      title: item.title,
      salary: item.salary,
      action: (
        <>
          <Link href={`/jobs/${item.id}`}>
            <a
              className="btn btn-primary mr-2"
              title="View Job"
            >
              <i aria-hidden className="fa fa-eye"></i>
            </a>
          </Link>
          <Link href={`/employer/jobs/candidates/${item.id}`}>
            <a
              className="btn btn-success mr-2"
              title="View Candidates"
            >
              <i aria-hidden className="fa fa-users"></i>
            </a>
          </Link>
          <Link href={`/employer/jobs/update/${item.id}`}>
            <a className="btn btn-info mr-2" title="Update Job Description">
              <i aria-hidden className="fa fa-pencil"></i>
            </a>
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => deleteJob(item.id, token)}
            title="Delete Job"
          >
            <i className="fa fa-trash"></i>
          </button>
        </>
      )
    }
  }) : []

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8 mt-5">
        <h4 className="my-5">My Jobs</h4>
        <DataTable columns={columns} data={data} pagination />
      </div>
      <div className="col-2"></div>
    </div>
  )
}

export default MyJobs
