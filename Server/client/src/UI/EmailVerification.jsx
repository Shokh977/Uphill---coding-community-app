import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useStoreAuth } from "../store/authStore";
import toast from "react-hot-toast";

export const EmailVerification = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);
  const navigate = useNavigate();
  const { verifyEmail, error, isLoading } = useStoreAuth();

  const handleChange = (index, value) => {
    const newCode = [...code];

    // handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);
      // focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRef.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      // move focus to the next field if value is entered
      if (value && index < 5) {
        inputRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    try {
      await verifyEmail(verificationCode);
      navigate("/");
      toast.success("Email verified successfully");
    } catch (error) {
         console.log(error);
         
    }
  };

  //auto submit when All fields are filled
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  return (
    <div className="max-w-md w-full dark:bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-lg shadow-lg overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="m bg-gray-100 dark:bg-gray-900 backdrop-filter backdrop-blur-2xl rounded-lg shadow-xl">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-violet-600">
            Verify Your Email
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Enter the 6-digit code you received by email.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-between">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRef.current[index] = el)}
                  type="text"
                  maxLength="6"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl font-bold bg-gray-300 dark:bg-gray-700  text-white border-2 border-gray-400
                    rounded-lg focus:border-violet-500 focus:outline
                    "
                />
              ))}
            </div>
            {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
            <motion.button
              className="text-white mt-2 w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-blue-500 
          font-bold rounded-lg shadow-lg hover:from-violet-700 hover:to-blue-600
          focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2
          focus:ring-offset-gray-900 transition duration-200
          "
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              type="submit">
              {isLoading ? <Loader className="mx-auto animate-spin" /> : "Verify"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
