import React, { useState } from 'react'
import '../superCSSFolder/CreateUser.css'
import { CirclesWithBar } from 'react-loader-spinner'
import axios from 'axios';

const CreateUser = (isOpen, onClose,) => {
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')


  const getToken = localStorage.getItem('token');
  const handleRole =(e)=>{

    setRole(e.target.value)
  }
  const handleEmail =(e)=>{
    setEmail(e.target.value)
  }

  const url = 'https://finsworthpro.onrender.com/api/invite'

  const handleInvite  = async (e)=>{
    setIsLoading(true)
    const inviteData = {invitedUserRole:role, invitedEmail :email}
    e.preventDefault()
    try{
      const response = await axios.post(url, inviteData,{
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      setIsLoading(false)

      console.log(response)
      }
     catch(error){
    setIsLoading(false)

      console.log(error)
     }
      
  }

  return (
    <div className="userModal">
      <div className="user-content">
       
        <h2>Create User</h2>
        <form onSubmit={(e)=> handleInvite(e)}>

         <div className="formContainer">
         <div className="form-user">
            <label htmlFor="amount">Email</label>
            <input type="email" placeholder='agbanzofrancesca@gmail.com' onChange={handleEmail}/>
          </div>

          <div className="form-user">
            <label htmlFor="budgetType">Role</label>
            <input type="text" placeholder='e.g Account Officer'onChange={handleRole}/>
          </div>
         </div>
          <div className="btns">
            <button type="button" className="cancel">Cancel</button>
            <button type="submit" className="save">
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
                "Invite"
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
