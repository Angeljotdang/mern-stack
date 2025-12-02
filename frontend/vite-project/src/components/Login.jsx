import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './Login.css'
export default  function Login(){
    const location=useLocation()
    const data = location?.state?.data?.data
    const emailPhone  = data.email || data.phoneNumber
    useEffect(()=>{
        console.log("Location",emailPhone)
    },[emailPhone])
    return (
            <div className='div-login'>

            <label className='login-title'>Sign in</label>
            <label className='email-phone'>{emailPhone} <a href=''>Change</a></label>
            <label style={{fontWeight:'bold'}}>Password</label>
            <label className='forgot-password' ><a href=''>Forgot Password?</a></label>
            <input type='text' style={{marginBottom:'25px',display:'block',width:'90%' ,height:'30px',borderRadius:'03px',boxShadow:' 0 2px 8px rgba(0, 0, 0, 0.04)',border:'1px solid #7b747485'}}></input>
            <button className='button'>Sign In</button>
            <div className='divider' ><div></div><h5>or</h5><div ></div></div>
            <button className='passkey-button'>Sign in with a passkey</button>
            {/* <div style={{border:'1px solid'}}><hr>or</hr></div> */}
        </div>
    )
}