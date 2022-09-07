import Image from "next/image"
import { useRouter } from "next/router"
import { FormEvent, useCallback, useState } from "react"

import { ModalMask } from "./styles"

const Search = () => {
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('')
  const router = useRouter()

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault()

    if(keyword.length) {
      let searchQuery = `/?keyword=${keyword}`

      if(location.length) searchQuery = searchQuery.concat(`&location=${location}`)

      router.push(searchQuery)
    } else {
      router.push('/')
    }
  }, [keyword, location, router])

  return (
    <ModalMask>
      <div className="modalWrapper">
        <div className="left">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image src="/images/job-search.svg" alt="search" layout="fill" />
          </div>
        </div>
        <div className="right">
          <div className="rightContentWrapper">
            <div className="headerWrapper">
              <h2> SEARCH</h2>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fas fa-search"></i>
                  <input
                    type="text"
                    placeholder="Enter Your Keyword"
                    value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-industry"></i>
                  <input
                    type="text"
                    placeholder="Enter City, State ..."
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                  />
                </div>
              </div>
              <div className="searchButtonWrapper">
                <button type="submit" className="searchButton">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalMask>
  )
}

export default Search
