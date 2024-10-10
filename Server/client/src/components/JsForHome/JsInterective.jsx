import React, { useState } from "react";
import Cards from "./Cards";
import { FaCheck } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import CardsComponent from "./CardsComponent";
import ResponsiveContainer from "../../UI/ResizeableContainer";
import { Box } from "lucide-react";
import Toasts from "../../UI/Toasts";
import { Accordions, AutoClose } from "../../UI/Accordions";

const JsInterective = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    if (!isDownloading && !isDownloaded) {
      setIsDownloading(true);
      setTimeout(() => {
        setIsDownloading(false);
        setIsDownloaded(true);
      }, 2000); // Simulates download time
    }
  };

  const handleClick = () => {
    if (!isVerifying && !isVerified) {
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        setIsVerified(true);
      }, 500);
    }
  };

  return (
    <div className="button-showcase py-4 my-20">
      <h1 className=" text-2xl font-bold text-center  dark:text-gray-300 text-gray-500">
        Interactive Components
      </h1>
      {/* Buttons */}
      <h2 className="mt-8 text-2xl dark:text-gray-300">Buttons</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <button className="py-2 px-3 bg-green-500 text-white rounded hover:scale-110 transform transition-transform duration-300 ease-in-out">
          Bouncing
        </button>

        <button className="py-3 px-6 bg-purple-600 text-white rounded animate-pulse">
          Pulsing
        </button>

        <button className="py-3 px-6 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded hover:from-yellow-500 hover:to-pink-500 transition-colors duration-500">
          Gradient Hover
        </button>

        <button className="py-3 px-6 bg-blue-600 text-white rounded shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 ease-in-out">
          Glowing
        </button>

        <button className="py-3 px-6 bg-red-500 text-white rounded transform hover:rotate-180 transition-transform duration-500 ease-in-out">
          Rotating
        </button>

        <button className="py-3 px-6 bg-transparent border-2 border-gray-700 text-gray-700 rounded relative overflow-hidden hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out before:absolute before:inset-0 before:bg-gray-700 before:-translate-x-full before:transition-transform before:duration-300 hover:before:translate-x-0">
          Sliding
        </button>

        <button className="py-3 px-6 bg-indigo-600 text-white rounded relative overflow-hidden focus:outline-none hover:before:w-full hover:before:h-full before:absolute before:bg-white before:rounded-4xl before:opacity-30 before:transition-all before:duration-700 before:ease-out before:content-[''] before:w-0 before:h-0 before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2">
          Ripple Button
        </button>

        <button className="py-3 px-6 bg-black text-white rounded hover:bg-black transition-all ease-in-out hover:shadow-[0_0_10px_#00eaff,0_0_40px_#00eaff,0_0_60px_#00eaff]">
          Neon Button
        </button>
        <button className="py-3 px-6 bg-gray-600 text-white rounded hover:text-xl transition-all duration-400 ease-in-out">
          Scaling
        </button>
        <button
          className={`relative px-6 py-3 rounded-lg font-semibold text-white transition-all duration-500 ease-in-out transform ${
            isVerifying
              ? "bg-blue-500 animate-spin-slow pointer-events-none"
              : isVerified
              ? "bg-green-500"
              : "bg-violet-500 hover:bg-violet-600"
          }`}
          onClick={handleClick}>
          {isVerifying ? (
            <div className="spinner-border border-4 border-white rounded-full w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          ) : isVerified ? (
            <FaCheck className="text-white text-xl mx-auto  " />
          ) : (
            "Verify"
          )}
        </button>
        <button
          className={`relative flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-500 ease-in-out transform ${
            isDownloading
              ? "bg-blue-500 pointer-events-none"
              : isDownloaded
              ? "bg-green-500"
              : "bg-violet-500 hover:bg-violet-600"
          }`}
          onClick={handleDownload}>
          {isDownloading ? (
            <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin mr-2"></div>
          ) : isDownloaded ? (
            <FaCheck className="text-white text-xl mr-2" />
          ) : (
            <MdDownload className="text-white text-xl mr-2" />
          )}
          <span className="text-center">
            {isDownloading
              ? "Downloading..."
              : isDownloaded
              ? "Downloaded"
              : "Download"}
          </span>
        </button>
      </div>

      {/* Cards */}

      <h2 className="mb-8 text-2xl dark:text-gray-300">Cards</h2>
      <Cards />

      <div className="dark:bg-gray-900  rounded-md">
        <CardsComponent />
      </div>
      <div className="mb-8 mx-auto">
        <h2 className="m-8 text-2xl md:block hidden dark:text-gray-300">Responsive design</h2>

        <ResponsiveContainer />
      </div>
      <h2 className="mt-8 text-2xl dark:text-gray-300">Toast with Tailwind</h2>

      <Toasts />
      {/* <NotificationSystem/> */}
      <div className="flex md:flex-row flex-col justify-around p-4 dark:bg-gray-900 shadow-lg">
        <Accordions />
        <AutoClose />
      </div>
    </div>
  );
};

export default JsInterective;
