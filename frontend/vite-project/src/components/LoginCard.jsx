import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginCard(){
const navigate=useNavigate()
    
const [updatedValue,setUpdatedValue] = useState('')
const isPhone=(value)=>/^[0-9]{10}$/.test(value)
const isEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const handleContinue =async ()=>{
    
    let email=''
    let phoneNumber=''
    if(isPhone(updatedValue)){
        phoneNumber=updatedValue
    }
    else if(isEmail(updatedValue)){
         email=updatedValue
    }
    else {
        alert('Enter a correct phone number or email id')
        return
    }
    const payload={email,phoneNumber}
    console.log("payload",payload)
    const res=await fetch('http://localhost:8000/amazonClone/login/mobileEmail',{
        headers:{'Content-Type':'application/json'},
        method:'POST',
        body:JSON.stringify(payload)
    })
    const data=await res.json()
    console.log("data",data)
    console.log("data.data && data.data.length>0",data.data )
    console.log("data length",Object.keys(data.data).length)
    if(data.data && Object.keys(data.data).length>0){
        navigate('/login',{state:{data}})
    }
    else{
        navigate('signup',{state:{data}})
    }
    
    // if(data){
        
    // }
    // .then((res)=>res.json()).then((data)=>console.log("API Response",data))
    // .catch((err)=>console.log(err))

    console.log("heyyy its me!! a continue button")
}
    return (
    <div style={{width:'300px',border:'1px solid #7b747485',padding:'25px',margin:'0 auto',borderRadius:'10px',boxShadow:' 0 2px 8px rgba(0, 0, 0, 0.04)'}}>
        <label style={{fontSize:'22px',display:'block',marginBottom:'15px'}}>Sign in or create account</label>
        <label style={{display:'block',fontWeight:'bold',fontSize:'15px',marginBottom:'5px'}}> Enter mobile number or email</label>
        <input type="text" value={updatedValue} onChange={(e)=>{
            console.log("eeeeeeeeeeeeeeeeee",e.target)
            setUpdatedValue(e.target.value)}} style={{display:'block',width:'90%',height:'30px',marginBottom:'10px'}}></input>
        <button onClick={handleContinue} style={{width:'93%',fontSize:'15px',padding:'10px',marginBottom:'10px',borderRadius:'10px',border:'0',background:'#ffce12'}}> Continue</button>
        <label style={{display:'block',fontSize:'13px', fontFamily:'arial, sans-serif'}}>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</label>
        <hr style={{border:'1px solid #e0e7e7ff',display:'block',marginTop:"15px",marginBottom:'10px'}}></hr>
        <label style={{fontWeight:'bold', fontSize:'15px',display:'block'}}>Buying for work?</label>
        <a href=''style={{display:'block',marginTop:'10px'}}>Create a free business account</a>
    </div>
)
}