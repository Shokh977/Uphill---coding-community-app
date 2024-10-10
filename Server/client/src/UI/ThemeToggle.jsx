import React from "react";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

export default function ThemeToggle({ isDark, setIsDark }) {
  return (
    <div
      onClick={() => setIsDark(!isDark)} 
      className="relative  w-12 h-6 flex items-center dark:bg-gray-900 bg-gray-400 cursor-pointer rounded-full">
      <FaMoon size={16} className="text-white ml-1" />
      <div
        className={`absolute bg-white dark:bg-gray-800 w-5 h-5 rounded-full shadow-md transform transition-transform duration-300`}
        style={isDark ? { left: "2px" } : { right: "2px" }}></div>
      <MdWbSunny size={16} className="ml-2 text-yellow-300" />
    </div>
  );
}
