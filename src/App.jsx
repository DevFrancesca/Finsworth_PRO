import React from 'react'
import { BrowserRouter, Routes, Route,} from "react-router-dom"
import Body from './components/body/Body'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Layout from './components/privateFolder/Layout'
import AdminDashboard from './components/privateFolder/superAdmin/superJSXFolder/AdminDashboard'
import AdminMenu from './components/privateFolder/superAdmin/superJSXFolder/AdminMenu'
import CreateBudget from './components/privateFolder/superAdmin/superJSXFolder/CreateBudget'
import AdminExpenses from './components/privateFolder/superAdmin/superJSXFolder/AdminExpenses'
import Settings from './components/privateFolder/superAdmin/superJSXFolder/Settings'
import HeaderProfile from './components/privateFolder/HeaderProfile'
import EditProfile from './components/privateFolder/superAdmin/superJSXFolder/EditProfile'
import ChangePassword from './components/privateFolder/superAdmin/superJSXFolder/ChangePassword'
import ContactPage from './components/body/ContactPage'
import ForgotPassword from './components/pages/ForgotPassword'
import NewPassword from './components/pages/NewPassword'
import About from './components/body/About'
import Verification from './components/pages/Verification'
import Payment from './components/privateFolder/superAdmin/superJSXFolder/Payment'
import Private from './components/privateFolder/Private'
import Team from './components/body/Team'
import ScrollToTop from './ScrollToTop'
import CreateUser from './components/privateFolder/superAdmin/superJSXFolder/CreateUser'
import UserPage from './components/privateFolder/superAdmin/superJSXFolder/UserPage'
import ManagerSignup from './components/privateFolder/accountManager/accountJSXFolder/ManagerSignup'


const App = () => {
  return (
    <>
     <BrowserRouter>
     <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/verification'element={<Verification/>}/>
        <Route path= '/contactus' element={<ContactPage/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/newpassword' element={<NewPassword/>}/>
        <Route path='/teams' element={<Team/>}/>
        <Route path='managersignup' element={<ManagerSignup/>}/>
        

        
        <Route element={<Layout/>}>
          <Route path='/admindashboard' element={<AdminDashboard/>}/>
          <Route path='/adminmenu' element={<AdminMenu/>}/>
          <Route path='/createbudget' element={<CreateBudget/>}/>
          <Route path='/adminexpenses' element={<AdminExpenses/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/headerprofile' element={<HeaderProfile/>}/>
          <Route path='/editprofile' element={<EditProfile/>}/>
          <Route path='/changepassword' element={<ChangePassword/>}/>
          <Route path='/paymentpage' element={<Payment/>}/>
          <Route path='/userpage' element={<UserPage/>}/>
          <Route path='/createuser' element={<CreateUser/>}/>
          
          </Route>
        
          </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
