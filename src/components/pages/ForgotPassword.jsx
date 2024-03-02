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
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)


  const handleForgotEmail = (e)=>{
    setEmail(e.target.value)
  }

  const url = 'https://finsworthpro.onrender.com/api/forgotPassword'
  
  const handleForgotPassword = async () =>{
    setIsLoading(true)
    try{
      const forgotData = new FormData()
      forgotData.append('email', email)

      const response = await axios.get(url, forgotData, {
        headers: {
          'Content-Type': 'multipart/forgot-data'
        }
      })
      setIsLoading(false)
      Swal.fire({
        title: 'Successful!',
        text: `${response.data.message}`,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '',
        allowOutsideClick: false
      })
      console.log('Data:', response.data);
      navigate('/newpassword')

    } catch(error){
      Swal.fire({
        icon: 'error',
        title: 'Oops...!',
        text: 'user with this email is not found',
      })

      console.error('Error fetching data:', error);
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
              <input type="text" 
              value={email}
              onChange={handleForgotEmail}
              />
            </div>
            <button onClick={handleForgotPassword}>
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
