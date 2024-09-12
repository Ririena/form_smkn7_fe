"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BASE_URL_API } from "@/constant/BASE_URL_API";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPasswordForm;
