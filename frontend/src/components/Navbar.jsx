import { Menu, User } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStoreAuth } from "../store/authStore";

function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { isAuthenticated, user } = useStoreAuth();

  const handleLinkClick = (page) => {
    if (active !== page) {
      setActive(page);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="
     flex md:justify-around justify-between fixed  px-4 items-center my-5 z-10
        w-[80%] 
       dark:bg-black bg-opacity-50 backdrop-blur-lg 
        border border-violet-300 border-opacity-20 
        rounded-lg shadow-lg p-4">
      <div>
        <NavLink to="/">
          <h1 className="text-2xl">
            <span className="text-violet-600 font-bold">Up</span>
            <span className=" font-bold">Hill</span>
          </h1>
        </NavLink>
      </div>
      <ul className="text-lg md:flex gap-5 hidden">
        <li>
          <Link
            onClick={() => handleLinkClick("home")}
            className={`inline-block pb-1 transition-all duration-300 ease-in-out ${
              active === "home"
                ? "underline decoration-4 rounded-full decoration-violet-600"
                : "underline decoration-transparent"
            }`}
            to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleLinkClick("blog")}
            className={`inline-block pb-1 transition-all duration-300 ease-in-out ${
              active === "blog"
                ? "underline decoration-4 rounded-full decoration-violet-600"
                : "underline decoration-transparent"
            }`}
            to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <NavLink
            onClick={() => handleLinkClick("about")}
            className={`inline-block pb-1 transition-all duration-300 ease-in-out ${
              active === "about"
                ? "underline decoration-4 rounded-full decoration-violet-600"
                : "underline decoration-transparent"
            }`}
            to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleLinkClick("projects")}
            className={`inline-block pb-1 transition-all duration-300 ease-in-out ${
              active === "projects"
                ? "underline decoration-4 rounded-full decoration-violet-600"
                : "underline decoration-transparent"
            }`}
            to="/projects">
            Projects
          </NavLink>
        </li>
      </ul>
      <div className="md:flex items-center gap-4 hidden">
        {children}
        {isAuthenticated && user.isVerified ? (
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              {user.avater ? (
                <img
                  src={user.avater}
                  alt="Profile"
                  className="w-12 h-12 overflow-hidden rounded-full cursor-pointer"
                />
              ) : (
                <User size={38} className="border dark:border-white  rounded-full p-1" />
              )}
            </Link>
          </div>
        ) : (
          <div className="md:flex items-center gap-4 hidden">
            <button className="border bg py-1.5 px-3 rounded-lg text-lg">
              <Link to="/login">Login</Link>
            </button>
          </div>
        )}
      </div>

      <Menu
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden block cursor-pointer"
      />
      <div
        className={`absolute md:hidden top-20 left-0 w-full rounded-lg bg-gray-100 z-10 dark:bg-black opacity-90 backdrop-blur-lg flex flex-col gap-4 items-center text-lg transform transition-transform ${
          isOpen ? "block" : "hidden"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
        <ul className="flex flex-col gap-5 p-5 items-center justify-center">
          <Link to="/" onClick={() => handleLinkClick("home")}>
          <li>
            <div className="flex flex-col items-center gap-5">
            {isAuthenticated && user.isVerified ? (
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              {user.avater ? (
                <img
                  src={user.avater}
                  alt="Profile"
                  className="w-12 h-12 overflow-hidden rounded-full cursor-pointer"
                />
              ) : (
                <User size={38} className="border dark:border-white  rounded-full p-1" />
              )}
            </Link>
          </div>
        ) : (
          <div className="md:flex items-center gap-4 hidden">
            <button className="border bg py-1.5 px-3 rounded-lg text-lg">
              <Link to="/login">Login</Link>
            </button>
          </div>
        )}
              {children}
            </div>
          </li>
            <li className="list-none w-full text-center hover:bg-violet-400 p-2 rounded-lg transition-all cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/blog" onClick={() => handleLinkClick("blog")}>
            <li className="list-none w-full text-center hover:bg-violet-400 p-2 rounded-lg transition-all cursor-pointer">
              Blog
            </li>
          </Link>
          <Link to="/about" onClick={() => handleLinkClick("about")}>
            <li className="list-none w-full text-center hover:bg-violet-400 p-2 rounded-lg transition-all cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/projects" onClick={() => handleLinkClick("projects")}>
            <li className="list-none w-full text-center hover:bg-violet-400 p-2 rounded-lg transition-all cursor-pointer">
              Projects
            </li>
          </Link>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
