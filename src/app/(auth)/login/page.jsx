'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://hono-on-vercel-pied.vercel.app/api/v1/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        alert('Login successful!');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Login failed';
      alert(`Error: ${errorMessage}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
