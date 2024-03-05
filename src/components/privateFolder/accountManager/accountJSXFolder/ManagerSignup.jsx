import React from 'react'

const ManagerSignup = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form >
        <div className="form-group">
          <label htmlFor="fullNames">Full Name</label>
          <input type="text" id="fullNames" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password"/>
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName"/>
        </div>
        <div className="form-group">
          <label htmlFor="companyCode">Company Code</label>
          <input type="text" id="companyCode"/>
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default ManagerSignup
