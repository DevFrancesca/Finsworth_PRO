import React, { useEffect } from 'react'
import "../privateFolder/Layout.css"
import { Outlet } from "react-router-dom"
import AdminMenu from './superAdmin/superJSXFolder/AdminMenu'
import HeaderProfile from './HeaderProfile'


const Layout = () => {
  // useEffect=(()=>{
  //   const token = localStorage.getItem(token)
  //   if(!token){
  //     navigate('/login')
  //   }
  // },[navigate])
  return (
    <div className='layoutBody'>

      <div className="menuBar">
        <AdminMenu/>
      </div>

      <div className='layoutRight'>
        <div className='headerProfile'><HeaderProfile/></div>
        <Outlet/>
      </div>

    </div>
  )
}

export default Layout
