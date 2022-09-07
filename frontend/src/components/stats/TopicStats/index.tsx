import { FormEvent, useCallback, useEffect, useState } from "react"

import { useJob } from "hooks/useJob"

import Loader from "components/layout/Loader"
import { toast } from "react-toastify"
import { ModalMask } from "./styles"

const TopicStats = () => {
  const [topic, setTopic] = useState('React')

  const { getTopicStats, stats, clearError, error, loading } = useJob()

  useEffect(() => {
    if(error) {
      toast.error(error)
      clearError()
    }
  }, [error, clearError])

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()

    getTopicStats(topic)
  }, [topic, getTopicStats])

  return (
    <ModalMask>
      <div className="modalWrapper">
        <div className="left">
          <div className="rightContentWrapper">
            <div className="headerWrapper">
              <h3> Get Topic Stats </h3>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fas fa-chart-line"></i>
                  <input
                    type="text"
                    placeholder="Enter Your Topic"
                    value={topic}
                    onChange={e => setTopic(e.target.value)}
                    required />
                </div>
              </div>

              <div className="uploadButtonWrapper">
                <button type="submit" className="uploadButton">
                  {loading ? "Fetching..." : "Get Stats"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="right">
          {loading ? (
            <Loader />
          ) : stats && !!stats.message ? (
            <div className="alert alert-danger">
              <b>{stats.message}</b>
            </div>
          ) : (
            <div className="rightContentWrapper">
              <h4>Stats of &quot;{topic.toUpperCase()}&quot;:</h4>
              <table className="table table-striped mt-4">
                <tbody>
                  <tr>
                    <th scope="row">Average Positions</th>
                    <td>{stats?.avg_positions}</td>
                  </tr>
                  <tr>
                    <th scope="row">Total Jobs</th>
                    <td>{stats?.total_jobs}</td>
                  </tr>
                  <tr>
                    <th scope="row">Minimum Salary</th>
                    <td>{stats?.min_salary}</td>
                  </tr>
                  <tr>
                    <th scope="row">Maximum Salary</th>
                    <td>{stats?.max_salary}</td>
                  </tr>
                  <tr>
                    <th scope="row">Average Salary</th>
                    <td>{stats?.avg_salary}</td>
                  </tr>
                </tbody>
              </table>

              <div className="alert alert-warning mt-4">
                <b>Note:</b> These stats are collected from the jobs that are
                posted only on Job Genious. Do not compare these stats with other
                sites.
              </div>
            </div>
          )}
        </div>
      </div>
    </ModalMask>
  )
}

export default TopicStats
