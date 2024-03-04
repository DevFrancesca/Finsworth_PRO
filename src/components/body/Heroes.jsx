import React from 'react'
import '../CSS_Folder/Heroes.css'
import { useNavigate } from 'react-router-dom'
import 'animate.css'

const Heroes = () => {
  const navigate = useNavigate()
  const loginPage =() =>{
  navigate('/login')
}
  return (
  <div className="herobodywrapper" id='heroo'>
  <div className="heropagewrapper">
      <div className="contenthold">
          <h1>Track Your <br />Expenses To Save Money</h1>
          <p>Money Management made easy</p>
          <button className='getStarted' onClick={loginPage}>Get Started</button>
      </div>
  </div>
  <div className="featureswrapper">
      <div className="featurescontenthold">
          <div className="featuresname"><h1>FEATURES</h1></div>
          <div className="cardholder">
              <div className="card">
                  <div className="imghold">
                      <div className="img">
                      <img src="./S.png.jpg" alt=""/>
                      </div>
                  </div>
                  <div className="name">
                      <h3>SECURE</h3>
                
                      <p>Your data is always safe <br />wherever your are and what <br />ever device you are using</p>
                  </div>
              </div>
              <div className="card">
              <div className="imghold">
                      <div className="img">
                      <img src="./U.png.jpg" alt=""/>
                      </div>
                  </div>
                  <div className="name">
                      <h3>PAINLESS BUDGET</h3>
                      <p>It takes seconds to record <br />daily transactions. Put them <br />into clear visualized <br />categories such as expenses</p>
                  </div>
              </div>
              <div className="card">
              <div className="imghold">
                      <div className="img">
                        <img src="./G.png.jpg" alt=""/>
                      </div>
                  </div>
                  <div className="name">
                      <h3>MOBILE ACCESS</h3>
                      <p>Safely navigate through <br />various devices on the go <br />and in real time</p>
                  </div>
              </div>
              <div className="card">
              <div className="imghold">
                      <div className="img">
                        <img src="./H.png.jpg" alt=""/>
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
