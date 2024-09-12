'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL_API } from '@/constant/BASE_URL_API';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL_API}/api/v1/request-password-reset`, { email });

      alert(response.data.message);
    } catch (error) {
      alert(`Error: ${error.response.data.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Request Password Reset</button>
    </form>
  );
};

export default ForgotPasswordForm;
