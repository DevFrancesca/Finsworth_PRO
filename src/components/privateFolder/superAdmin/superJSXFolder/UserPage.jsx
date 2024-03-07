import React, { useState } from 'react'
import '../superCSSFolder/UserPage.css'
// import CreateUser from './CreateUser'

const UserPage = () => {
  const [createUser, setCreateUser] = useState(false);

  return (
    <div className='manageExpenseBody'>
      <div className="manageUp">
        <button>Add New User +</button>
      </div>

      {/* <div className="bottomNavLogo"></div> */}
      
      <div className="manageDown">
        <div className="manageDownWrap">

           <div className="userName">
            <h5>Email</h5>
            <p>agbanzofrancesca@gmail.com</p>
           </div>

            <div className="userName2">
              <h5>Name</h5>
              <p>Agbanzo Francesca</p>
            </div>

            <div className="userName2">
              <h5>Role</h5>
              <p>Account Manager</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage
