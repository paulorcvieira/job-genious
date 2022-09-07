import { format, formatDistanceToNow, isAfter } from 'date-fns'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

import { Wrapper } from './styles'

import { useJob } from 'hooks/useJob'
import { Job } from 'interfaces/Job'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

interface JobDetailsProps {
  job: Job
  candidates: number
  token: string
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const JobDetails = ({ job, candidates, token }: JobDetailsProps) => {
  const [candidatesJob, setCandidatesJob] = useState<number>(candidates || 0)
  const {
    applyToJob,
    clearError,
    error,
    loading,
    applied,
    checkJobApplied,
  } = useJob()

  const lastDateToApply = format(
    new Date(job.lastDate),
    "LLLL d 'at' KK:mm'h' aaaa"
  )

  const publishedAtRelativeToNow = formatDistanceToNow(
    new Date(job.createdAt),
    {
      addSuffix: true,
    },
  )

  const isExpiredDateToApply = isAfter(new Date(), new Date(job.lastDate))

  useEffect(() => {
    const coordinates = job.point.split("(")[1].replace(")", "").split(" ")

    // Create map and set center point
    const map = new mapboxgl.Map({
      container: 'job-map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinates,
      zoom: 11
    })

    // Add marker point
    new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }, [job.point])

  useEffect(() => {
    if(error) {
      toast.error(error)
      clearError()
    }
  }, [error, clearError])

  useEffect(() => {
    checkJobApplied(job.id, token)
  }, [checkJobApplied, job.id, token])

  useEffect(() => {
    checkJobApplied(job.id, token)
  }, [checkJobApplied, job.id, token])

  const handleApplyToJob = useCallback(async () => {
    await applyToJob(job.id, token)

    setCandidatesJob(state => state += 1)
  }, [applyToJob, job.id, token])

  return (
    <Wrapper>
      <div className="container container-fluid">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="job-details p-3">
              <div className="job-header p-4">
                <h2>{job.title}</h2>
                <span>
                  <i aria-hidden className="fas fa-building"></i>
                  <span> {job.company}</span>
                </span>
                <span className="ml-4">
                  <i aria-hidden className="fas fa-map-marker-alt"></i>
                  <span> {job.address}</span>
                </span>

                <div className="mt-3">
                  <span>
                    <button
                      className={`btn ${applied ? "btn-success" : isExpiredDateToApply ? "btn-secondary" : "btn-primary"} px-4 py-2 apply-btn`}
                      onClick={() => !isExpiredDateToApply && !applied && handleApplyToJob()}
                      disabled={loading || isExpiredDateToApply || applied}
                    >
                      {applied && (
                        <i aria-hidden className="fas fa-check" />
                      )}
                      {loading ? "Loading..." : applied ? "Applied" : isExpiredDateToApply ? "Expired" : "Apply Now"}
                    </button>
                    <span className="ml-4 text-success">
                      <b>{candidatesJob}</b> candidates has applied to this job.
                    </span>
                  </span>
                </div>
              </div>

              <div className="job-description mt-5">
                <h4>Description</h4>
                <p>
                  {job.description}
                </p>
              </div>

              <div className="job-summary">
                <h4 className="mt-5 mb-4">Job Summary</h4>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Job Type</td>
                      <td>:</td>
                      <td>{job.jobType}</td>
                    </tr>

                    <tr>
                      <td>Job Industry</td>
                      <td>:</td>
                      <td>{job.industry}</td>
                    </tr>

                    <tr>
                      <td>Expected Salary</td>
                      <td>:</td>
                      <td>
                      {new Intl.NumberFormat('en', {
                          currency: 'USD',
                          style: 'currency',
                        }).format(job.salary)
                      }
                      </td>
                    </tr>

                    <tr>
                      <td>Education</td>
                      <td>:</td>
                      <td>{job.education}</td>
                    </tr>

                    <tr>
                      <td>Experience</td>
                      <td>:</td>
                      <td>{job.experience}</td>
                    </tr>

                    <tr>
                      <td>Company</td>
                      <td>:</td>
                      <td>{job.company}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="job-location">
                <h4 className="mt-5 mb-4">Job Location</h4>
                <div id="job-map" style={{ height: 520, width: '100%' }} />
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4">
            <div className="job-contact-details p-3">
              <h4 className="my-4">More Details</h4>
              <hr />
              <h5>Email Address:</h5>
              <p>{job.email}</p>

              <h5>Job Published:</h5>
              <p>{publishedAtRelativeToNow}</p>

              <h5>Last Date:</h5>
              <p>{lastDateToApply}</p>
            </div>

            {isExpiredDateToApply && (
              <div className="mt-5 p-0">
                <div className="alert alert-danger">
                  <h5>Note:</h5>
                  You can no longer apply to this job. This job is expired. Last
                  date to apply for this job was: <b>{lastDateToApply}</b>
                  <br /> Checkout others job on {job.company}.
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default JobDetails
