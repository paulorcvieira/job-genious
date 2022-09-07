import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { FormEvent, useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"

import { useAuth } from "hooks/useAuth"

import { ModalMask } from "./styles"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const { signIn, loading, isAuthenticated, error, clearError } = useAuth()

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
    signIn({ username, password })
  }, [username, password, signIn])

  return (
    <ModalMask>
      <div className="modalWrapper">
        <div className="left">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image src="/images/login.svg" alt="login" layout="fill" />
          </div>
        </div>
        <div className="right">
          <div className="rightContentWrapper">
            <div className="headerWrapper">
              <h2>LOGIN</h2>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Enter Your Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    required
                  />
                </div>
              </div>
              <div className="loginButtonWrapper">
                <button type="submit" className="loginButton">
                  {loading ? 'Authenticating...' : 'Login'}
                </button>
              </div>
              <p style={{ textDecoration: "none" }} className="signup">
                New to Job Genious?&nbps;
                <Link href="/register">
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </ModalMask>
  );
};

export default Login;
