// import React, { useState } from "react";

// export default function AmazonLogin() {
//   const [input, setInput] = useState("");

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#fff",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         paddingTop: "40px",
//         fontFamily: "Arial",
//       }}
//     >
//       {/* Logo */}
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
//         alt="Amazon"
//         style={{ width: "110px", marginBottom: "20px" }}
//       />

//       {/* Login Box */}
//       <div
//         style={{
//           width: "350px",
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           padding: "25px",
//         }}
//       >
//         <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
//           Sign in or create account
//         </h2>

//         <label style={{ fontSize: "14px", fontWeight: "bold" }}>
//           Enter mobile number or email
//         </label>

//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           style={{
//             width: "100%",
//             height: "35px",
//             marginTop: "7px",
//             marginBottom: "15px",
//             paddingLeft: "10px",
//             borderRadius: "4px",
//             border: "1px solid #888",
//             fontSize: "14px",
//           }}
//         />

//         <button
//           style={{
//             width: "100%",
//             height: "38px",
//             background: "#FFD814",
//             border: "1px solid #FCD200",
//             borderRadius: "8px",
//             fontSize: "15px",
//             cursor: "pointer",
//           }}
//         >
//           Continue
//         </button>

//         <p style={{ fontSize: "12px", marginTop: "15px", lineHeight: "1.4" }}>
//           By continuing, you agree to Amazon's{" "}
//           <a href="#" style={{ color: "#0066c0" }}>
//             Conditions of Use
//           </a>{" "}
//           and{" "}
//           <a href="#" style={{ color: "#0066c0" }}>
//             Privacy Notice
//           </a>
//           .
//         </p>

//         <hr style={{ margin: "20px 0" }} />

//         <div>
//           <p style={{ fontSize: "14px", fontWeight: "bold" }}>Buying for work?</p>
//           <a href="#" style={{ fontSize: "14px", color: "#0066c0" }}>
//             Create a free business account
//           </a>
//         </div>
//       </div>

//       {/* Footer Links */}
//       <div style={{ marginTop: "35px", textAlign: "center" }}>
//         <a href="#" style={{ fontSize: "12px", margin: "0 10px", color: "#0066c0" }}>
//           Conditions of Use
//         </a>
//         <a href="#" style={{ fontSize: "12px", margin: "0 10px", color: "#0066c0" }}>
//           Privacy Notice
//         </a>
//         <a href="#" style={{ fontSize: "12px", margin: "0 10px", color: "#0066c0" }}>
//           Help
//         </a>

//         <p style={{ marginTop: "10px", fontSize: "12px", color: "#555" }}>
//           © 1996–2025, Amazon.com, Inc. or its affiliates
//         </p>
//       </div>
//     </div>
//   );
// }
