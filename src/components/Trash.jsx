// import React, { useState } from 'react'
// import '../pagesCSS/Signup.css'
// import { useNavigate } from 'react-router-dom'
// import GL from '../images/goldLogo.png'
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// import Swal from 'sweetalert2'
// import axios from 'axios'
// import { CirclesWithBar } from 'react-loader-spinner'

// const Signup = () => {
//   const navigate = useNavigate()
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//   const homePage = () => {
//     navigate('/')
//   }
//   const loginPage = () => {
//     navigate('/login')
//   }
//   const handleShow = () => {
//     setShowPassword(!showPassword)
//   }
//   const handleShowConfirm = () => {
//     setShowConfirmPassword(!showConfirmPassword)
//   }

//   const [imageShow, setImageShow] = useState(false)
//   const [profilePicture, setProfilePicture] = useState(null)
//   const [company_Name, setCompanyName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [PreviewUrl, setPreviewUrl] = useState(null)
//   const [errorMessage, setErrorMessage] = useState({
//     company_Name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     profilePicture: ""
//   })

//   const handleEmail = (e) => {
//     setEmail(e.target.value)
//     setErrorMessage({ ...errorMessage, email: '' })
//   }
//   const handleCompanyName = (e) => {
//     setCompanyName(e.target.value)
//     setErrorMessage({ ...errorMessage, company_Name: '' })

//   }
//   const handlePassword = (e) => {
//     setPassword(e.target.value)
//     setErrorMessage({ ...errorMessage, password: '' })
    
//   }
//   const handleConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value)
//     setErrorMessage({ ...errorMessage, confirmPassword: '' })
//   }

//   const handleProfilePicture = (e) => {
//     const selectedImage = e.target.files[0]
//     setProfilePicture(selectedImage)
//     setErrorMessage({ ...errorMessage, profilePicture: '' })
    
//     const PreviewImageUrl = URL.createObjectURL(selectedImage)
//     setPreviewUrl(PreviewImageUrl)
//   }

//   const handleRegister = async () => {
//     if (!company_Name || !email || !password || !confirmPassword || !profilePicture) {
//       setErrorMessage({
//         company_Name: !company_Name ? 'Company name is required' : '',
//         email: !email ? 'Email is required' : '',
//         password: !password ? 'Password is required' : '',
//         confirmPassword: !confirmPassword ? 'Confirm Password is required' : '',
//         profilePicture: !profilePicture ? 'Profile picture is required' : '',
//       })
//       return
//     }
//     if (password !== confirmPassword) {
//       setErrorMessage({ ...errorMessage, confirmPassword: 'Passwords must match' });
//       return;
//     }
    
//     const url = 'https://finsworthpro.onrender.com/api/createUser'
//     const formData = new FormData()
//     formData.append('company_Name', company_Name)
//     formData.append('email', email)
//     formData.append('password', password)
//     formData.append('confirmPassword', confirmPassword)
//     formData.append('profilePicture', profilePicture)

//     setIsLoading(true)
//     try {
//       const response = await axios.post(url, formData)
//       console.log(response, "response from api")
      
//       Swal.fire({
//         title: 'Sign Up Successful!',
//         text: `${response.data.message}`,
//         icon: 'success',
//         showCancelButton: false,
//         confirmButtonColor: '',
//         allowOutsideClick: false
//       })

//       console.log(response.data);
//       navigate('/otppage')
      
//     } catch (error) {
//       const errorMessage = error.response ? error.response.data.error : 'An error occurred';

//       Swal.fire({
//         icon: 'error',
//         text: 'Ouch..! Error signing up',
//         title: errorMessage,
//         color: 'red'
//       })
      
//       console.error(errorMessage);
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className='signupBody'>
//       <div className="signupImg">
//         <img src={GL} alt="logo" onClick={homePage}/>
//       </div>

//       <div className="signupMiddle">
//         {imageShow === false ? 
//           <div className="signupContainer1">
//             <div className="signupWrap1">
//               <h3>Create Account</h3>
//               <div className="signupInputs">
//                 <label htmlFor="">Company Name</label>
//                 <input type="text"
//                   placeholder='e.g Cheszo Enterprise'
//                   value={company_Name}
//                   onChange={handleCompanyName}
//                 />
//                 <p className="error">{errorMessage.company_Name}</p>
//               </div>

//               <div className="signupInputs">
//                 <label htmlFor="">Email</label>
//                 <input type="email"
//                   placeholder='e.g agbazofrancesca@gmail.com'
//                   value={email}
//                   onChange={handleEmail}
//                 />
//                 <p className="error">{errorMessage.email}</p>
//               </div>

