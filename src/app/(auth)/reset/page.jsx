"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BASE_URL_API } from "@/constant/BASE_URL_API";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ResetPasswordForm = ({ accessToken }) => {
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BASE_URL_API}/api/v1/reset-password`,
        {
          newPassword,
          accessToken,
        }
      );

      alert(response.data.message);
      router.push("/login");
    } catch (error) {
      alert(`Error: ${error.response.data.message}`);
    }
  };

  return (
    <>
      <div className=" mt-40">
        <h1 className="text-bold text-3xl text-center">Reset Pasword</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full mx-auto max-w-sm items-center mt-5 gap-1.5">
            <label className="text-sm">New Password</label>
            <Input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mt-5 mx-auto text-center max-w-sm gap-1.5">
            <Button className="w-96" type="submit">
              Reset Password
            </Button>
            
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPasswordForm;
