import React, { useEffect } from 'react'
import '../CSS_Folder/Subscribe.css'
import { useNavigate } from 'react-router-dom'
import AOS from "aos"
import 'aos/dist/aos.css';

const Subscribe = () => {
    const navigate = useNavigate()
  const loginPage =() =>{
  navigate('/login')
  }

  
  useEffect(() =>{
    AOS.init({duration:1000})
  },[]);

  return (
    <div className='SubscribePage'>
        <div className="SubscribePageWrapper" data-aos="fade-down">
            <div className="SubscribePageWrapperUp">
                <h1>SUBSCRIPTION <span>PLAN</span> </h1>

            </div>
            <div className="SubscribePageWrapperDown">
                <div className='SubscribeCon'>
                    <div className='SubscribeConUp'>
                        <h1>N0</h1>
                        <p>Free Plan</p>
                    </div>
                    <div className='SubscribeConDown'>
                    <p>. 30 days free trial</p>
                    <p>. Budgeting</p>
                    <p>. Expense Tracking</p>
                    <p>. Real time notification</p>
                    <p>. Unique Components</p>
                    <button className='Subscribebtn' onClick={loginPage} >Subscribe</button>
                        
                    </div>
                </div>
                <div className='SubscribeCon'>
                    <div className='SubscribeConUp'>
                        <h1>N9,000</h1>
                        <p>Monthly </p>
                    </div>
                    <div className='SubscribeConDown'>
                    <p>. 30 days free trial</p>
                    <p>. Budgeting</p>
                    <p>. Expense Tracking</p>
                    <p>. Real time notification</p>
                    <p>. Unique Components</p>
                    <button className='Subscribebtn' onClick={loginPage} >Subscribe</button>
                        
                    </div>
                </div>
                <div className='SubscribeCon'>
                    <div className='SubscribeConUp'>
                        <h1>N108,000</h1>
                        <p>Yearly Plan</p>
                    </div>
                    <div className='SubscribeConDown'>
                    <p>. 30 days free trial</p>
                    <p>. Budgeting</p>
                    <p>. Expense Tracking</p>
                    <p>. Real time notification</p>
                    <p>. Unique Components</p>
                    <button className='Subscribebtn' onClick={loginPage} >Subscribe</button>
                        
                    </div>
                </div>
                

            </div>


        </div>
      
    </div>
  )
}

export default Subscribe