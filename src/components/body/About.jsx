import React, { useEffect } from 'react'
import '../CSS_Folder/About.css'
import AOS from "aos"
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() =>{
    AOS.init({duration:1000})
  },[]);
  return (
              <div className='AboutUsPage' id="Abttt">
                <div className='AboutUsWrapper' data-aos="fade-down">
                  <div className="Aboutname">
                    <h1>ABOUT <span>US</span> </h1>
                    <p>This expense management services is dedicated in helping you rein in costs while making management of your business easier and less stressful.</p>
                  </div>
                  <div className="AboutCardHolder" data-aos="fade-down">
                    <div className="AboutLeft">
                      <div className='AboutTextLeft'>
                        <h1>Finsworth Expense Management</h1>
                        <p>Keeping a lid on costs requires holistic thinking and strategies across organizations. Finsworth is your trusted partner that can lead you to effective mobile-first strategies that will help you achieve your goals while staying within your budget.</p>
                      </div>
                    </div>
                    <div className="AboutLeft">
                      <div className='AboutImgLeft'>
                        <img src="./3.jpg.jpg" alt=""/> 
                      </div>
                    </div>
                    <div className="AboutLeft">
                      <div className='AboutImgLeft'>
                        <img src="./5.jpg.jpg" alt=""/>
              
                      </div>
                    </div>
                    <div className="AboutLeft">
                      <div className='AboutTextLeft'>
                        <h1>Untangle Expense Complexity</h1>
                        <p>When you partner with Finsworth, our expense <br />management services give you comprehensive <br /> visibility and control over your expenses.

Our mobile asset management software platform handles all the moving parts, including changing technologies, security, policies, compliance, budheting, expense management, etc. <br />Instead of manually managing all your mobile-related information—and possibly spending money where you could be saving it—our software automates mobility management and closes the gaps.</p>
                      </div>
                    </div>
                    {/* <div className="Aboutleft">
                    <div className='AboutTextLeft'></div>
                    </div>
                    <div className="AboutRight">
                    <div className='AboutImgLeft'></div>
                    </div>
                    <div className="AboutRight">
                    <div className='AboutImgLeft'></div>
                    </div> */}
                    
                  </div>
                </div>
              </div>
   
  )
}

export default About
