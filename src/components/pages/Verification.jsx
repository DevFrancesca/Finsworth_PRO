import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import GL from '../images/goldLogo.png';
import '../pagesCSS/Verification.css';
import { CirclesWithBar } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { UserToken } from '../../features/Slice';
import localStorage from 'redux-persist/es/storage';

const Verification = () => {
  const navigate = useNavigate();
  

  const homePage = () => {
    navigate('/');
  };

  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [isLoading, setIsLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState('');
  const [countdown, setCountdown] = useState(300);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userInput, setUserInput] = useState(Array(4).fill(''));

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
    const newInput = [...userInput];
    newInput[index] = value;
    setUserInput(newInput);
  };

  const handleVerification = async (userInput, UserToken) => {
    setIsLoading(true);
    // console.log( {userInput})

    try {
      const response = await axios.post(
        `https://finsworthpro.onrender.com/api/verify/${UserToken}`,
        {userInput}
      );
      if (response.status === 200) {
        // Dispatch(UserToken(response.data.token));

        Swal.fire({
          title: 'Account verified Successfully!',
          text: `${response.data.message}`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '',
          allowOutsideClick: false,
        });

        navigate('/login');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Verification failed!',
          color: 'red'
        });
        setVerificationResult('Error verifying user input.');
      }
    } catch (error) {
      console.error('Error verifying user input:', error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to verify user input!',
        color: 'red'
      });
      setVerificationResult('Error verifying user input.');
    }
    finally {
      setIsLoading(false);
    }
  };
  
  const handleVerifyButtonClick = async () => {
    try {
      await handleVerification(userInput.join(''), data?.payload);
    } catch (error) {
      console.error('Error verifying user input:', error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to verify user input!',
        color: 'red'
      });
      setVerificationResult('Error verifying user input.');
    }
  };

  const fetchToken = async () => {
    try {
      const response = await axios.post('https://finsworthpro.onrender.com/api/resendOtp', {
        headers: {
          Authorization: `Bearer ${UserToken}`,
          'Content-Type': 'application/json'
        }
      });
      const fetchedToken = response.data.token;
      setToken(fetchedToken);
    } catch (error) {
      console.error('Error fetching token:', error.message);
    }
  };
  // useEffect(() => {

  // }, []);

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
            <p>Didn't receive an OTP? <span onClick={() => fetchToken()}>RESEND</span></p>
            <button onClick={handleVerifyButtonClick}>
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