//               <div className="signupInputs">
//                 <label htmlFor="">Password</label>
//                 <div className="signupPasswordShow">
//                   <input type={showPassword ? "text" : "password"} placeholder='Enter password'
//                     value={password}
//                     onChange={handlePassword}
//                   />
//                   <p className="error">{errorMessage.password}</p>

//                   {showPassword ? <AiOutlineEye onClick={handleShow} />
//                     :
//                     <AiOutlineEyeInvisible onClick={handleShow} />
//                   }
//                 </div>
//               </div>

//               <div className="signupInputs">
//                 <label htmlFor="">Confirm Password</label>
//                 <div className="signupPasswordShow">
//                   <input type={showConfirmPassword ? "text" : "password"} placeholder='Confirm password'
//                     value={confirmPassword}
//                     onChange={handleConfirmPassword}
//                   />
//                   <p className="error">{errorMessage.confirmPassword}</p>
//                   {showConfirmPassword ? <AiOutlineEye onClick={handleShowConfirm} />
//                     :
//                     <AiOutlineEyeInvisible onClick={handleShowConfirm} />
//                   }
//                 </div>
//               </div>

//               <div className="signupCondition">
//                 <input type="checkbox" />
//                 <p>By signing up you agree to our Terms of Service and <br />Privacy Policy</p>
//               </div>
//               <button onClick={() => setImageShow(true)}>Next</button>
//             </div>
//             <p>Already have an account? <span onClick={loginPage}>Login</span></p>
//           </div>
//           :
//           <div className="imageUploadCard">
//             <div className="imageUploadCardWrap">
//               <div className="imageUpload">
//                 {!PreviewUrl && 
//                   <>
//                     <label htmlFor="myfile" className="imageUploadP">
//                       Browse Photo
//                     </label>
//                     <input type="file" id="myfile" name="myfile" hidden
//                       onChange={handleProfilePicture}/>
//                     <p className="error">{errorMessage.profilePicture}</p>
//                   </>
//                 }
//                 {PreviewUrl && (
//                   <div className="previewImageContainer">
//                     <img src={PreviewUrl} alt="Profile Preview" className="previewImage" />
//                   </div>
//                 )}
//               </div>
//               <div className="imageUploadBtns">
//                 <button className="backButton" onClick={() => setImageShow(false)}>Back</button>
//                 <button onClick={handleRegister}>
//                   {isLoading ? 
//                     <CirclesWithBar
//                       height="30"
//                       width="30"
//                       color="#219EBC"
//                       outerCircleColor="#FB8500"
//                       innerCircleColor="#219EBC"
//                       barColor="#219EBC"
//                       ariaLabel="circles-with-bar-loading"
//                       wrapperStyle={{}}
//                       wrapperClass=""
//                       visible={true}
//                     /> :
//                     "Register"
//                   }
//                 </button>
//               </div>
//               <p>Already have an account? <span onClick={loginPage}>Login</span></p>
//             </div>
//           </div>
//         }
//       </div>
//     </div>
//   )
// }

// export default Signup


"65e3535ef7aadbd44206204f"


// import React from 'react'
// import { FaRegCircleCheck } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
// import '../pagesCSS/Verification.css'

// const Verification = () => {
//   return (
//     <div className='verifyBody'>
//       <div className="verifyContainer">
//           <div className="verifyIcon">
//             <FaRegCircleCheck style={{fontSize:"8rem",color:"#06d6a0"}} />
//           </div>
//           <div className="verifyTitle">
//             <h2>Email Verified</h2>
//             <span>Your email address has been verified successfully!</span>
//           </div> 
//           <div className="verifyBtn">
//               <button>
//                 <Link to='/login' style={{textDecoration:'none', color:"white"}}> Back to Login </Link>
//               </button>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Verification


