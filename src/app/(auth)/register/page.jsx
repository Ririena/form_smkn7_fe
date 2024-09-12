"use client";

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");

  const onSubmit = async (data) => {
    if (data.password !== data.passwordConfirmation) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://hono-on-vercel-pied.vercel.app/api/v1/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status !== 200)
        throw new Error(response.data.error || "Registration failed");

      alert("Registration successful!");
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className=" mt-20">
        <h1 className="text-bold text-3xl text-center">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full mx-auto max-w-sm items-center gap-1.5">
            <label>Email</label>
            <Input
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="grid w-full mx-auto max-w-sm items-center gap-1.5">
            <label>Password</label>
            <Input
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="grid w-full mx-auto max-w-sm items-center gap-1.5">
            <label>Confirm Password</label>
            <Input
              type="password"
              {...register("passwordConfirmation", {
                required: "Please confirm your password",
              })}
            />
            {errors.passwordConfirmation && (
              <p>{errors.passwordConfirmation.message}</p>
            )}
          </div>
          <div className="mt-5 mx-auto text-center max-w-sm gap-1.5">
          <Button className="w-96" type="submit">Register</Button>
          </div>
          <p className="mt-2 text-center text-slate-400"><a href="#" className="text-blue-500">have acount?</a> or cotinue with</p>
          <div className="flex justify-center mt-2">
            <FcGoogle size="2.5em " className="mr-5 cursor-pointer"/>
            <FaFacebook size="2.5em" className="cursor-pointer text-blue-600"/>
          </div>
        </form>
      </div>
      
    </>
  );
};

export default RegisterForm;
