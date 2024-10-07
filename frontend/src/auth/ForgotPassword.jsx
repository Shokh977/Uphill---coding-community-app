import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStoreAuth } from "../store/authStore";
import Input from "../UI/Input";
import { Mail, Loader, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isLoading, forgotPassword } = useStoreAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full dark:bg-gray-900 bg-opacity-50 bg-gray-200 backdrop-filter backdrop-blur-xl rounded-lg shadow-xl overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-violet-600">
          Forgot Password
        </h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <p className="mb-4">
              Enter your Email address and we will send you a link to reset your
              password
            </p>
            <Input
              icon={Mail}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whiletap={{ scale: 0.98 }}
              className="w-full text-white py-3 px-4 bg-gradient-to-r from-violet-500 to-blue-600 font-bold rounded-lg shadow-lg hover:from-violet-600 hover:to-blue-700 focus:outline-none focus:ring-2 *:focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200">
              {isLoading ? (
                <Loader className="size-6 animate-spin mx-auto " />
              ) : (
                "Send Reset Link"
              )}
            </motion.button>
          </form>
        ) : (
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-white" />
            </motion.div>
            <p className="text-gray-300 mb-6">
              ou will get a password reset link shortly. If an account exists
              for {email}, y
            </p>
          </div>
        )}
      </div>
      <div className="px-8 py-4 dark:bg-black bg-gray-200 bg-opacity-50 flex justify-content">
        <Link
          to="/login"
          className="text-sm mx-auto text-violet-400 hover:underline flex items-center ">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Login
        </Link>
      </div>
    </motion.div>
  );
};
