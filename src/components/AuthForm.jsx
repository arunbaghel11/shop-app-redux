// components/AuthForm.jsx
import React from "react";
import { motion } from "framer-motion";

const AuthForm = ({ title, children }) => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white shadow-2xl p-10 rounded-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">{title}</h2>
        {children}
      </div>
    </motion.div>
  );
};

export default AuthForm;
