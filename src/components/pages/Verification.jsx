import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '../pagesCSS/Verification.css'

const Verification = () => {
  return (
    <div className='verifyBody'>
      <div className="verifyContainer">
          <div className="verifyIcon">
            <FaRegCircleCheck style={{fontSize:"8rem",color:"#06d6a0"}} />
          </div>
          <div className="verifyTitle">
            <h2>Email Verified</h2>
            <span>Your email address has been verified successfully!</span>
          </div> 
          <div className="verifyBtn">
              <button>
                <Link to='/login' style={{textDecoration:'none', color:"white"}}> Back to Login </Link>
              </button>
          </div>
        </div>
    </div>
  )
}

export default Verification
