import React, { useEffect } from 'react'
import '../CSS_Folder/Heroes.css'
import { useNavigate } from 'react-router-dom'
import 'animate.css'
import AOS from "aos"
import 'aos/dist/aos.css';
import { GrSecure } from "react-icons/gr";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { BiWallet } from "react-icons/bi";



const Heroes = () => {
  const navigate = useNavigate()
  const loginPage =() =>{
  navigate('/login')
}

useEffect(() =>{
    AOS.init({duration:1000})
  },[]);

  return (
  <div className="herobodywrapper" id='heroo'>
  <div className="heropagewrapper" data-aos="fade-down">
      <div className="contenthold" data-aos="fade-right">
      <svg>
		<text x="35%" y="50%" dy=".35em" text-anchor="middle">
		    Track Your Expenses 
		</text>
		<text x="25%" y="90%" dy=".35em" text-anchor="middle">
		    To Save Money
		</text>
	    </svg>
          <p>Money Management made easy</p>
          <button className='getStarted' onClick={loginPage}>Get Started</button>
      </div>
  </div>
  <div className="featureswrapper">
      <div className="featurescontenthold" data-aos="fade-right">
          <div className="featuresname"><h1> <span>FINSWORTH</span> FEATURES</h1></div>
          <div className="cardholder">
              <div className="card" data-aos="fade-down">
                  <div className="imghold">
                      <div className="img">
                      {/* <img src="./S.png.jpg" alt=""/> */}
                         <GrSecure className='Icons'/>
                      </div>
                  </div>
                  <div className="name">
                      <h3>SECURE</h3>
                
                      <p>Your data is always safe <br />wherever your are and what <br />ever device you are using</p>
                  </div>
              </div>
              <div className="card" data-aos="fade-down">
              <div className="imghold">
                      <div className="img">
                      <MdOutlineAccountBalanceWallet className='Icons'/>
                      </div>
                  </div>
                  <div className="name">
                      <h3>PAINLESS BUDGET</h3>
                      <p>It takes seconds to record <br />daily transactions. Put them <br />into clear visualized <br />categories such as expenses</p>
                  </div>
              </div>
              <div className="card" data-aos="fade-down">
              <div className="imghold">
                      <div className="img">
                        <CiMobile2 className='Icons'/>
                      </div>
                  </div>
                  <div className="name">
                      <h3>MOBILE ACCESS</h3>
                      <p>Safely navigate through <br />various devices on the go <br />and in real time</p>
                  </div>
              </div>
              <div className="card" data-aos="fade-down">
              <div className="imghold">
                      <div className="img">
                        <BiWallet className='Icons'/>
                      </div>
                  </div>
                  <div className="name">
                      <h3>EXPENSE TRACKING</h3>
                      <p>Real-time expense tracking <br />app  that allow financial <br />institutes to monitor their <br />expenses as it occurs</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
 
  
  )
}

export default Heroes
