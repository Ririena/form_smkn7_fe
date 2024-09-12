'use client';

import React from 'react';
import axios from 'axios';
import { BASE_URL_API } from '@/constant/BASE_URL_API';
const LogoutButton = () => {
  const handleLogout = async () => {
    try {

      const response = await axios.post(`${BASE_URL_API}/api/v1/logout`, {}, {
        headers: {
            'Content-Type': 'application/json',
          },
        withCredentials: true, 
      });

      if (response.status === 200) {
        alert('Logout successful!');

      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
