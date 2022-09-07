import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

import { Container } from "./styles"

const InternalServerError = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])

  return (
    <Container>
      <Image
        src="/images/500.svg"
        height="550"
        width="550"
        alt="500_internal_server_error"
      />

      <h5>
        Internal Server Error. Go to <Link href="/">Homepage</Link>
      </h5>
    </Container>
  )
}

export default InternalServerError
