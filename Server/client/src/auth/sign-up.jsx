import React, { useState } from "react";
import { motion } from "framer-motion";
import Input from "../UI/Input";
import { Lock, Mail, User, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import StrongPassword from "../UI/strongPassword";
import { useStoreAuth } from "../store/authStore";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signup, error, isLoading } = useStoreAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, name);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-100 dark:bg-gray-900 backdrop-filter backdrop-blur-2xl rounded-lg shadow-xl">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-violet-600">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email"
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
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          <StrongPassword password={password} />

          <motion.button
            className="text-white mt-5 w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-blue-500 
          font-bold rounded-lg shadow-lg hover:from-violet-700 hover:to-blue-600
          focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2
          focus:ring-offset-gray-900 transition duration-200
          "
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isLoading}>
            {isLoading ? (
              <Loader className="animate-spin mx-auto" size={24} />
            ) : (
              "Sign up"
            )}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 dark:bg-gray-950 bg-gray-200  flex justify-center rounded-b-lg">
        <p className="text-sm text-gray-400">
          Already have an Account?{" "}
          <Link className="text-violet-600 hover:underline" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};
