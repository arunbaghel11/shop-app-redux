import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-yellow-500">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-500 transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input type="email" placeholder="Email" className="input-style" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="input-style" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="btn-style bg-pink-500 hover:bg-pink-600">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
