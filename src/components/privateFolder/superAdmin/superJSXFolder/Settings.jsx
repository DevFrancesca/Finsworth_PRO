import React from 'react'
import '../superCSSFolder/Settings.css'
import {Route, Routes, useNavigate} from "react-router-dom"


const Settings = () => {
  const navigate = useNavigate()

  const editProfile =()=>{
    navigate('/editprofile')
  }
  const changePassword =()=>{
    navigate('/changepassword')
  }
  const addAccount =()=>{
    navigate('/addaccount')
  }
  return (
    <div className='adminSettingsBody'>
      
      <section className="adminSettingsUp">
        <nav onClick={editProfile}>Edit Profile</nav>
        <nav onClick={changePassword}>Change Password</nav>
        <nav onClick={addAccount}>Add Account</nav>
      </section>
      
      <section className="adminSettingsDown">
          <h3>This feature will be available soon</h3>
      </section>
    </div>
  )
}

export default Settings
