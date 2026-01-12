import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Login.css'


export default function Signup(){
    const navigate =useNavigate()
    const location=useLocation()
   // console.log("location",location.state?.updatedValue)
    const emailPhone=location.state?.updatedValue
    return (  
        <div className='div-login'>
            <span className='login-title' style={{fontSize:'22px',display:'block'}}>Looks like you are new to Amazon</span>
            <span className='email-phone'>{emailPhone} <Link to='/'>Change</Link> </span>
            <span className='email-phone'>Let's create an account using your mobile number</span>
            <button className='button' onClick={()=>navigate('/register')}>Proceed to create an account</button>
            <span className='email-phone'> Already a customer?</span>
            <span><Link to='/'>Sign in with another email or mobile</Link></span>
        </div> 
          
    )
}