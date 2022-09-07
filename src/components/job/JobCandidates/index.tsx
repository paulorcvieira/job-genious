import { format } from 'date-fns'
import DataTable, { TableColumn } from 'react-data-table-component'

import { Apply } from 'interfaces/Apply'

interface JobCandidatesProps {
  candidates: Apply[]
}

interface ColumnsProps extends TableColumn<any> {
  name: string
  sortable: boolean
  selector: any
}

interface DataProps {
  id: number
  title: string
  resume: JSX.Element
  appliedAt: string
}

const JobCandidates = ({ candidates }: JobCandidatesProps) => {
  const columns: ColumnsProps[] = [
    {
      name: 'UserId',
      sortable: true,
      selector: (row: Apply) => row.id
    },
    {
      name: 'Job Name',
      sortable: true,
      selector: (row: Apply) => row.title
    },
    {
      name: 'Candidate Resume',
      sortable: true,
      selector: (row: Apply) => row.resume
    },
    {
      name: 'Applied At',
      sortable: true,
      selector: (row: Apply) => row.appliedAt
    },
  ]

  const data: DataProps[] = candidates ? candidates.map(candidate => {
    const dateToApplied = format(
      new Date(candidate.appliedAt),
      "LLL d 'at' KK:mm'h' aaaa"
    )

    return {
      id: candidate.user,
      title: candidate.job.title,
      resume: (
        <a
          href={`${process.env.NEXT_PUBLIC_S3_URL}/${candidate.resume}`}
          className="text-success ml-4"
          rel="noreferrer"
          target="_blank"
        >
          <b>
            <i aria-hidden className="fas fa-download"></i> View Resume
          </b>
        </a>
      ),
      appliedAt: dateToApplied
    }
  }) : []

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8 mt-5">
        <h4 className="my-5">
          {candidates && `${candidates.length} candidate(s) applied to this job`}
        </h4>
        <DataTable columns={columns} data={data} pagination />
      </div>
      <div className="col-2"></div>
    </div>
  )
}

export default JobCandidates
