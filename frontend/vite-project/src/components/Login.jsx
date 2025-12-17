import { Link, useLocation } from 'react-router-dom'
import {  useState } from 'react'
import './Login.css'
export default  function Login(){
    const location=useLocation()
    const data = location?.state?.data?.data
    const emailPhone  = data.email || data.phoneNumber
    const _id=data._id
    console.log("dataaaaa",data)
    const [password,setUpdatedPassword]=useState('')
    // useEffect(()=>{
    //     console.log("Location",emailPhone)
    // },[emailPhone])
    
    const handleSigin=async()=>{
        const payload={_id,email:data.email,phoneNumber:data.phoneNumber,password,login:true}
        const res=await fetch('http://localhost:8000/amazonClone/login/mobileEmail',{
            headers:{'Content-Type':'application/json'},
            method:'POST',
            body:JSON.stringify(payload)
        })
        const responseData=await res.json()
        console.log("resssssssssssssssssss",responseData)
        if(responseData.error){
            alert(responseData.message)
        }


    }
    return (
            <div className='div-login'>

            <label className='login-title'>Sign in</label>
            <label className='email-phone'>{emailPhone} <Link to='/'>Change</Link></label>
            <label style={{fontWeight:'bold'}}>Password</label>
            <label className='forgot-password' ><a href=''>Forgot password?</a></label>
            <input type='text'
            onChange={(e)=>{setUpdatedPassword(e.target.value)}} style={{marginBottom:'25px',display:'block',width:'90%' ,height:'30px',borderRadius:'03px',boxShadow:' 0 2px 8px rgba(0, 0, 0, 0.04)',border:'1px solid #7b747485'}}></input>
            <button className='button' onClick={handleSigin}>Sign In</button>
            <div className='divider' ><div></div><h5>or</h5><div ></div></div>
            <button className='passkey-button'>Sign in with a passkey</button>
            {/* <div style={{border:'1px solid'}}><hr>or</hr></div> */}
        </div>
    )
}