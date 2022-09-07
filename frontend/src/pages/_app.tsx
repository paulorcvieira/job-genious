import AppProvider from 'contexts'
import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import { Bounce, ToastContainer } from 'react-toastify'

import GlobalStyle from '../styles/global.styles'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
      <AppProvider>
        <Head>
          <title>Job Genious - Oportunidades para Desenvolvedores</title>
          <meta
            name="description"
            content="💻 Oportunidades de trabalho e vagas de programação em Java, PHP, Ruby, iOS, Android, Javascript, Python, Objective-C, C#,... e muito mais para você!"
          />
          <meta name="theme-color" content="#131319" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>

          <NextNprogress
            color="#2ecc71"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          />
          <Component key={router.route} {...pageProps} />
        <GlobalStyle />
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          draggablePercent={60}
          transition={Bounce}
        />
      </AppProvider>
  )
}
