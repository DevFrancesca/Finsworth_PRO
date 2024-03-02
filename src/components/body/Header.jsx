import React, { useState } from 'react'
import '../CSS_Folder/Header.css'
import { HiMenu } from 'react-icons/hi'
import { GiCancel } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

const Header = () => {
const [ click, setClick] = useState(false);

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

const handleClick = () =>{
  setClick(true)
}

  return (
    <div className='Header'>
      <div className='leftHeader'>
        <div className='leftimg'>
        <img src="./src/components/images/goldLogo.png" alt="logo"/>
        </div>

      </div>
      <div className='midHeader'>
        <h3>Home</h3>
        <h3>About Us</h3>
        <h3>FAQs</h3>
        <h3 onClick={ContactPage}>Contact Us</h3>
      </div>
      <div className='rightHeader'>
        <button className='login' onClick={loginPage}>Login</button>
        <button className='signup' onClick={signupPage}>Sign UP</button>
        <div className='rightimg'onClick={()=>setClick(!click)} >
          {
            click? <GiCancel />: <HiMenu/>
          }

          
          
        </div>
        
      </div>
    </div>
  )
}

export default Header
