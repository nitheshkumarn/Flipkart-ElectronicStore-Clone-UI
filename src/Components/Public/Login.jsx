
import axios from 'axios';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

const Login = () => {
  const[email,setEmail] = useState("");
  const[password, setPassword] = useState("");
  const{auth,setAuth} = useAuth();

const handleLogin = async (event) =>{
  event.preventDefault();
// fire request to the server using axios
const URL = "http://localhost:8080/api/v1/login";
const body = {
email : email,
password : password
}

const header = {
headers: {
  "Content-Type": "application/json"
},
withCredentials : true
}
try{
const response = await axios.post(URL,body,header);
if(response.status ===200 ){
  console.log(response);
  const user = {
    userId:response.data.data.userId,
    username:response.data.data.username,
    role:response.data.data.role,
    isAuthenticated:response.data.data.authenticated,
    accessExpiration:response.data.data.accessExpiration,
    refreshExpiration:response.data.data.refreshExpiration,
  }
  localStorage.setItem("user",JSON.stringify(user));
  setAuth(user)
  //  ("/verify-otp")
}
console.log(response);
}
catch(error){
console.log(error);
}
};

  return (
    <div>
    <div className="max-w-md mx-auto m-9 p-9 bg-white rounded-md shadow-md">
        <div>
            <img src="" alt="" />
        </div>
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event)=> setPassword(event.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <button onClick={handleLogin} type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Login
        </button>
   
    </div>
    </div>
  )
}


export default Login;
