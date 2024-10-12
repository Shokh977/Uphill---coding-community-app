import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

export default function NotificationNav({ closeModal }) {
  return (
    <div className="flex flex-col items-center relative">
      <MdClose
        onClick={closeModal}
        className="absolute top-2 right-2 dark:text-white size-5 cursor-pointer"
      />
      <img
        src="/construction.svg"
        alt="Under Construction"
        className="w-16 h-16 mb-4"
      />
      <h1 className="text-xl font-semibold text-center dark:text-gray-300 mb-2">
        Currently static, Page Under Construction
      </h1>
      <p className="text-gray-600 mb-4 text-center">
        We're working on this blog page. Please visit later or sign up for
        updates!
      </p>
      <Link to="sign-up" onClick={closeModal}>
        <button className="bg-violet-600 text-white py-2 px-6 rounded-full hover:bg-violet-500 transition duration-300">
          Sign Up for Updates
        </button>
      </Link>
    </div>
  );
}
