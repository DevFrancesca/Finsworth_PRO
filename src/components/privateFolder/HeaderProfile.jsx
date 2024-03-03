import React from 'react'
import '../privateFolder/HeaderProfile.css'
import { FaBell } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";



const HeaderProfile = () => {
  return (
    <div className='adminHeader'>
      <section className="adminHeaderLeft">
        <h4>Welcome!</h4>
        <h5>FINSWORTH PRO</h5>
      </section>
      <section className="adminHeaderRight">
        {/* <div className="adminHeaderNotiImg">
          <FaBell/>
        </div> */}
        <h5>Francesca</h5>
        <div className="adminHeaderImg">
          <CiBellOn/>
        </div>
      </section>
    </div>
  )
}

export default HeaderProfile
