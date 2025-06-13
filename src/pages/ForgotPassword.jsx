import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-500 transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Reset Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input type="email" placeholder="Email" className="input-style" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button className="btn-style bg-blue-500 hover:bg-blue-600">Send Reset Email</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
