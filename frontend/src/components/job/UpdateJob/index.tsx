import { FormEvent, useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"

import { useJob } from "hooks/useJob"

import {
  educationOptions,
  experienceOptions,
  industryOptions,
  jobTypeOptions
} from "utils/jobOptions"

import { Container } from "./styles"

import { Job } from "interfaces/Job"

interface UpdateJobProps {
  job: Job
  token: string
}

const UpdateJob = ({ job, token }: UpdateJobProps) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [salary, setSalary] = useState(0)
  const [positions, setPositions] = useState(0)
  const [company, setCompany] = useState('')
  const [jobType, setJobType] = useState('Permanent')
  const [education, setEducation] = useState('Bachelors')
  const [industry, setIndustry] = useState('Business')
  const [experience, setExperience] = useState('No Experience')

  const { clearError, error, updateJob, loading } = useJob()

  useEffect(() => {
    if (job) {
      setTitle(job.title)
      setDescription(job.description)
      setEmail(job.email)
      setAddress(job.address)
      setSalary(job.salary)
      setPositions(job.positions)
      setCompany(job.company)
      setJobType(job.jobType)
      setEducation(job.education)
      setIndustry(job.industry)
      setExperience(job.experience)
    }
  }, [job])

  useEffect(() => {
    if (error) {
      toast.error(error)
      clearError()
    }
  }, [error, clearError])

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()

    const data = {
      title,
      description,
      email,
      address,
      salary,
      positions,
      company,
      jobType,
      education,
      industry,
      experience
    }
    updateJob({ id: job.id, data, token })

  }, [
    updateJob,
    token,
    job.id,
    address,
    company,
    description,
    education,
    email,
    experience,
    industry,
    jobType,
    positions,
    salary,
    title,
  ])

  return (
    <Container>
      <div className="formWrapper">
        <div className="headerWrapper">
          <div className="headerLogoWrapper"></div>
          <h1>
            <i aria-hidden className="fas fa-copy mr-2"></i> UPDATE JOB
          </h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="inputWrapper">
              <div className="inputBox">
                  <i aria-hidden className="fab fa-tumblr"></i>
                  <input
                    type="text"
                    placeholder="Enter Job Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-file-medical-alt"></i>
                  <textarea
                    className="description"
                    placeholder="Enter Job Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    pattern="\S+@\S+\.\S+"
                    title="Your email is invalid"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-map-marker-alt"></i>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-dollar-sign"></i>
                  <input
                    type="number"
                    placeholder="Enter Salary"
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-users"></i>
                  <input
                    type="number"
                    placeholder="Enter No. of Positions"
                    value={positions}
                    onChange={(e) => setPositions(Number(e.target.value))}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-building"></i>
                  <input
                    type="text"
                    placeholder="Enter Company Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ml-4 mt-4 mt-md-0 ml-md-0">
              <div className="boxWrapper">
                <h4>Job Types:</h4>
                <div className="selectWrapper">
                  <select
                    className="classic"
                    value={jobType}
                    onChange={(evt) => setJobType(evt.target.value)}
                  >
                    {jobTypeOptions.map(option => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="boxWrapper">
                <h4>Education:</h4>
                <div className="selectWrapper">
                  <select
                    className="classic"
                    value={education}
                    onChange={(evt) => setEducation(evt.target.value)}
                  >
                    {educationOptions.map(option => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="boxWrapper">
                <h4>Industry:</h4>
                <div className="selectWrapper">
                  <select
                    className="classic"
                    value={industry}
                    onChange={(evt) => setIndustry(evt.target.value)}
                  >
                    {industryOptions.map(option => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="boxWrapper">
                <h4>Experience:</h4>
                <div className="selectWrapper">
                  <select
                    className="classic"
                    value={experience}
                    onChange={(evt) => setExperience(evt.target.value)}
                  >
                    {experienceOptions.map(option => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="col text-center mt-3">
              <button className="createButton">
                {loading ? 'Updating...' : 'Update Job'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default UpdateJob
