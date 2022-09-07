import Image from "next/image"
import { useRouter } from "next/router"
import { FormEvent, useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"

import { useAuth } from "hooks/useAuth"

import { DownloadResume, ModalMask } from "./styles"

const UploadResume = () => {
  const [resume, setResume] = useState<File | null>(null)

  const router = useRouter()

  const {
    loading,
    error,
    clearError,
    user,
    uploadResume,
  } = useAuth()

  useEffect(() => {
    if (error) {
      toast.error(error)
      clearError()
    }
  }, [router, error, clearError])

  useEffect(() => {
    if(!user) {
      router.push('/')
    }
  }, [user, router])

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()

    if(resume) {
      const formData = new FormData()
      formData.append('resume', resume)

      uploadResume(formData)
    }

  }, [resume, uploadResume])

  const handleChangeResume = useCallback((event: any) => {
    setResume(event.target.files[0])
  }, [])

  return (
    <ModalMask>
      <div className="modalWrapper">
        <div className="left">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image src="/images/resume-upload.svg" alt="resume" layout="fill" />
          </div>
        </div>
        <div className="right">
          <div className="rightContentWrapper">
            <div className="headerWrapper">
              <h3>UPLOAD RESUME</h3>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fas fa-upload"></i>
                  <input
                    type="file"
                    name="resume"
                    id="customFile"
                    accept="application/pdf"
                    onChange={handleChangeResume}
                    required
                  />
                </div>
              </div>

              {user && user.resume && (
                <>
                  <h4 className="text-center my-3">OR</h4>
                    <DownloadResume
                      href={
                        `${process.env.NEXT_PUBLIC_S3_URL}/${user.resume}`
                      }
                      className="text-success text-center ml-4"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i aria-hidden className="fas fa-download"></i> Download
                      Your Resume
                    </DownloadResume>
                </>
              )}

              <div className="uploadButtonWrapper">
                <button type="submit" className="uploadButton">
                  {loading ? 'Uploading...' : 'Upload'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalMask>
  )
}

export default UploadResume
