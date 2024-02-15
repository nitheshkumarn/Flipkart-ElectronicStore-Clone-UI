// VerifyOTP.jsx
import React, { useState } from 'react';

const VerifyOTP = () => {
  const [enteredOTP, setEnteredOTP] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
   
    console.log('Entered OTP:', enteredOTP);
    
  };

  return 
    <div className="max-w-md mx-auto m-4 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
      <form onSubmit={handleVerify}>
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

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOTP;
