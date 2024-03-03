import React from 'react'
import '../CSS_Folder/Subscribe.css'
import { useNavigate } from 'react-router-dom'

const Subscribe = () => {
    const navigate = useNavigate()
  const loginPage =() =>{
  navigate('/login')
  }
  return (
    <div className='SubscribePage'>
        <div className="SubscribePageWrapper">
            <div className="SubscribePageWrapperUp">
                <h1>SUBSCRIPTION PLAN</h1>
                <p>Choose Your Subscription Plan</p>

            </div>
            <div className="SubscribePageWrapperDown">
                <div className='SubscribeCon'>
                    <div className='SubscribeConUp'>
                        <h1>N0</h1>
                        <p>Free</p>
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
                        <p>Monthly</p>
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
                        <p>Monthly</p>
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
