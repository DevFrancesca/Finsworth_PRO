import './Dropdown.css'
import { useNavigate } from 'react-router-dom'



const Dropdown =()=>{
    const navigate = useNavigate()

    const loginPage =() =>{
        navigate('/login')
      }
      const signupPage =() =>{
        navigate('/signup')
      }
    const ContactPage =() =>{
        navigate('/contactus')
      }
      


    return(
        <div className='Dropdown'>
        <h3>Home</h3>
        <h3>About Us</h3>
        <h3>Team</h3>
        <h3 onClick={ContactPage}>Contact Us</h3>
        <button className='Droplogin' onClick={loginPage}>Login</button>
        <button className='Dropsignup' onClick={signupPage}>Sign UP</button>
        </div>

    )
}

export default Dropdown