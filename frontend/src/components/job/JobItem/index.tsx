import { formatDistanceToNow } from 'date-fns'

import { Job } from "interfaces/Job"
import { Container } from "./styles"

interface JobItemProps {
  job: Job
}

const JobItem = ({ job }: JobItemProps) => {
  const publishedAtRelativeToNow = formatDistanceToNow(
    new Date(job.createdAt),
    {
      addSuffix: true,
    },
  )

  return (
    <Container href={`/jobs/${job.id}`}>
      <div className="job-listing-details">
        <div className="job-listing-description">
          <h4 className="job-listing-company">{job.company}</h4>
          <h3 className="job-listing-title">{job.title}</h3>
          <p className="job-listing-text">
            {job.description.substring(0, 200)}...
          </p>
        </div>

        <span className="bookmark-icon"></span>
      </div>

      <div className="job-listing-footer">
        <ul>
          <li>
            <i aria-hidden className="fas fa-industry"></i> {job.industry}
          </li>

          <li>
            <i aria-hidden className="fas fa-briefcase"></i> {job.jobType}
          </li>
          <li>
            <i aria-hidden className="fas fa-money-check-alt"></i>&nbsp;
            {new Intl.NumberFormat('en', {
                currency: 'USD',
                style: 'currency',
              }).format(job.salary)
            }
          </li>
          <li>
            <i aria-hidden className="far fa-clock"></i> Published&nbsp;
            {publishedAtRelativeToNow}
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default JobItem
