import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ManagerSignup = () => {
    const [isLoading, setIsloading] = useState(false)
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        companyName: '',
        companyCode: ''
    })

     const createUserData = async (e) =>{
        e.preventDefault()
        
        setIsloading(true)
        try{
        const response = await axios.post('https://finsworthpro.onrender.com/api/accountManagerSignup', userData)

        localStorage.setItem('token', response?.data?.token)

        setIsloading(false)
        
        navigate('/admindashboard')
        }
        catch(error){
            console.log(error)
            setIsloading(false)
        }
     }
     useEffect(()=>{
        console.log(isLoading)
     },[setIsloading])

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={createUserData}>
        <div className="form-group">
          <label htmlFor="fullNames">Full Name</label>
          <input type="text" id="fullNames" onChange={(e)=> setUserData({...userData, fullName:e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(e)=> setUserData({...userData, email:e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e)=> setUserData({...userData, password:e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" onChange={(e)=> setUserData({...userData, confirmPassword:e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" onChange={(e)=> setUserData({...userData, companyName:e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="companyCode">Company Code</label>
          <input type="text" id="companyCode" onChange={(e)=> setUserData({...userData, companyCode:e.target.value})}/>
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default ManagerSignup
