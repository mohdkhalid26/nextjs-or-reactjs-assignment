import React from 'react'
import "./Home.scss"
import Navbar from '../../public/navbar/Navbar'
import Header from '../../public/header/Header'
import Main from '../../public/main/Main'
import Footer from '../../public/footer/Footer'
function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Home