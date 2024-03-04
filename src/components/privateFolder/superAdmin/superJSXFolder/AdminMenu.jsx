import React from 'react'
import '../superCSSFolder/AdminMenu.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { RiDashboardLine } from "react-icons/ri"
import { CiWallet, CiBellOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { GiSun } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { GiExpense } from "react-icons/gi";


const AdminMenu = () => {
  const navigate = useNavigate()

  const homePage =()=>{
    navigate('/')
  }
  return (
    <div className='menuBody'>

      <div className="menuTop">
        <img src="./goldLogo.png" alt="logo" onClick={homePage}/>
      </div>

      <div className="menuMiddle">

          <div className="logo-navs">
            <div className="navLogo">
              <RiDashboardLine style={{color:'white'}}/>
            </div>
            <NavLink to='/admindashboard' className={({isActive})=> isActive? "active" : "inActive"}>DASHBOARD</NavLink>
          </div>

          <div className="logo-navs">
            <div className="navLogo">
              <CiWallet style={{color:'white'}}/>
            </div>
            <NavLink to='/createbudget' className={({isActive})=> isActive? "active" : "inActive"}>BUDGET</NavLink>
          </div>

          <div className="logo-navs">
            <div className="navLogo">
              <GiExpense style={{color:'white'}}/>
            </div>
            <NavLink to='/adminexpenses' className={({isActive})=> isActive? "active" : "inActive"}>EXPENSES</NavLink>
          </div>

          {/* <div className="logo-navs">
            <div className="navLogo">
              <FaHistory style={{color:'white'}}/>
            </div>
            <NavLink to='/adminhistory' className={({isActive})=> isActive? "active" : "inActive"}>HISTORY</NavLink>
          </div> */}

          <div className="logo-navs">
            <div className="navLogo">
            <MdPayment style={{color:'white'}}/>
            </div>
            <NavLink to='/paymentpage' className={({isActive})=> isActive? "active" : "inActive"}>SUBSCRIPTION</NavLink>
          </div>
          
          <div className="logo-navs">
            <div className="navLogo">
            <IoSettingsOutline style={{color:'white'}}/>
            </div>
            <NavLink to='/settings' className={({isActive})=> isActive? "active" : "inActive"}>SETTINGS</NavLink>
          </div>
          
      </div>

      <div className="menuBottom">
        <section className="bottomNavigations">
          {/* <div className="toggleMode">
            <article className="toggleImg">
              <GiSun/>
            </article>
            <nav>MODE</nav>
            <article className="toggleImg">
              <img src="./src/components/images/ion_moon.png" alt="logo"/>
            </article>
          </div> */}

          <div className="bottomLogo-navs">
            <div className="bottomNavLogo">
              <LuLogOut style={{color:'white'}}/>
            </div>
            <NavLink to='/logout' className={({isActive})=> isActive? "active" : "inActive"}>LOGOUT</NavLink>
            <div className="bottomNavLogo"></div>
          </div>
          {/* <nav>HIDE SIDE BAR</nav> */}
        </section>
        
      </div>
    </div>
  )
}

export default AdminMenu