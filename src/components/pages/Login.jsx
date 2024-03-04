import React, { useState } from 'react'
import '../pagesCSS/Login.css'
import { useNavigate} from 'react-router-dom'
import GL from '../images/goldLogo.png'
import { AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import Swal from 'sweetalert2'
import axios from 'axios'
import { CirclesWithBar } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import { Userdata, UserToken } from '../../features/Slice'
// import { IoIosArrowRoundBack } from "react-icons/io";


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
      localStorage.setItem("token", JSON.stringify(token))

    console.log(response);
    
      Swal.fire({
        title: 'Login Successful!',
        text: `${response.data.message}`,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 2000
      })
      console.log(response.data.loginData);
      navigate('/admindashboard')

      setIsLoading(false)
    } catch (error) {
      const errorMessage = error.response ? error.response.data.error : 'An error occurred'
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
      <div className="loginImg">
        <img src="./goldLogo.png" alt="logo" onClick={homePage}/>
      </div>
      
     <div className="loginMiddle">
      <div className="loginContainer1">
        <div className="loginWrap1">
          <h3>Login</h3>

          <div className="loginInputs">
            <label htmlFor="">Email</label>
            <input type="email"placeholder='e.g agbanzofrancesca@gmail.com' onChange={handleLoginEmail}/>
            <p className="error" style={{color: "red"}}>{errorMessage.email}</p>
          </div>

          <div className="loginInputs">
            <label htmlFor="">Password</label>
            <div className="passwordShow">
              <input type={showPassword ? "text" : "password"} placeholder='enter password' onChange={handleLoginPassword}/>
              {showPassword ? <AiOutlineEye onClick={handleShow}/>
               :
              <AiOutlineEyeInvisible onClick={handleShow}/>
              }
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

                {/* code snippets for my container2 for media query */}  
      <div className="loginContainer2">
        <div className="loginContainer2Logo">
          <img src={GL} alt="logo" onClick={homePage}/>
        </div>
        <div className="loginWrap2">
          <h3>Login</h3>

          <div className="loginInputs">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='e.g agbanzofrancesca@gmail.com'/>
          </div>

          <div className="loginInputs">
            <label htmlFor="">Password</label>
            <div className="passwordShow">
              <input type={showPassword ? "text" : "password"} placeholder='enter password'/>
              {showPassword ? <AiOutlineEye onClick={handleShow}/>
               :
              <AiOutlineEyeInvisible onClick={handleShow}/>
              }
            </div>
          </div>
          
          <div className="forgotPassword">
            <div className="checkContainer">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <span onClick={forgotPassword}>Forgotten Password?</span>
          </div>
          <button>
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
  