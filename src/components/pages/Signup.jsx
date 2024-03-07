import React, { useState } from 'react'
import '../pagesCSS/Signup.css'
import { useNavigate } from 'react-router-dom'
import GL from '../images/goldLogo.png'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Swal from 'sweetalert2'
import axios from 'axios'
import { CirclesWithBar } from 'react-loader-spinner'
import { UserToken } from '../../features/Slice';
import { useDispatch } from 'react-redux';
// import { IoIosArrowRoundBack } from "react-icons/io";


const Signup = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const Dispatch = useDispatch();

  const homePage = () => {
    navigate('/')
  }
  const loginPage = () => {
    navigate('/login')
  }
  const handleShow = () => {
    setShowPassword(!showPassword)
  }
  const handleShowConfirm = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const [imageShow, setImageShow] = useState(false)
  const [profilePicture, setProfilePicture] = useState(null)
  const [company_Name, setCompanyName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [PreviewUrl, setPreviewUrl] = useState(null)
  const [errorMessage, setErrorMessage] = useState({
    company_Name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: ""
  })

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setErrorMessage({ ...errorMessage, email: '' })
  }
  const handleCompanyName = (e) => {
    setCompanyName(e.target.value)
    setErrorMessage({ ...errorMessage, company_Name: '' })

  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setErrorMessage({ ...errorMessage, password: '' })
    
  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
    setErrorMessage({ ...errorMessage, confirmPassword: '' })
  }

  const handleProfilePicture = (e) => {
    const selectedImage = e.target.files[0]
    setProfilePicture(selectedImage)
    setErrorMessage({ ...errorMessage, profilePicture: '' })
    
    const PreviewImageUrl = URL.createObjectURL(selectedImage)
    setPreviewUrl(PreviewImageUrl)
  }

  const handleRegister = async () => {
    if (!company_Name || !email || !password || !confirmPassword || !profilePicture) {
      setErrorMessage({
        company_Name: !company_Name ? 'Company name is required' : '',
        email: !email ? 'Email is required' : '',
        password: !password ? 'Password is required' : '',
        confirmPassword: !confirmPassword ? 'Confirm Password is required' : '',
        profilePicture: !profilePicture ? 'Profile picture is required' : '',
      })
      return
    }
    if (password !== confirmPassword) {
      setErrorMessage({ ...errorMessage, confirmPassword: 'Passwords must match' });
      return;
    }
    
    const url = 'https://finsworthpro.onrender.com/api/createUser'
    
    const formData = new FormData()
    formData.append('company_Name', company_Name)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('confirmPassword', confirmPassword)
    formData.append('profilePicture', profilePicture)

    setIsLoading(true)
    try {
      const response = await axios.post(url, formData)
      // console.log(response, "response from api")
      Dispatch(UserToken(response.data.token));

      
      Swal.fire({
        title: 'Sign Up Successful!',
        text: 'You have successfully signed up! Please check mail for verification.',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '',
        allowOutsideClick: false
      })

      // console.log(response.data);
      navigate('/verification')
      
    } catch (error) {
      const errorMessage = error?.response ? error?.response?.data?.message: 'An error occurred';

      Swal.fire({
        icon: 'error',
        text: errorMessage,
        title: 'Signup error',
        color: 'red'
      })
      
      console.error(errorMessage);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='signupBody'>
      <div className="signupImg">
        <img src={GL} alt="logo" onClick={homePage}/>
      </div>

      <div className="signupMiddle">
        {imageShow === false ? 
          <div className="signupContainer1">
            <div className="signupWrap1">
              <h3>Create Account</h3>

              <div className="signupInputs">
                <label htmlFor="">Company Name</label>
                <input type="text"
                  placeholder='e.g Cheszo Enterprise'
                  value={company_Name}
                  onChange={handleCompanyName}
                />
              </div>
                <p className="error"style={{color: "red"}}>{errorMessage.company_Name}</p>

              <div className="signupInputs">
                <label htmlFor="">Email</label>
                <input type="email"
                  placeholder='e.g agbazofrancesca@gmail.com'
                  value={email}
                  onChange={handleEmail}
                />
              </div>
                <p className="error"style={{color: "red"}}>{errorMessage.email}</p>

              <div className="signupInputs">
                <label htmlFor="">Password</label>
                <div className="signupPasswordShow">
                  <input type={showPassword ? "text" : "password"} placeholder='Enter password'
                    value={password}
                    onChange={handlePassword}
                  />

                  {showPassword ? <AiOutlineEye onClick={handleShow} />
                    :
                    <AiOutlineEyeInvisible onClick={handleShow} />
                  }
                </div>
              </div>
              <p className="error"style={{color: "red"}}>{errorMessage.password}</p>

              <div className="signupInputs">
                <label htmlFor="">Confirm Password</label>
                <div className="signupPasswordShow">
                  <input type={showConfirmPassword ? "text" : "password"} placeholder='Confirm password'
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                  />
                  {showConfirmPassword ? <AiOutlineEye onClick={handleShowConfirm} />
                    :
                    <AiOutlineEyeInvisible onClick={handleShowConfirm} />
                  }
                </div>
              </div>
              <p className="error">{errorMessage.confirmPassword}</p>

              <div className="signupCondition">
                <input type="checkbox" />
                <p>By signing up you agree to our Terms of Service and <br />Privacy Policy</p>
              </div>
              <button onClick={() => setImageShow(true)}>Next</button>
            </div>
            <p>Already have an account? <span onClick={loginPage}>Login</span></p>
          </div>
          :
          <div className="imageUploadCard">
            <div className="imageUploadCardWrap">
              <div className="imageUpload">
                {!PreviewUrl && 
                  <>
                    <label htmlFor="myfile" className="imageUploadP">
                      Browse Photo
                    </label>
                    <input type="file" id="myfile" name="myfile" hidden
                      onChange={handleProfilePicture}/>
                    <p className="error">{errorMessage.profilePicture}</p>
                  </>
                }
                {PreviewUrl && (
                  <div className="previewImageContainer">
                    <img src={PreviewUrl} alt="Profile Preview" className="previewImage" />
                  </div>
                )}
              </div>
              <div className="imageUploadBtns">
                <button className="backButton" onClick={() => setImageShow(false)}>Back</button>
                <button onClick={handleRegister}>
                  {isLoading ? 
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
                    "Register"
                  }
                </button>
              </div>
              <p>Already have an account? <span onClick={loginPage}>Login</span></p>
            </div>
          </div>
        }

        {/* code snippets for my container2 for media query */}
      </div>

      <div className="signupRight"></div>
    </div>
  )
}

export default Signup
