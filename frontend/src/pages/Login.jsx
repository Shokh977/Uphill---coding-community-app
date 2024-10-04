import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../UI/Input";
import { useStoreAuth } from "../store/authStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useStoreAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-100 dark:bg-gray-900 backdrop-filter backdrop-blur-xl rounded-lg shadow-xl ">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-violet-500">
          Welcome Back
        </h2>
        <form className="" onSubmit={handleSubmit}>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center mb-6">
            <Link
              className="text-sm text-violet-400 hover:underline"
              to="/forgot-password">
              Forgot password?
            </Link>
          </div>
          {error && (
            <p className="text-red-500 font-semibold text-sm mb-2">{error}</p>
          )}
          <motion.button
            className="text-white mt-2 w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-blue-500 
          font-bold rounded-lg shadow-lg hover:from-violet-700 hover:to-blue-600
          focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2
          focus:ring-offset-gray-900 transition duration-200
          "
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
            type="submit">
            Sign In
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 dark:bg-gray-950 bg-gray-200  flex justify-center rounded-b-lg">
        <p className="text-sm text-gray-400">
          Don&apos;t have an Account?{" "}
          <Link className="text-violet-600 hover:underline" to={"/sign-up"}>
            Sign Up
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
