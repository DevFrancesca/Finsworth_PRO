import React from 'react'
import '../CSS_Folder/Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
     
    <div className='footerBody'>
      <div className='FooterUp'>
        <h2>Can’t find what you are looking for?</h2>
        <span className='span'>
          <p>If you have any questions, feel free to email us</p>
          <p style={{color:"#FB8500"}}> finsworthpro@gmail.com</p>
        </span>
      </div>
      <div className='FooterItSelf'>

      <div className='footerBodyWrap'>
        <div className='FooterContainer'>
          <h1>Finsworth</h1>
          <p>Take your finances to the next level!!! <br />Don’t hesitate, money matters</p>
          <div className='FooterConBox'>
            <div className='FooterConBoxCircle'>
            <FaInstagram  style={{color:"white"}}/>
            </div>
            <div className='FooterConBoxCircle'>
            <FaFacebook style={{color:"white"}}/>
            </div>
            <div className='FooterConBoxCircle'>
            <FaSquareXTwitter style={{color:"white"}}/>
            </div>
            <div className='FooterConBoxCircle'>
            <AiOutlineMail style={{color:"white"}}/>
            </div>
          </div>
          <p>CopyRight © FINSWORTH. All Right Reserved.</p>
        </div>
        <div className='FooterContainer'>
        <h1>Pages</h1>
        <p>Home</p>
        <p>About</p>
        <p>Contact Us</p>
        <p>FAQs</p>
        </div>
        <div className='FooterContainer'>
        <h1>Our Partners</h1>
        <span className='mySpan'>
          <p>The Curve Africa</p>
          <img src="./tcaaaa.png" alt="" style={{width:"40px"}} />
        </span>
        <span className='mySpan'>
          <p>koraPay</p>
          <img src="./kora.png" alt="" style={{width:"30px"}}/>
        </span>

        </div>

      </div>
      </div>
   
    </div>

  )
}

export default Footer
