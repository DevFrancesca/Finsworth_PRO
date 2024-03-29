import React, { useState } from 'react'
import '../pagesCSS/Login.css'
import { useNavigate} from 'react-router-dom'
import { AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import Swal from 'sweetalert2'
import axios from 'axios'
import { CirclesWithBar } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import { Userdata, UserToken } from '../../features/Slice'
import { IoIosArrowRoundBack } from "react-icons/io";


const Login = () => {
  const navigate = useNavigate()

  const homePage =()=>{
    navigate('/')
  }
  const handleRegister =()=>{
    navigate('/signup')
  }
  const forgotPassword =()=>{
    navigate('/forgotpassword')
  }
  
  const [showPassword, setshowPassword] =useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
  })

  const handleShow =() =>{
    setshowPassword(!showPassword)
  }

  const handleLoginEmail = (e) => {
    setEmail(e.target.value)
    setErrorMessage({ ...errorMessage, email: '' })
  }

  const handleLoginPassword = (e) => {
    setPassword(e.target.value)
    setErrorMessage({ ...errorMessage, password: '' })

  }

  const url = ' https://finsworthpro.onrender.com/api/login'

  const loginData = {email,password}
  const Dispatch = useDispatch()
  

  const handleLogin = async ()=>{
    if(!email || !password){
      setErrorMessage({
        email: !email ? "Email is Required" : '',
        password: !password ? "Password cannot be empty" : ''
      })
      return;
     }
    setIsLoading(true)
    try{

      const response = await axios.post(url, loginData,)
      
      Dispatch(Userdata(response.data.data))
      Dispatch(UserToken(response.data.token))
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("companyname",response.data.user.company_Name)
      localStorage.setItem("companynamefirstletter",response.data.user.company_Name.charAt(0).toUpperCase())

    console.log(response);
    
      Swal.fire({
        title: 'Login Successful!',
        text: `${response.data.message}`,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 1500
      })
      console.log(response.data.loginData);
      navigate('/admindashboard')

      setIsLoading(false)
    } catch (error) {
      const errorMessage = error.response ? error?.response?.data?.error : 'An error occurred'
      Swal.fire({
        icon: 'error',
        text: 'Login error!',
        // title: errorMessage,
        title: errorMessage,
        color: 'red'
      })

      console.error(errorMessage);
    }

    finally{
      setIsLoading(false)
    }
  }
 
  return (
    <div className='loginBody'>

      <div className='VideoBg'>
      </div>


      <div className="loginImg">
        <img src="./goldLogo.png" alt="logo" onClick={homePage}/>
      </div>
      
     <div className="loginMiddle">
      <div className="loginContainer1">
        <div className="loginWrap1">
          
          <div className="loginText">
            <div className="backIcon">
            <IoIosArrowRoundBack style={{width: "10%", height: "100%"}} onClick={homePage}/>
            </div>
            <h3>Login</h3>
          </div>

          <div className="loginInputs">
            <label htmlFor="">Email</label>
            <input type="email"placeholder='e.g agbanzofrancesca@gmail.com' onChange={handleLoginEmail}/>
          </div>
          <p className="error" style={{color: "red"}}>{errorMessage.email}</p>

          <div className="loginInputs">
            <label htmlFor="">Password</label>
            <div className="passwordShow">
              <input type={showPassword ? "text" : "password"} placeholder='enter password' onChange={handleLoginPassword}/>
              <div className='iconeye'>{showPassword ? <AiOutlineEye onClick={handleShow}/>
               :
              <AiOutlineEyeInvisible onClick={handleShow}/>
              }
              </div>
            </div>
          </div>
          <p className="error"  style={{color: "red"}}>{errorMessage.password}</p>
              
          
          <div className="forgotPassword">
            <div className="checkContainer">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <span onClick={forgotPassword}>Forgotten Password?</span>
          </div>
          <button onClick={handleLogin}>
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
                  "Login"
                  }
          </button>
        </div>
        <p>Don't have an account? <span onClick={handleRegister}>Create Account</span></p>
      </div>
     </div>
     <div className="loginRight"></div>
    </div>
  )
}

export default Login