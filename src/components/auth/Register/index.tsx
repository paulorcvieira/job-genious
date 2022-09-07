import Image from "next/image"
import { useRouter } from "next/router"
import { FormEvent, useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"

import { useAuth } from "hooks/useAuth"

import slugify from "slugify"
import { ModalMask } from "./styles"

const Register = () => {
  const [fistName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const { register, loading, isAuthenticated, error, clearError } = useAuth()

  useEffect(() => {
    if (error) {
      toast.error(error)
      clearError()
    }

    if(isAuthenticated && !loading) {
      router.push('/')
    }
  }, [isAuthenticated, loading, router, error, clearError])

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()

    register({
      first_name: fistName.trim(),
      last_name: lastName.trim(),
      username,
      email: email.trim(),
      password
    })
  }, [fistName, lastName, username, email, password, register])

  const handleChangeSlugUsername = (username: string) => {
    const usernameSlug = slugify(username, {
      replacement: '-',
      remove: undefined,
      lower: true,
      strict: true,
      locale: 'ptBR',
      trim: true
    })

    setUsername(usernameSlug)
  }

  return (
    <ModalMask>
      <div className="modalWrapper">
        <div className="left">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image src="/images/signup.svg" alt="register" layout="fill" />
          </div>
        </div>
        <div className="right">
          <div className="rightContentWrapper">
            <div className="headerWrapper">
              <h2>SIGN UP</h2>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    value={fistName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="inputBox">
                  <i aria-hidden className="fas fa-user-tie"></i>
                  <input
                    type="text"
                    placeholder="Enter Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <div className="inputBox">
                  <i aria-hidden className="fas fa-user-secret"></i>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => handleChangeSlugUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="inputBox">
                  <i aria-hidden className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                    title="Your e-mail is invalid"
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-key"></i>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={6}
                    required
                  />
                </div>
              </div>
              <div className="registerButtonWrapper">
                <button type="submit" className="registerButton">
                  {loading ? 'Registering...' : 'Register'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalMask>
  )
}

export default Register
