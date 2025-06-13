import React, { useState } from "react";
import { auth, googleProvider } from "../firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-500 transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input-style"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-style"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn-style bg-indigo-500 hover:bg-indigo-600">
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="btn-style mt-4 bg-red-500 hover:bg-red-600"
        >
          Login with Google
        </button>

        {/* Signup and Forgot Password Links */}
        <div className="mt-6 text-center space-y-2">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-indigo-600 hover:underline font-semibold">
              Sign Up
            </Link>
          </p>
          <p>
            <Link to="/forgot-password" className="text-indigo-600 hover:underline font-semibold">
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
