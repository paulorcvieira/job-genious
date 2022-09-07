import Head from "next/head"
import { ReactNode } from "react"

import Footer from "./Footer"
import Header from "./Header"

import { Container } from "./styles"

interface DefaultLayoutProps {
  title?: string
  children: ReactNode
}

const Layout = ({ children, title = 'Job Genious' }: DefaultLayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      {children}

      <Footer />
    </Container>
  )
}

export default Layout
