import React, { useState } from 'react'
import '../superCSSFolder/CreateUser.css'
import { CirclesWithBar } from 'react-loader-spinner'

const CreateUser = (isOpen, onClose,) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="userModal">
      <div className="user-content">
        {/* <span className="closeModal" onClick={onClose}>&times;</span> */}
        <h2>Create User</h2>
        <form>

         <div className="formContainer">
         <div className="form-user">
            <label htmlFor="amount">Email</label>
            <input type="email" placeholder='agbanzofrancesca@gmail.com'/>
          </div>

          <div className="form-user">
            <label htmlFor="budgetType">Role</label>
            <input type="text" placeholder='e.g Account Officer'/>
          </div>
         </div>
          <div className="btns">
            <button type="button" className="cancel">Cancel</button>
            <button type="button" className="save">
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
                "Save"
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
