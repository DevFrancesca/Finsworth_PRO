import React from 'react'
import '../CSS_Folder/ContactPage.css'
import Header from './Header'
import { MdLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className='ContactUsPage'>
      <Header/>
      <div className='ContactUsPageWrapper'>
        <div className='ContactUsPageWrapperLeft'>
          <div className='ContactUsPageWrapperLeftUp'>
            <h1>Get in touch</h1>
            <p>We are here for you! How can we help?</p>
          </div>
          <div className='ContactUsPageWrapperLeftMid'>
          <div className="ContactUsInputs">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='e.g Chidera Akude'/>
          </div>
          <div className="ContactUsInputs">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='e.g akudechidera@gmail.com'/>
          </div>
          <div className="ContactUsInputs">
            <label htmlFor="">Message</label>
            <input type="text" placeholder='' id='message'/>
          </div>
          <button className='ContactUsSubmit'>Submit</button>
          </div>
          <div className='ContactUsPageWrapperLeftDown'>
            <span className='ContactusSpan'>
            <MdLocationOn />
            <p>24 Rd, Festac Lagos</p>
            </span>
            <span className='ContactusSpan'>
            <AiOutlineMail/>
            <p>24 Rd, Festac Lagos</p>
            </span>
            <span className='ContactusSpan'>
            <FaPhoneAlt />
            <p>+2348148608468, +2347067640916, +2348155665763, +2348144890753</p>
            </span>
          </div>

        </div>
        <div className='ContactUsPageWrapperRight'>
          <div className='WrapperRightImgHolder'>
            <img src="./ContactUs.jpg" alt="" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default ContactPage
