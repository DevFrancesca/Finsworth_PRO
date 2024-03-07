import React, { useState } from 'react'
import '../CSS_Folder/Header.css'
import { HiMenu } from 'react-icons/hi'
import { GiCancel } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import Dropdown from './Dropdown'
import { Link } from 'react-scroll'

const Header = () => {
const [ show, setShow] = useState(false);


const navigate = useNavigate()

const loginPage =() =>{
  navigate('/login')
}
const signupPage =() =>{
  navigate('/signup')
}
const ContactPage =() =>{
  navigate('/contactus')
}
const HomePage =() =>{
  navigate('/')
}

const HeaderDrop =(
  show && (
    <div className='HeaderDRop'>
      <Dropdown/>
    </div>
  )
)

  return (
    <div className='Header'>
      <div className='leftHeader'>
        <div className='leftimg'>
        <img src="./goldLogo.png" alt=""/>
        </div>

      </div>
      <div className='midHeader'>
        {/* <h3>Home</h3> */}
        <Link to ='heroo' spy={true} smooth={true} offset={50} duration={500}><h3 onClick={HomePage}>Home</h3></Link>
        <Link to ='Abttt' spy={true} smooth={true} offset={50} duration={500}><h3 >About Us</h3></Link>
        <Link to ='Teams' spy={true} smooth={true} offset={50} duration={500}><h3>Team</h3></Link>
        
        <h3 onClick={ContactPage}>Contact Us</h3>
      </div>
      <div className='rightHeader'>
        <button className='login' onClick={loginPage}>Login</button>
        <button className='signup' onClick={signupPage}>Sign UP</button>
        <div className='rightimg'onClick={()=>setShow(!show)} >
          {
            show === true? <GiCancel className='Gi' />: <HiMenu className='Gi'/>
          }   
        </div>
        {
          show && HeaderDrop
        }
      </div>
    </div>
  )
}

export default Header
