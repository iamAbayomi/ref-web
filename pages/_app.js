import '../assets/css/App.css'
import React from 'react'
import Head from 'next/head'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
      <>
        <Component {...pageProps} />
      </>
  )
}