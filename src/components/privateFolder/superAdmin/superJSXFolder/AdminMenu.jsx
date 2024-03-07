import React from 'react'
import '../superCSSFolder/AdminMenu.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { RiDashboardLine } from "react-icons/ri"
import { CiWallet, CiBellOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { GiSun } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import { GiExpense } from "react-icons/gi";
import { LuUserPlus2 } from "react-icons/lu";


const AdminMenu = () => {
 const navigate = useNavigate()
  return (
    <div className='menuBody'>

      <div className="menuTop">
        <img src="./goldLogo.png" alt="logo"/>
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

          {/* <div className="logo-navs">
            <div className="navLogo">
              <GiExpense style={{color:'white'}}/>
            </div>
            <NavLink to='/adminexpenses/:id' className={({isActive})=> isActive? "active" : "inActive"}>EXPENSES</NavLink>
          </div> */}

          <div className="logo-navs">
            <div className="navLogo">
              <LuUserPlus2 style={{color:'white'}}/>
            </div>
            <NavLink to='/createuser' className={({isActive})=> isActive? "active" : "inActive"}>ADD USER</NavLink>
          </div>
          
          {/* <div className="logo-navs">
            <div className="navLogo">
            <MdPayment style={{color:'white'}}/>
            </div>
            <NavLink to='/paymentpage' className={({isActive})=> isActive? "active" : "inActive"}>SUBSCRIPTION</NavLink>
          </div> */}
          
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

          <div className="bottomLogo-navs" onClick={()=>{
            localStorage.removeItem('token')
            navigate('/')
          }}>
            <div className="bottomNavLogo">
              <GrLogout style={{color:'white', fontSize: "30px"}}/>
            </div>
            <h4>LOGOUT</h4>
            <div className="bottomNavLogo"></div>
          </div>
          {/* <nav>HIDE SIDE BAR</nav> */}
        </section>
        
      </div>
    </div>
  )
}

export default AdminMenu