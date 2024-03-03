import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import GL from '../images/goldLogo.png';
import '../pagesCSS/OtpPage.css';
import { CirclesWithBar } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { UserToken } from '../../features/Slice';

const Verification = () => {
  const navigate = useNavigate();
  const homePage = () => {
    navigate('/');
  };

  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [isLoading, setIsLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState('');
  const [countdown, setCountdown] = useState(300);
  const [token, setToken] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const handleInputChange = (index, value) => {
    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleVerification = async () => {
    setIsLoading(true);

    try {
      const otp = inputRefs.map(ref => ref.current.value).join(`https://finsworthpro.onrender.com/api/verify/${UserToken}`);

      const Dispatch = useDispatch()

      console.log(otp)

      const response = await axios.post(url, {otp},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      Dispatch(UserToken(response.data.token))

      setIsLoading(false);
      Swal.fire({
        title: 'Account verified Successfully!',
        text: `${response.data.message}`,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '',
        allowOutsideClick: false,
      });

      if (response.data.verified) {
        setVerificationResult('Account verified successfully.');
      } else {
        setVerificationResult('Account verification failed.');
      }

      navigate('/login')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: error.response.message,
        text: 'Account verification failed!',
        color: 'red'
      });
      console.error('Error verifying account:', error.message);
      setVerificationResult('Error verifying account.');
    }
  };

  useEffect(() => {
    
    const fetchToken = async () => {
      try {
        // Fetching token from your backend or local storage
        const response = await axios.get('https://finsworthpro.onrender.com/api/resendOtp');
        const fetchedToken = response.data.token;
        setToken(fetchedToken);
      } catch (error) {
        console.error('Error fetching token:', error.message);
      }
    };

    fetchToken();
  }, []);

  return (
    <article className="otpBody">
      <section className="otpBodyLeft">
        <img src={GL} alt="logo" onClick={homePage} />
      </section>
      <section className="otpBodyMiddle">
        <div className="otpCard">
          <div className="otpCardUp">
            <h3>Sign Up</h3>
            <h5>Verify your account</h5>
            <p>We've sent a One Time Password(OTP) to <br />**********@gmail.com</p>
          </div>
          <div className="otpCardDown">
            <h6>{formatTime(countdown)}</h6>

            <div className="otpCardInputs">
              {inputRefs.map((ref, index) => (
                <input
                  key={index}
                  ref={ref}
                  maxLength={1}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              ))}
            </div>
            <p>Didn't receive an OTP? <span>RESEND</span></p>
            <button onClick={handleVerification}>
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
                "Verify"
              }
            </button>
            <span style={{ color: "red" }}>{verificationResult}</span>
          </div>
        </div>
      </section>
      <section className="otpBodyRight"></section>
    </article>
  );
};

export default Verification;
