
import axios from 'axios';
import React, { useState } from 'react';


const VerifyOTP = () => {
  const [enteredOTP, setEnteredOTP] = useState('');
 

  const respond = (event)=>{
    event.preventDefault();
    console.log(enteredOTP);
}

const handleRegistration = async (event) =>{
    event.preventDefault();
// fire request to the server using axios
const URL = "http://localhost:8080/api/v1/verify-otp";
const body = {  
    email : sessionStorage.getItem("email"),
    otp : enteredOTP,
};

const header = {
headers: {
    "Content-Type": "application/json"
},
withCredentials : true
}
try{
const response = await axios.post(URL,body,header);
console.log(response);
console.log(email);
sessionStorage.removeItem("email");
console.log(email);
}
catch(error){
console.log(error);
}
};

  return (
    <div className="max-w-md mx-auto m-4 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
     
        <div className="mb-4">
          <label htmlFor="otp" className="block text-sm font-medium text-gray-600">
            Enter OTP
          </label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={enteredOTP}
            onChange={(e) => setEnteredOTP(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <button onClick={handleRegistration} type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Verify OTP
        </button>
     
    </div>
  )
}

export default VerifyOTP;
