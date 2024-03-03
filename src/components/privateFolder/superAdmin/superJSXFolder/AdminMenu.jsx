import React from 'react'
import '../superCSSFolder/AdminMenu.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { RiDashboardLine } from "react-icons/ri"
import { CiWallet, CiBellOn } from "react-icons/ci";
// import { CiBellOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { GiSun } from "react-icons/gi";
import { MdPayment } from "react-icons/md";


const AdminMenu = () => {
  const navigate = useNavigate()

  const homePage =()=>{
    navigate('/')
  }
  return (
    <div className='menuBody'>
      <div className="menuTop">
        <div className="menuLogo">
          <img src="./src/components/images/goldLogo.png" alt="logo" onClick={homePage}/>
        </div>

        <section className="navigations">

          <div className="logo-navs">
            <div className="navLogo">
              <RiDashboardLine style={{color:'white'}}/>
            </div>
            <NavLink to='/admindashboard' className={({isActive})=> isActive? "active" : "inActive"}>DASHBOARD</NavLink>
            <div className="navLogo"></div>
          </div>

          <div className="logo-navs">
            <div className="navLogo">
              <CiWallet style={{color:'white'}}/>
            </div>
            <NavLink to='/createbudget' className={({isActive})=> isActive? "active" : "inActive"}>BUDGET</NavLink>
            <div className="navLogo"></div>
          </div>

          <div className="logo-navs">
            <div className="navLogo">
              <img src="./src/components/images/contrast_bank.png" alt="logo"/>
            </div>
            <NavLink to='/adminexpenses' className={({isActive})=> isActive? "active" : "inActive"}>EXPENSES</NavLink>
            <div className="navLogo"></div>
          </div>

          <div className="logo-navs">
            <div className="navLogo">
              <CiBellOn style={{color:'white'}}/>
            </div>
            <NavLink to='/adminhistory' className={({isActive})=> isActive? "active" : "inActive"}>HISTORY</NavLink>
            <div className="navLogo"></div>
          </div>

          <div className="logo-navs">
            <div className="navLogo">
            <MdPayment style={{color:'white'}}/>
            </div>
            <NavLink to='/paymentpage' className={({isActive})=> isActive? "active" : "inActive"}>SUBSCRIPTION</NavLink>
            <div className="navLogo"></div>
          </div>
          
          <div className="logo-navs">
            <div className="navLogo">
            <IoSettingsOutline style={{color:'white'}}/>
            </div>
            <NavLink to='/settings' className={({isActive})=> isActive? "active" : "inActive"}>SETTINGS</NavLink>
            <div className="navLogo"></div>
          </div>
          
        </section>
      </div>

      <div className="menuBottom">
        <section className="bottomNavigations">
          <div className="toggleMode">
            <article className="toggleImg">
              <GiSun/>
            </article>
            <nav>MODE</nav>
            <article className="toggleImg">
              <img src="./src/components/images/ion_moon.png" alt="logo"/>
            </article>
          </div>

          <div className="bottomLogo-navs">
            <div className="bottomNavLogo">
              <img src="./src/components/images/ic_logout.png" alt="logo"/>
            </div>
            <nav onClick={homePage}>LOGOUT</nav>
            <div className="bottomNavLogo"></div>
          </div>
          {/* <nav>HIDE SIDE BAR</nav> */}
        </section>
        
      </div>
    </div>
  )
}

export default AdminMenu