// Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const[email,setEmail] = useState("");
  const[password, setPassword] = useState("");

  const respond = (event)=>{
    event.preventDefault();
    console.log(email);
    console.log(password);
    console.log(role);
}

  return (
    <div className="max-w-md mx-auto m-4 p-6 bg-white rounded-md shadow-md">
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

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Login
        </button>
   
    </div>
  )
}


export default Login;