// .verifyBody{
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .verifyContainer{
//   width: 30%;
//   height: 70%;
//   background: #FDFDF7;
//   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   flex-direction: column;
// }
// .verifyIcon{
//   width: 90%;
//   height: 30%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .verifyTitle{
//   width: 90%;
//   height: 15%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// }
// .verifyTitle > h2{
//   font-size: 1.5rem;
//   font-family: 'Lora',serif;
//   font-weight: 500;
//   color: #05446E;
// }
// .verifyTitle > span{
//   font-family: 'Lora',serif;
//   font-size: 1rem;
//   color: #615b5b;
// }
// .verifyBtn{
//   width: 90%;
//   height: 13%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }.verifyBtn > button{
//   width: 90%;
//   height: 90%;
//   background: #05446E;
//   color: #FDFDF7;
//   border: none;
//   border-radius: 9px;
//   font-size: 1.2rem;
//   font-weight: 600;
//   cursor: pointer;
// }



// .otpBody{
//   width: 100%;
//   height: 100vh;
//   background-color: #FFFDFD;
//   display: flex;
// }
// .otpBodyLeft{
//   width: 20%;
//   height: 100%;
//   display: flex;
// }
// .otpBodyLeft > img{
//   width: 80%;
//   height: 20%;
//   object-fit: contain;
// }
// .otpBodyMiddle{
//   width: 60%;
//   height: 100%;
//   /* background-color: red; */
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
// .otpCard{
//   width: 55%;
//   height: 60%;
//   background-color: #FFFDFD;
//   box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;
//   border-radius: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   flex-direction: column;
// }
// .otpCardUp{
//   width: 90%;
//   height: 40%;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   flex-direction: column
// }
// .otpCardUp > h3{
//   color: #023047;
// }
// .otpCardUp > p{
//   font-size: 13px;
//   color: #023047;
//   font-weight: 100;
// }
// .otpCardDown{
//   width: 80%;
//   height: 40%;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   flex-direction: column;
// }
// .otpCardInputs{
//   width: 40%;
//   height: 15%;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
// }
// .otpCardInputs > input{
//   width: 20%;
//   height: 100%;
//   padding: 7px;
//   border-radius: 2px;
//   outline: none;
//   border: 1px solid lightgray;
//   font-size: 10px;
// }
// .otpCardInputs > input:hover{
//   border: 1px solid #FB8500;
// }
// .otpCardDown > p{
//   font-size: 13px;
//   color: #023047;
// }
// .otpCardDown > p > span{
//   color: #FB8500;
//   cursor: pointer;
// }
// .otpCardDown > p > span:hover{
//   color: #c46800;
// }
// .otpCardDown > button{
//   width: 55%;
//   height: 30%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #023047;
//   border: none;
//   border-radius: 8px;
//   color: #FFFDFD;
//   cursor: pointer;
//   transition: all 260ms ease;
//   transform: scale(1);
// }
// .otpCardDown > button:hover{
//   color: #FB8500;
//   transform: scale(0.9);
// }

// .otpBodyRight{
//   width: 20%;
//   height: 100%;
//   /* background-color: aqua; */
// }




// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import GL from '../images/goldLogo.png';
// import '../pagesCSS/OtpPage.css';
// import { CirclesWithBar } from 'react-loader-spinner';
// import { useDispatch } from 'react-redux';
// import { UserToken } from '../../features/Slice';

// const Verification = () => {
//   const navigate = useNavigate();
//   const homePage = () => {
//     navigate('/');
//   };

//   const inputRefs = [useRef(), useRef(), useRef(), useRef()];
//   const [isLoading, setIsLoading] = useState(false);
//   const [verificationResult, setVerificationResult] = useState('');
//   const [countdown, setCountdown] = useState(300);
//   const [token, setToken] = useState('')

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown((prevCountdown) => prevCountdown - 1);
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
//   };

//   const handleInputChange = (index, value) => {
//     if (value.length === 1 && index < inputRefs.length - 1) {
//       inputRefs[index + 1].current.focus();
//     }
//   };

//   const handleVerification = async () => {
//     setIsLoading(true);

//     try {
//       const otp = inputRefs.map(ref => ref.current.value).join(`https://finsworthpro.onrender.com/api/verify/${UserToken}`);

//       const Dispatch = useDispatch()

//       console.log(otp)

//       const response = await axios.post(url, {otp},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//       Dispatch(UserToken(response.data.token))

//       setIsLoading(false);
//       Swal.fire({
//         title: 'Account verified Successfully!',
//         text: `${response.data.message}`,
//         icon: 'success',
//         showCancelButton: false,
//         confirmButtonColor: '',
//         allowOutsideClick: false,
//       });

//       if (response.data.verified) {
//         setVerificationResult('Account verified successfully.');
//       } else {
//         setVerificationResult('Account verification failed.');
//       }

//       navigate('/login')
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: error.response.message,
//         text: 'Account verification failed!',
//         color: 'red'
//       });
//       console.error('Error verifying account:', error.message);
//       setVerificationResult('Error verifying account.');
//     }
//   };

//   useEffect(() => {
    
//     const fetchToken = async () => {
//       try {
//         // Fetching token from your backend or local storage
//         const response = await axios.get('https://finsworthpro.onrender.com/api/resendOtp');
//         const fetchedToken = response.data.token;
//         setToken(fetchedToken);
//       } catch (error) {
//         console.error('Error fetching token:', error.message);
//       }
//     };

//     fetchToken();
//   }, []);

//   return (
//     <article className="otpBody">
//       <section className="otpBodyLeft">
//         <img src={GL} alt="logo" onClick={homePage} />
//       </section>
//       <section className="otpBodyMiddle">
//         <div className="otpCard">
//           <div className="otpCardUp">
//             <h3>Sign Up</h3>
//             <h5>Verify your account</h5>
//             <p>We've sent a One Time Password(OTP) to <br />**********@gmail.com</p>
//           </div>
//           <div className="otpCardDown">
//             <h6>{formatTime(countdown)}</h6>

//             <div className="otpCardInputs">
//               {inputRefs.map((ref, index) => (
//                 <input
//                   key={index}
//                   ref={ref}
//                   maxLength={1}
//                   onChange={(e) => handleInputChange(index, e.target.value)}
//                 />
//               ))}
//             </div>
//             <p>Didn't receive an OTP? <span>RESEND</span></p>
//             <button onClick={handleVerification}>
//               {isLoading ?
//                 <CirclesWithBar
//                   height="30"
//                   width="30"
//                   color="#219EBC"
//                   outerCircleColor="#FB8500"
//                   innerCircleColor="#219EBC"
//                   barColor="#219EBC"
//                   ariaLabel="circles-with-bar-loading"
//                   wrapperStyle={{}}
//                   wrapperClass=""
//                   visible={true}
//                 /> :
//                 "Verify"
//               }
//             </button>
//             <span style={{ color: "red" }}>{verificationResult}</span>
//           </div>
//         </div>
//       </section>
//       <section className="otpBodyRight"></section>
//     </article>
//   );
// };

// export default Verification;



// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import GL from '../images/goldLogo.png';
// import '../pagesCSS/Verification.css';
// import { CirclesWithBar } from 'react-loader-spinner';
// import { useDispatch } from 'react-redux';
// import { UserToken } from '../../features/Slice';

// const Verification = () => {
//   const navigate = useNavigate();
//   const homePage = () => {
//     navigate('/');
//   };

//   const inputRefs = [useRef(), useRef(), useRef(), useRef()];
//   const [isLoading, setIsLoading] = useState(false);
//   const [verificationResult, setVerificationResult] = useState('');
//   const [countdown, setCountdown] = useState(300);
//   const [token, setToken] = useState('')

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown((prevCountdown) => prevCountdown - 1);
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
//   };

//   const handleInputChange = (index, value) => {
//     if (value.length === 1 && index < inputRefs.length - 1) {
//       inputRefs[index + 1].current.focus();
//     }
//   };

//   // const handleInputChange = (index, value) => {
//   //   inputRefs[index].current.value = value;
//   //   if (value.length === 1 && index < inputRefs.length - 1) {
//   //     inputRefs[index + 1].current.focus();
//   //   }
//   // };

//   const handleVerification = async () => {
//     setIsLoading(true);

//     try {
//       const otp = inputRefs.map(ref => ref.current.value).join(`https://finsworthpro.onrender.com/api/verify/${UserToken}`);

//       const Dispatch = useDispatch()

//       console.log(otp)

//       const response = await axios.post(url, {otp},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//       Dispatch(UserToken(response.data.token))

//       setIsLoading(false);
//       Swal.fire({
//         title: 'Account verified Successfully!',
//         text: `${response.data.message}`,
//         icon: 'success',
//         showCancelButton: false,
//         confirmButtonColor: '',
//         allowOutsideClick: false,
//       });

//       if (response.data.verified) {
//         setVerificationResult('Account verified successfully.');
//       } else {
//         setVerificationResult('Account verification failed.');
//       }

//       navigate('/login')
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: error.response.message,
//         text: 'Account verification failed!',
//         color: 'red'
//       });
//       console.error('Error verifying account:', error.message);
//       setVerificationResult('Error verifying account.');
//     }
//   };

//   useEffect(() => {
    
//     const fetchToken = async () => {
//       try {
//         // Fetching token from your backend or local storage
//         const response = await axios.get('https://finsworthpro.onrender.com/api/resendOtp');
//         const fetchedToken = response.data.token;
//         setToken(fetchedToken);
//       } catch (error) {
//         console.error('Error fetching token:', error.message);
//       }
//     };

//     fetchToken();
//   }, []);

//   return (
//     <article className="otpBody">
//       <section className="otpBodyLeft">
//         <img src={GL} alt="logo" onClick={homePage} />
//       </section>
//       <section className="otpBodyMiddle">
//         <div className="otpCard">
//           <div className="otpCardUp">
//             <h3>Sign Up</h3>
//             <h5>Verify your account</h5>
//             <p>We've sent a One Time Password(OTP) to <br />**********@gmail.com</p>
//           </div>
//           <div className="otpCardDown">
//             <h6>{formatTime(countdown)}</h6>

//             <div className="otpCardInputs">
//               {inputRefs.map((ref, index) => (
//                 <input
//                   key={index}
//                   ref={ref}
//                   maxLength={1}
//                   onChange={(e) => handleInputChange(index, e.target.value)}
//                 />
//               ))}
//             </div>
//             <p>Didn't receive an OTP? <span>RESEND</span></p>
//             <button onClick={handleVerification}>
//               {isLoading ?
//                 <CirclesWithBar
//                   height="30"
//                   width="30"
//                   color="#219EBC"
//                   outerCircleColor="#FB8500"
//                   innerCircleColor="#219EBC"
//                   barColor="#219EBC"
//                   ariaLabel="circles-with-bar-loading"
//                   wrapperStyle={{}}
//                   wrapperClass=""
//                   visible={true}
//                 /> :
//                 "Verify"
//               }
//             </button>
//             <span style={{ color: "red" }}>{verificationResult}</span>
//           </div>
//         </div>
//       </section>
//       <section className="otpBodyRight"></section>
//     </article>
//   );
// };

// export default Verification;



// import React from 'react'
// import '../superCSSFolder/AdminMenu.css'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { RiDashboardLine } from "react-icons/ri"
// import { CiWallet, CiBellOn } from "react-icons/ci";
// // import { CiBellOn } from "react-icons/ci";
// import { IoSettingsOutline } from "react-icons/io5";
// import { GiSun } from "react-icons/gi";
// import { MdPayment } from "react-icons/md";


// const AdminMenu = () => {
//   const navigate = useNavigate()

//   const homePage =()=>{
//     navigate('/')
//   }
//   return (
//     <div className='menuBody'>
//       <div className="menuTop">
//         <div className="menuLogo">
//           <img src="./src/components/images/goldLogo.png" alt="logo" onClick={homePage}/>
//         </div>

//         <section className="navigations">

//           <div className="logo-navs">
//             <div className="navLogo">
//               <RiDashboardLine style={{color:'white'}}/>
//             </div>
//             <NavLink to='/admindashboard' className={({isActive})=> isActive? "active" : "inActive"}>DASHBOARD</NavLink>
//             <div className="navLogo"></div>
//           </div>

//           <div className="logo-navs">
//             <div className="navLogo">
//               <CiWallet style={{color:'white'}}/>
//             </div>
//             <NavLink to='/createbudget' className={({isActive})=> isActive? "active" : "inActive"}>BUDGET</NavLink>
//             <div className="navLogo"></div>
//           </div>

//           <div className="logo-navs">
//             <div className="navLogo">
//               <img src="./src/components/images/contrast_bank.png" alt="logo"/>
//             </div>
//             <NavLink to='/adminexpenses' className={({isActive})=> isActive? "active" : "inActive"}>EXPENSES</NavLink>
//             <div className="navLogo"></div>
//           </div>

//           <div className="logo-navs">
//             <div className="navLogo">
//               <CiBellOn style={{color:'white'}}/>
//             </div>
//             <NavLink to='/adminnotification' className={({isActive})=> isActive? "active" : "inActive"}>NOTIFICATION</NavLink>
//             <div className="navLogo"></div>
//           </div>

//           <div className="logo-navs">
//             <div className="navLogo">
//             <MdPayment style={{color:'white'}}/>
//             </div>
//             <NavLink to='/paymentpage' className={({isActive})=> isActive? "active" : "inActive"}>SUBSCRIPTION</NavLink>
//             <div className="navLogo"></div>
//           </div>
          
//           <div className="logo-navs">
//             <div className="navLogo">
//             <IoSettingsOutline style={{color:'white'}}/>
//             </div>
//             <NavLink to='/settings' className={({isActive})=> isActive? "active" : "inActive"}>SETTINGS</NavLink>
//             <div className="navLogo"></div>
//           </div>
          
//         </section>
//       </div>

//       <div className="menuBottom">
//         <section className="bottomNavigations">
//           <div className="toggleMode">
//             <article className="toggleImg">
//               <GiSun/>
//             </article>
//             <nav>MODE</nav>
//             <article className="toggleImg">
//               <img src="./src/components/images/ion_moon.png" alt="logo"/>
//             </article>
//           </div>

//           <div className="bottomLogo-navs">
//             <div className="bottomNavLogo">
//               <img src="./src/components/images/ic_logout.png" alt="logo"/>
//             </div>
//             <nav onClick={homePage}>LOGOUT</nav>
//             <div className="bottomNavLogo"></div>
//           </div>
//           <nav>HIDE SIDE BAR</nav>
//         </section>
        
//       </div>
//     </div>
//   )
// }

// export default AdminMenu


{imageShow === false ? 
  <div className="signupContainer2">
    <div className="signupWrap2">
      <h3>Create Account</h3>
      <div className="signupInputs">
        <label htmlFor="">Company Name</label>
        <input type="text"
          placeholder='e.g Cheszo Enterprise'
          value={company_Name}
          onChange={handleCompanyName}
        />
        <p className="error">{errorMessage.company_Name}</p>
      </div>

      <div className="signupInputs">
        <label htmlFor="">Email</label>
        <input type="email"
          placeholder='e.g agbazofrancesca@gmail.com'
          value={email}
          onChange={handleEmail}
        />
        <p className="error">{errorMessage.email}</p>
      </div>

      <div className="signupInputs">
        <label htmlFor="">Password</label>
        <div className="signupPasswordShow">
          <input type={showPassword ? "text" : "password"} placeholder='Enter password'
            value={password}
            onChange={handlePassword}
          />
          <p className="error">{errorMessage.password}</p>

          {showPassword ? <AiOutlineEye onClick={handleShow} />
            :
            <AiOutlineEyeInvisible onClick={handleShow} />
          }
        </div>
      </div>

      <div className="signupInputs">
        <label htmlFor="">Confirm Password</label>
        <div className="signupPasswordShow">
          <input type={showConfirmPassword ? "text" : "password"} placeholder='Confirm password'
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
          <p className="error">{errorMessage.confirmPassword}</p>
          {showConfirmPassword ? <AiOutlineEye onClick={handleShowConfirm} />
            :
            <AiOutlineEyeInvisible onClick={handleShowConfirm} />
          }
        </div>
      </div>

      <div className="signupCondition">
        <input type="checkbox" />
        <p>By signing up you agree to our Terms of Service and <br />Privacy Policy</p>
      </div>
      <button onClick={() => setImageShow(true)}>Next</button>
    </div>
    <p>Already have an account? <span onClick={loginPage}>Login</span></p>
  </div>
  :
  <div className="imageUploadCard2">
    <div className="imageUpload2CardWrap">
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



  // import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import GL from '../images/goldLogo.png';
// import '../pagesCSS/Verification.css';
// import { CirclesWithBar } from 'react-loader-spinner';
// import { useDispatch, useSelector } from 'react-redux';
// import { UserToken } from '../../features/Slice';

// const Verification = () => {
//   const navigate = useNavigate();
//   const Dispatch = useDispatch();

//   const homePage = () => {
//     navigate('/');
//   };

//   const inputRefs = [useRef(), useRef(), useRef(), useRef()];
//   const [isLoading, setIsLoading] = useState(false);
//   const [verificationResult, setVerificationResult] = useState('');
//   const [countdown, setCountdown] = useState(300);
//   const [token, setToken] = useState('');
//   const [userInput, setUserInput] = useState('')

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown((prevCountdown) => prevCountdown - 1);
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
//   };

//   const handleInputChange = (index, value) => {
//     if (value.length === 1 && index < inputRefs.length - 1) {
//       inputRefs[index + 1].current.focus();
//     }
//     setUserInput(prevInput => prevInput + value);
//   };

//   const handleVerification = async (userInput, userToken) => {
//     setIsLoading(true);
//     try {
//       // Make a request to verify the user input (OTP)
//       const response = await axios.post(
//         'https://finsworthpro.onrender.com/api/verify',
//         { userInput },
//         {
//           headers: {
//             Authorization: `Bearer ${userToken}`,
//             'Content-Type': 'application/json'
//           }
//         }
//       );
  
//       // If the verification is successful
//       if (response.status === 200) {
//         Dispatch(UserToken(response.data.token));
  
//         Swal.fire({
//           title: 'Account verified Successfully!',
//           text: `${response.data.message}`,
//           icon: 'success',
//           showCancelButton: false,
//           confirmButtonColor: '',
//           allowOutsideClick: false,
//         });
  
//         // Redirect the user to the login page
//         navigate('/login');
//       } else {
//         // If verification failed, show error message
//         Swal.fire({
//           icon: 'error',
//           title: 'Error',
//           text: 'Verification failed!',
//           color: 'red'
//         });
//         setVerificationResult('Error verifying user input.');
//       }
//     } catch (error) {
//       console.error('Error verifying user input:', error.message);
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Failed to verify user input!',
//         color: 'red'
//       });
//       setVerificationResult('Error verifying user input.');
//     }
//     finally {
//       setIsLoading(false);
//     }
//   };
  
//   // Call handleVerification function with the userInput (OTP) and userToken
//   handleVerification(userInput, UserToken);
  
//   // const handleResendOTP = async () => {
//   //   try {
//   //     const response = await axios.post('https://finsworthpro.onrender.com/api/resendOtp', {}, {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`
//   //       }
//   //     });
//   //     if (response.data.success) {
//   //       Swal.fire({
//   //         title: 'Success',
//   //         text: 'OTP has been resent successfully!',
//   //         icon: 'success',
//   //         confirmButtonText: 'OK'
//   //       });
//   //     } else {
//   //       Swal.fire({
//   //         title: 'Error',
//   //         text: response.data.message || 'Failed to resend OTP!',
//   //         icon: 'error',
//   //         confirmButtonText: 'OK'
//   //       });
//   //     }
//   //   } catch (error) {
//   //     console.error('Error resending OTP:', error.message);
//   //     Swal.fire({
//   //       title: 'Error',
//   //       text: 'Failed to resend OTP!',
//   //       icon: 'error',
//   //       confirmButtonText: 'OK'
//   //     });
//   //   }
//   // };
  

//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const response = await axios.get('https://finsworthpro.onrender.com/api/resendOtp');
//         const fetchedToken = response.data.token;
//         setToken(fetchedToken);
//       } catch (error) {
//         console.error('Error fetching token:', error.message);
//       }
//     };

//     fetchToken();
//   }, []);

//   return (
//     <article className="otpBody">
//       <section className="otpBodyLeft">
//         <img src={GL} alt="logo" onClick={homePage} />
//       </section>
//       <section className="otpBodyMiddle">
//         <div className="otpCard">
//           <div className="otpCardUp">
//             <h3>Sign Up</h3>
//             <h5>Verify your account</h5>
//             <p>We've sent a One Time Password(OTP) to <br />**********@gmail.com</p>
//           </div>
//           <div className="otpCardDown">
//             <h6>{formatTime(countdown)}</h6>

//             <div className="otpCardInputs">
//               {inputRefs.map((ref, index) => (
//                 <input
//                   key={index}
//                   ref={ref}
//                   maxLength={1}
//                   onChange={(e) => handleInputChange(index, e.target.value)}
//                 />
//               ))}
//             </div>
//             <p>Didn't receive an OTP? <span>RESEND</span></p>
//             <button onClick={handleVerification}>
//               {isLoading ?
//                 <CirclesWithBar
//                   height="30"
//                   width="30"
//                   color="#219EBC"
//                   outerCircleColor="#FB8500"
//                   innerCircleColor="#219EBC"
//                   barColor="#219EBC"
//                   ariaLabel="circles-with-bar-loading"
//                   wrapperStyle={{}}
//                   wrapperClass=""
//                   visible={true}
//                 /> :
//                 "Verify"
//               }
//             </button>
//             <span style={{ color: "red" }}>{verificationResult}</span>
//           </div>
//         </div>
//       </section>
//       <section className="otpBodyRight"></section>
//     </article>
//   );
// };

// export default Verification;


// import React, { useContext, useEffect, useState } from 'react';
// import '../superCSSFolder/CreateBudget.css';
// import { RiDeleteBinLine } from 'react-icons/ri';
// import { FaEdit } from 'react-icons/fa';
// import Modal from './Modal';
// import axios from 'axios';
// import ExpenseModal from './ExpenseModal';



// const CreateBudget = () => {
//   const [showInput, setShowInput] = useState(false);
//   const [showExpenseModal, setShowExpenseModal] = useState(false);
//   const [budgetId, setBudgetId] = useState('');
//   const [budgets, setBudgets] = useState([]);

//   const getToken = JSON.parse(localStorage.getItem('token'));

//   const handleCreate = () => {
//     setShowInput(true);
//   };

//   const handleCancel = () => {
//     setShowInput(false);
//   };

// const url = 'https://finsworthpro.onrender.com/api/getAllBudgets';

//   const handleGetAllBudget = async () => {
    
//     try {
//       const response = await axios.get(url, {
//         headers: {
//           Authorization: `Bearer ${getToken}`,
//         },
//       });
//       console.log(response);

//       if (response.data) {
//         setBudgets(response.data); 
//         handleCancel();
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     handleGetAllBudget();
//   }, []);

//   console.log(budgetId);

//   return (
//     <div className='createBudgetBody'>
//       <div className="createBudgetTop">

//         <div className="createHeaderLeft">
//           <section className='allCreateBudgetHeader'>
//             <p>Total Budget</p>
//             <span>₦ 0.00</span>
//           </section>
//         </div>

//         <div className="createHeaderMiddle">
//           <section className='CreatedHeaderMiddleTop'>
//             <h5>Jan</h5>
//           </section>
//           <span>1st Jan to 31st Jan</span>
//         </div>

//         <div className="createHeaderRight">
//           <section className='CreateBudgetHeaderRightOne'>
//             <p>Amount Spent</p>
//             <span>₦ 0.00</span>
//           </section>

//           <section className='CreateBudgetHeaderRightTwo'>
//             <p>Budget Balance</p>
//             <span>₦ 0.00</span>
//           </section>
          
//           <article className="createBudget" onClick={handleCreate}>
//               <p>Create +</p>
//             </article>
//         </div>
//       </div>


//       <div className="createBudgetDown">
//   <section className="createBudgetDownHeader">
//     <p>Budget</p>
//     <span>Amount</span>
//     <p>Date</p>
//   </section>

//   {/* <ExpenseModal /> */}

//   {
//     showExpenseModal && <ExpenseModal onClose={() => setShowExpenseModal(false)} budgetId={budgetId}/>
//   }

//   <div className="showBudgetCreatedWrap">
//   {budgets?.budgets?.length > 0 ? (
//   budgets?.budgets?.map((budget) => (
//     <div className="showBudgetCreated" key={budget.id}>
//       <h4>₦ {budget.amount}</h4>
//       <span>{budget.budgetType}</span>
//       <div className="showBudgetRmv">
//         <RiDeleteBinLine/>
//         <FaEdit/>
//       </div>
//       <button onClick={() =>  setBudgetId(budget.id)}>Add expense</button>
//     </div>
//   ))
// ) : (
//   <p>No budgets available</p>
// )}
//   </div>

//   {showInput && <Modal handleCancel={() => handleCancel()} />}
// </div>
//     </div>
//   )
// }

// export default CreateBudget


// import React, { useState } from 'react';
// import '../superCSSFolder/ExpenseModal.css'
// import axios from 'axios';
// import { CirclesWithBar } from 'react-loader-spinner';


// const ExpenseModal = ({ isOpen, onClose, budgetId }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   console.log(budgetId)

//   const [newExpense, setNewExpense] = useState({
//       category: '',
//       amount: 0,
//       description: '',
//       budgetId
//   });
//   console.log(newExpense)


//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewExpense({ ...newExpense, [name]: value });
//   };
 
//   const url = `https://finsworthpro.onrender.com/api/create-expenses/${budgetId}`;
    

//   const handleSubmitExpenses = async (event) => {
//     event.preventDefault();
//     console.log(newExpense)

//     setIsLoading(true)
//     try {
//       const response = await axios.post(url, newExpense);
//       setNewExpense([...expenses, response.data]);
//       setNewExpense({
//         category: '',
//         amount: 0,
//         description: '',
//         budgetId
//       });
//       console.log(response.data)
  
//     } catch (error) {
//       console.error('Error adding expense:', error);
//     }
//     finally{
//       setIsLoading(false)

//     }
   
//   };

//   return (
//     <div className={`modal1 ${isOpen ? 'open' : ''}`}>
//       <div className="modal1-content">
//         <span className="close1" onClick={onClose}>&times;</span>
//         <h2>Add Expense</h2>
//         <form onSubmit={handleSubmitExpenses}>
//           <input
//             type="text"
//             name="description"
//             value={newExpense.description}
//             onChange={handleInputChange}
//             placeholder="Description"
//             required
//           />
//           <input
//             type="text"
//             name="amount"
//             value={newExpense.amount}
//             onChange={handleInputChange}
//             placeholder="Amount"
//             required
//           />
      
//           <input
//             name="category"
//             value={newExpense.category}
//             onChange={handleInputChange}
//             required
//           />
//           <button type="submit">
//           {isLoading ?
//                 <CirclesWithBar
//                   height="30"
//                   width="30"
//                   color="#219EBC"
//                   outerCircleColor="#FB8500"
//                   innerCircleColor="#219EBC"
//                   barColor="#219EBC"
//                   ariaLabel="circles-with-bar-loading"
//                   wrapperStyle={{}}
//                   wrapperClass=""
//                   visible={true}
//                 /> :
//                 "Add Expenses"
//               }
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ExpenseModal;
