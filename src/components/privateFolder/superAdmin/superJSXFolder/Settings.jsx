import React from 'react'
import '../superCSSFolder/Settings.css'
import {Route, Routes, useNavigate} from "react-router-dom"
import EditProfile from './EditProfile'
import ChangePassword from './ChangePassword'
import AddAccount from './AddAccount'

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
          <h4>This feature will be available soon</h4>
      </section>
    </div>
  )
}

export default Settings
