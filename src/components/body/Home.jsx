import React, { useState } from 'react'
import '../CSS_Folder/Home.css'
import Header from './Header'
import Heroes from './Heroes'
import About from './About'
import Footer from './Footer'
import Dropdown from './Dropdown'
import Team from './Team'
import Subscribe from './Subscribe'

const Home = () => {
const [ show, setShow] = useState(false)

  return (
    <div className='homeBody'>
      <Header show={show} setShow={setShow}/>
      {
        show === true? <Dropdown/>:null
      }

      <Heroes/>     
      <About />
      <Team/>
      <Subscribe/>

      <Footer/>
    
    </div>
  )
}

export default Home