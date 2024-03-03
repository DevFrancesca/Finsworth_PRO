import React from 'react'
import '../pagesCSS/NewPassword.css'
import GL from '../images/goldLogo.png'
import { useNavigate } from 'react-router'



const NewPassword = () => {
  const navigate = useNavigate()
  const homePage =()=>{
    navigate('/')
  }
  const loginPage =()=>{
    navigate('/login')
  }
  const [password, setPassword] = useState("")

  return (
    <div className='newPasswordBody'>
       <section className="newPasswordLeft">
        <img src={GL} alt="logo" onClick={homePage}/>
      </section>

      <section className="newPasswordMiddle">
        <div className="newPasswordCard">
          <div className="newPasswordWrap">
            <h3>Create Password?</h3>
            <p>Your new password must be different from your previous<br/> password.</p>

            <div className="newPasswordInput">
              <label htmlFor="">Password</label>
              <input type="password" />
            </div>

            <button onClick={loginPage}>Reset Password</button>
          </div>
        </div>
      </section>

      <section className="newPasswordRight"></section>
    </div>
  )
}

export default NewPassword
