import './Dropdown.css'
import { useNavigate } from 'react-router-dom'



const Dropdown =()=>{
    const navigate = useNavigate()

    const ContactPage =() =>{
        navigate('/contactus')
      }
      


    return(
        <>
        <div className='Dropdown'>
        <h3>Home</h3>
        <h3>About Us</h3>
        <h3>FAQs</h3>
        <h3 onClick={ContactPage}>Contact Us</h3>
        <button className='login' onClick={loginPage}>Login</button>
        <button className='signup' onClick={signupPage}>Sign UP</button>
        </div>
        
        </>

    )
}




export default Dropdown