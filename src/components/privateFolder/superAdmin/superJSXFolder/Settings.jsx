import React from 'react'
import '../superCSSFolder/Settings.css'
import {Route, Routes, useNavigate} from "react-router-dom"


const Settings = () => {
 
  return (
    <div className='adminSettingsBody'>
      
      <section className="adminSettingsUp">
        <nav>Edit Profile</nav>
        <nav>Change Password</nav>
        <nav>Add Account</nav>
      </section>
      
      <section className="adminSettingsDown">
          <h3>This feature will be available soon</h3>
      </section>
    </div>
  )
}

export default Settings
