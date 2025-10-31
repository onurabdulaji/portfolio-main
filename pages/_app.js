// pages/_app.js

import '../styles/globals.css'
// 1. next/head'i import ediyoruz
import Head from 'next/head' 
import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      
      <Head>
        <title>Onur Abdulaji - Portfolio</title> 
        <meta 
          name="description" 
          content="Onur Abdulaji portfolio web application." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Onur Abdulaji - Software Engineer Portfolio" />
        <meta property="og:description" content="Web And Full Stack Development Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}