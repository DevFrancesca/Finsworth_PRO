import React, { useState } from 'react'
import '../pagesCSS/ForgotPassword.css'
import GL from '../images/goldLogo.png'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import { CirclesWithBar } from 'react-loader-spinner'


const ForgotPassword = () => {
  const navigate = useNavigate()
  const homePage =()=>{
    navigate('/')
  }
  const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [ErrorMessage, setErrorMessage] = useState({
        email : ""
    })


    
    const handleForgotEmail = (e)=>{
        setEmail(e.target.value)
        setErrorMessage({...ErrorMessage,email: ''})
    }


  const url = 'https://finsworthpro.onrender.com/api/forgotPassword'
  const forgotData = {email}
  
  const handleForgetPassword = async (e)=>{
    if(!email){
        setErrorMessage({
            email : !email ?  "Email is Required" : ''
        })
        return;
    }

    try{
        setIsLoading(true)
        const res = await axios.post(url,forgotData)
        Swal.fire({
            position: "center",
            icon: "success",
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 2000
          });
          console.log(res);
    }
    catch(error){
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error}`,
        });
      }
      finally{
          setIsLoading(false)
      }
}

  return (
    <div className='forgotBody'>
      <section className="forgotPasswordLeft">
        <img src={GL} alt="logo" onClick={homePage}/>
      </section>

      <section className="forgotPasswordMiddle">
        <div className="forgotPasswordCard">
          <div className="forgotPasswordWrap">
            <h3>Forgot Password?</h3>
            <p>Please enter your email address. You will receive<br/> a link to create a new password</p>
            <div className="ForgotPasswordInput">
              <label htmlFor="">Email</label>
              <input type="text"  onChange={handleForgotEmail}/>
              <p className="error">{ErrorMessage.email}</p>
            </div>
            <button onClick={handleForgetPassword}>
            {
               isLoading ? 
                <CirclesWithBar
                  height="30"
                  width="30"
                  color="#219EBC"
                  outerCircleColor="#FB8500"
                  innerCircleColor="#219EBC"
                  barColor="#219EBC"
                  ariaLabel="circles-with-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  // 219EBC
                  /> :
                  "Send Reset Link"
                  }
            </button>
          </div>
        </div>
      </section>

      <section className="forgotPasswordRight"></section>
    </div>
  )
}

export default ForgotPassword
