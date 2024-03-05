import React, { useState } from 'react'
import '../privateFolder/HeaderProfile.css'
// import { FaBell } from "react-icons/fa";
// import { CiBellOn } from "react-icons/ci";



const HeaderProfile = () => {

  const [companyName, setCompanyName] = useState(localStorage.getItem("companyname"))
  const [companyNameFirstLetter, setCompanyNameFirstLetter] = useState(localStorage.getItem("companynamefirstletter"))
  return (
    <div className='adminHeader'>
      <section className="adminHeaderLeft">
        <h4>Welcome!</h4>
        <h5>{companyName}</h5>
      </section>
      <section className="adminHeaderRight">
        {/* <h5>Francesca</h5> */}
        <div className="adminHeaderImg">
          {/* <CiBellOn/> */}
          {companyNameFirstLetter}
        </div>
      </section>
    </div>
  )
}

export default HeaderProfile
