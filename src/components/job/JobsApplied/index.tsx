import { format } from 'date-fns'
import Link from 'next/link'
import DataTable, { TableColumn } from 'react-data-table-component'

import { Apply } from 'interfaces/Apply'
import { Job } from 'interfaces/Job'

interface JobsAppliedProps {
  candidates: Apply[]
}

interface DataProps {
  title: string
  salary: number
  education: string
  experience: string
  appliedAt?: string
  action: JSX.Element
}

interface ColumnsProps extends TableColumn<any> {
  name: string
  sortable: boolean
  selector: any
}

const JobsApplied = ({ candidates }: JobsAppliedProps) => {
  const columns: ColumnsProps[] = [
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
      name: 'Education',
      sortable: true,
      selector: (row: Job) => row.education
    },
    {
      name: 'Experience',
      sortable: true,
      selector: (row: Job) => row.experience
    },
    {
      name: 'Applied at',
      sortable: true,
      selector: (row: Job) => row.appliedAt?.toString()
    },
    {
      name: 'Action',
      sortable: true,
      selector: (row: Job) => row.action
    },
  ]

  const data: DataProps[] = candidates ? candidates.map(applied => {
    const dateToApplied = format(
      new Date(applied.appliedAt),
      "LLL d 'at' KK:mm'h' aaaa"
    )

    return {
      title: applied.job.title,
      salary: applied.job.salary,
      education: applied.job.education,
      experience: applied.job.experience,
      appliedAt: dateToApplied,
      action: (
        <Link href={`/jobs/${applied.job.id}`}>
          <a className="btn btn-primary">
            <i aria-hidden className="fa fa-eye"></i>
          </a>
        </Link>
      )
    }
  }) : []

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8 mt-5">
        <h4 className="my-5">Jobs Applied</h4>
        <DataTable columns={columns} data={data} pagination />
      </div>
      <div className="col-2"></div>
    </div>
  )
}

export default JobsApplied
