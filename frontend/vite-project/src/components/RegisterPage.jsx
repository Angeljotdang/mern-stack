import { useState } from "react";
import "./Login.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useLocation } from "react-router-dom";
// import PuzzleCaptcha from "./PuzzleCaptcha";

export default function RegisterPage() {
  const [phoneNumber, setPhone] = useState("");
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const location=useLocation()
  const handleRegister=async()=>{
    console.log("locationnnn regsiter",location)
    const payload={action:"REGISTER",name,phoneNumber,password,email:location?.state?.email}
    const res=await fetch("http://localhost:8000/amazonClone/login/mobileEmail",{
      "headers":{'Content-Type':'application/json'},
      body:JSON.stringify(payload),
      method:"POST"
    })
    const data=await res.json()
        //console.log("locationnnn",location)

    console.log("resss data",data)
    if(data.error) alert(data.message)
    else console.log("regsiter data",data)



  }
//   const [captchaSolved, setCaptchaSolved] = useState(false);

  return (
    <div className="div-login">
      <span className="login-title">Create Account</span>

      <span className="email-phone" style={{ fontWeight: "bold" }}>
        Mobile number
      </span>

      <div style={{ display: "flex", alignItems: "center" }}>
        <PhoneInput
          country="in"
          value={phoneNumber}
         onChange={(value)=> {
          console.log("phoneNumber",value)
          setPhone(value)}}
          containerStyle={{ display: "inline-flex", width: "auto" }}
          inputStyle={{ width: "200px" }}
        />

       
      </div>

      <span className="email-phone" style={{ fontWeight: "bold" }}>
        Your name
      </span>
      <input
        placeholder="First and last name"
        className="full-input"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <span className="bold-font">
        Password (at least 6 characters)
      </span>
      <input className="full-input" value={password} onChange={(e)=>setPassword(e.target.value)}/>

      <div className="parent">
        <span className="icon">i</span>
      </div>

      <span
        style={{
          marginLeft: "25px",
          fontSize: "12px",
          display: "block",
          marginBottom: "10px"
        }}
      >
        Passwords must be at least 6 characters.
      </span>

      <span
        style={{
          fontSize: "13px",
          marginBottom: "20px",
          display: "block"
        }}
      >
        To verify your number, we will send you a text message with a temporary
        code. Message and data rates may apply.
      </span>

      {/* 🧩 Puzzle CAPTCHA */}
      {/* <PuzzleCaptcha onSolved={() => setCaptchaSolved(true)} /> */}

      <button
        className="button"
        style={{ marginTop: "20px", width: "100%" }}
        onClick={handleRegister}
        // disabled={!captchaSolved}
      >
        Register
      </button>

      <hr />

      <span style={{ fontWeight: "bold", display: "block" }}>
        Already a customer?
      </span>

      <span style={{ display: "block", marginBottom: "30px" }}>
        <Link to="/">Sign in instead</Link>
      </span>

      <span style={{ display: "block" }}>
        By creating an account or logging in, you agree to Amazon’s Conditions of
        Use and Privacy Policy.
      </span>
    </div>
  );
}
