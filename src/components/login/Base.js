// import React from "react";
// import "./fireStyle.css";
// import Button from "../button/Button";
// import Input from "../input/Input";
// import { useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth } from "./firebase.js";

// export function Base() {
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [user, setUser] = useState({});

//   onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//   });

//   const register = async () => {
//     try {
//       const user = await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword
//       );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const login = async () => {
//     try {
//       const user = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword
//       );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const logout = async () => {
//     await signOut(auth);
//   };

//   return (
//     <>
//       <div className="login-wrap">
//         <div className="base">
//           <h3 className="titles"> Registrar Usuario </h3>
//           <Input
//             placeholder="Email..."
//             onChange={(event) => {
//               setRegisterEmail(event.target.value);
//             }}
//           />
//           <Input
//             placeholder="Password..."
//             onChange={(event) => {
//               setRegisterPassword(event.target.value);
//             }}
//           />
//           <br />
//           <Button onClick={register} className="small">
//             Crear Usuario
//           </Button>
//         </div>

//         <div>
//           <h3 className="titles">Entrar</h3>
//           <Input
//             placeholder="Email..."
//             onChange={(event) => {
//               setLoginEmail(event.target.value);
//             }}
//           />
//           <Input
//             placeholder="Password..."
//             onChange={(event) => {
//               setLoginPassword(event.target.value);
//             }}
//           />
//           <br />
//           <Button onClick={login} className="small">
//             Login
//           </Button>
//         </div>

//         <h4 className="titles">Usuario Actual:</h4>
//         {user?.email}

//         <Button onClick={logout} className="small">
//           Salir
//         </Button>
//       </div>
//     </>
//   );
// }
// export default Base;
