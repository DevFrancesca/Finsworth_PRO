import React from 'react'
import './Private.css'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {
  const user = [""]
  return (
    <div>
      {
        user.length ===0 ? <Navigate to='/login'/> : Outlet
      }
    </div>
  )
}

export default Private
