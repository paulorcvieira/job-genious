import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

import { Container } from "./styles"

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])

  return (
    <Container>
      <Image
        src="/images/404.svg"
        height="550"
        width="550"
        alt="404_not_found"
      />

      <h5>
        Page Not Found. Go to <Link href="/">Homepage</Link>
      </h5>
    </Container>
  )
}

export default NotFound
