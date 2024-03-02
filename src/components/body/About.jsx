import React from 'react'
import '../CSS_Folder/About.css'

const About = () => {
  return (
    <div className="Aboutwrapper">
      <div className="Aboutcontenthold">
          <div className="Aboutname">
            <h1>ABOUT </h1>
            <p>This expense tracker application is dedicated in helping you manage your business.</p>
          </div>
          <div className='Aboutcardholder'>
             <div className='ABoutLeft'>
      <h1>Very simple, intuitive <br /> and straight forward</h1>
      <p>This expense tracker & manager is a simple, intuitive and straight  forward web application that helps and assists you to track all your expenses, manage your budgets/costs and organize your <br />spending, enabling you to make savings and order in your  business. <br />Dedicated in helping you manage your business, easily, efficiently  and with no complications</p>
    </div>
    <div className='ABoutRight'>
      <div className='ABoutRightCon'>
        <div className='ABoutRightConLeft'>
          <img src="./src/components/images/good.png" alt="" />
        </div>
        <div className='ABoutRightConRight'>
          <h3>SECURE</h3>
        </div>

      </div>
      <div className='ABoutRightCon'>
        <div className='ABoutRightConLeft'>
          <img src="./src/components/images/good.png" alt="" />
        </div>
        <div className='ABoutRightConRight'>
          <h3>SWIFT BUDGETING</h3>
        </div>

      </div>
      <div className='ABoutRightCon'>
        <div className='ABoutRightConLeft'>
          <img src="./src/components/images/good.png" alt="" />
        </div>
        <div className='ABoutRightConRight'>
          <h3>MOBILE ACCESSIBILITY</h3>
        </div>

      </div>
      <div className='ABoutRightCon'>
        <div className='ABoutRightConLeft'>
          <img src="./src/components/images/good.png" alt="" />
        </div>
        <div className='ABoutRightConRight'>
          <h3>EXPENSE TRACKING</h3>
        </div>

          </div>
          </div>
          </div>
          </div>
          </div>
   
  )
}

export default About
