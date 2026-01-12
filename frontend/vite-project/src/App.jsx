//import Button from "./components/Button";
// import AmazonLogin from "./components/AmazonLogin";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Logo from "./components/Logo";
import LoginCard from "./components/LoginCard";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Register from "./components/RegisterPage"
function App() {
  return (
    <BrowserRouter>
     <div style={{background:'#fff'}} >
      <Logo/>
      {/* <LoginCard/> */}
      <Routes> 
        <Route path="/" element={<LoginCard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/register" element={<Register/>}/> */}
      </Routes>
    
    </div>
      </BrowserRouter>
  );
}

export default App;
