
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = ({role}) => {
    
    const[email,setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegistration = async (event) =>{
        event.preventDefault();
// fire request to the server using axios
const URL = "http://localhost:8080/api/v1/users/register";
const body = {
    email: email,
    password: password,
    userRole: role,
};

const header = {
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials : true
}
try{
const response = await axios.post(URL,body,header);
console.log(email);
console.log(response);
if(response.status == 202){
    navigate("/verify-otp")
    const emailsession = sessionStorage.setItem("email",email);
}

}
catch(error){
console.log(error);
}

    };
  return (
    <div className="max-w-md mx-auto m-4 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      
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
        <button onClick={handleRegistration} type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Register
        </button>
 
    </div>
  )
}

export default Register;
