import Image from "next/image"
import Link from "next/link"

import { useAuth } from "hooks/useAuth"

import {
  BtnsWrapper, LoginButtonHeader, LogoImgWrapper,
  LogoWrapper,
  NavContainer, PostAJobButton, Wrapper
} from './styles'

const Header = () => {
  const { user, signOut } = useAuth()

  return (
    <Wrapper>
      <NavContainer>
        <Link href="/">
          <LogoWrapper>
            <LogoImgWrapper>
              <Image width={30} height={30} src="/images/logo.png" alt="" />
            </LogoImgWrapper>
            <span>Job</span>
            <span>Genious</span>
          </LogoWrapper>
        </Link>
        <BtnsWrapper>
          <Link href="/employer/jobs/new">
            <PostAJobButton>
              Post a Job
            </PostAJobButton>
          </Link>

          {user ? (
            <div className="dropdown ml-3">
              <a
                className="btn dropdown-toggle mr-4"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>Hi, {user.first_name}</span>
              </a>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                <Link href="/employer/jobs">
                  <a className="dropdown-item">
                    My Jobs
                  </a>
                </Link>

                <Link href="/me/applied">
                  <a className="dropdown-item">
                    Jobs Applied
                  </a>
                </Link>

                <Link href="/me">
                  <a className="dropdown-item">
                    Profile
                  </a>
                </Link>

                <Link href="/upload/resume">
                  <a className="dropdown-item">
                    Upload Resume
                  </a>
                </Link>

                <a
                  className="dropdown-item text-danger cursor-pointer"
                  onClick={() => signOut()}
                >
                  Logout
                </a>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <LoginButtonHeader>
                Login
              </LoginButtonHeader>
            </Link>
          )}
        </BtnsWrapper>
      </NavContainer>
    </Wrapper>
  )
}

export default Header
