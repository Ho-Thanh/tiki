import React from 'react'
import Header from '../components/Header'
import Footer from '../footer/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className = 'grid grid-cols-12'>
      <Header/>
      <Footer/>
    </div>
  )
}

export default MyApp
