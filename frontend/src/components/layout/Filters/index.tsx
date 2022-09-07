/* eslint-disable react/no-unknown-property */
import { useRouter } from 'next/router'
import { useCallback } from "react"
import { Sidebar } from "./styles"

const Filters = () => {
  const router = useRouter()

  let queryParams: any
  if(typeof window === 'object') {
    queryParams = new URLSearchParams(window.location.search)
  }

  const handleClick = useCallback((checkbox: any) => {

    if(typeof window === 'object') {
      const checkboxes = document.getElementsByName(`${checkbox.name}`)

      checkboxes.forEach((item: any) => {
        if(item !== checkbox) item.checked = false
      })
    }

    if(checkbox.checked === false) {
      if(queryParams.has(checkbox.name)) {
        queryParams.delete(checkbox.name)
        router.replace({
          search: queryParams.toString()
        })
      }
    } else {
      if(queryParams.has(checkbox.name)) {
        queryParams.set(checkbox.name, checkbox.value)
      } else {
        queryParams.append(checkbox.name, checkbox.value)
      }

      router.replace({
        search: queryParams.toString()
      })
    }
  }, [router, queryParams])

  const handleCheck = useCallback((
    checkboxType: string,
    checkboxValue: string
  ) => {
    if(typeof window === 'object') {
      const value = queryParams.get(checkboxType)
      if(checkboxValue === value) return true
      return false
    }
  }, [queryParams])

  return (
    <Sidebar className="mt-5">
      <h3>Filters</h3>

      <hr />
      <h5 className="filter-heading mb-3">Job Type</h5>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="jobType"
          id="check1"
          value="Permanent"
          defaultChecked={handleCheck('jobType', 'Permanent')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check1">
          Permanent
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="jobType"
          id="check2"
          value="Temporary"
          defaultChecked={handleCheck('jobType', 'Temporary')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check2">
          Temporary
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="jobType"
          id="check3"
          value="Intership"
          defaultChecked={handleCheck('jobType', 'Intership')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check3">
          Intership
        </label>
      </div>

      <hr />
      <h5 className="mb-3">Education</h5>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="education"
          id="check4"
          value="Bachelors"
          defaultChecked={handleCheck('education', 'Bachelors')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check4">
          Bachelors
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="education"
          id="check5"
          value="Masters"
          defaultChecked={handleCheck('education', 'Masters')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check5">
          Masters
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="education"
          id="check6"
          value="Phd"
          defaultChecked={handleCheck('education', 'Phd')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check6">
          Phd
        </label>
      </div>

      <hr />

      <h5 className="mb-3">Experience</h5>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="experience"
          id="check7"
          value="No Experience"
          defaultChecked={handleCheck('experience', 'No Experience')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check7">
          No Experience
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="experience"
          id="check8"
          value="1 Year"
          defaultChecked={handleCheck('experience', '1 Year')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check8">
          1 Years
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="experience"
          id="check9"
          value="2 Years"
          defaultChecked={handleCheck('experience', '2 Years')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check9">
          2 Years
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="experience"
          id="check10"
          value="3 Years above"
          defaultChecked={handleCheck('experience', '3 Years above')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check10">
          3 Year+
        </label>
      </div>

      <hr />
      <h5 className="mb-3">Annual Salary Range</h5>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="salary"
          id="check11"
          value="1-50000"
          defaultChecked={handleCheck('salary', '1-50000')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check11">
          $1 - $50000
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="salary"
          id="check12"
          value="50000-100000"
          defaultChecked={handleCheck('salary', '50000-100000')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check12">
          $50000 - $100,000
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="salary"
          id="check13"
          value="100000-200000"
          defaultChecked={handleCheck('salary', '100000-200000')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check13">
          $100,000 - $200,000
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="salary"
          id="defaultCheck2"
          value="300000-500000"
          defaultChecked={handleCheck('salary', '300000-500000')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="defaultCheck2">
          $300,000 - $500,000
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="salary"
          id="check14"
          value="500000-1000000"
          defaultChecked={handleCheck('salary', '500000-1000000')}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check14">
          $500,000 - $1,000,000
        </label>
      </div>

      <hr />
    </Sidebar>
  )
}

export default Filters
