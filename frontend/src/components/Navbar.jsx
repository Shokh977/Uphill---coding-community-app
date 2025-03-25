import { Menu, User, Code } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStoreAuth } from "../store/authStore";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
import NotificationNav from "../UI/NotificationNav";

function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { isAuthenticated, user } = useStoreAuth();
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (active === "blog") {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2500);
  
      return () => clearTimeout(timer); 
    } else {
      setShowModal(false); 
    }
  }, [active]); 

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeModal = () => setShowModal(false);

  const handleLinkClick = (page) => {
    if (active !== page) {
      setActive(page);
    }
    setIsOpen(false);
  };

  return (
    <>
      <ReactModal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
          },
          content: {},
        }}
        contentLabel="Notification"
        className="max-w-sm px-4 max-h-2/4 rounded-md mx-auto mt-[7rem] p-5 shadow-lg dark:bg-gray-900 bg-gray-100 relative">
        <NotificationNav closeModal={closeModal} />
      </ReactModal>

      {/* Navbar */}
      <nav className={`flex md:justify-around justify-between fixed px-4 items-center my-5 z-50 w-[80%] 
        ${scrolled 
          ? 'dark:bg-gray-900/95 bg-white/95 shadow-lg' 
          : 'dark:bg-black bg-opacity-50 backdrop-blur-lg border border-violet-300 border-opacity-20'} 
        rounded-lg shadow-lg p-4 transition-all duration-300`}>
        <div>
          <NavLink to="/">
            <h1 className="text-2xl">
              <span className="text-violet-600 font-bold">Up</span>
              <span className="font-bold dark:text-white">Hill</span>
            </h1>
          </NavLink>
        </div>

        {/* Links for Desktop */}
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
          <li>
            <NavLink
              onClick={() => handleLinkClick("templates")}
              className={`inline-block pb-1 transition-all duration-300 ease-in-out flex items-center gap-1 ${
                active === "templates"
                  ? "underline decoration-4 rounded-full decoration-violet-600"
                  : "underline decoration-transparent"
              }`}
              to="/templates">
              <Code size={16} />
              Templates
            </NavLink>
          </li>
        </ul>

        {/* Authentication & Profile Section */}
        <div className="md:flex items-center gap-4 hidden">
          {children}
          {isAuthenticated && user?.isVerified ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                {user.avater ? (
                  <img
                    src={user.avater}
                    alt="Profile"
                    className="w-12 h-12 overflow-hidden rounded-full cursor-pointer"
                  />
                ) : (
                  <User
                    size={38}
                    className="border dark:border-white rounded-full p-1"
                  />
                )}
              </Link>
            </div>
          ) : (
            <button className="border bg py-1.5 px-3 rounded-lg text-lg">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <Menu
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden block cursor-pointer"
        />

        {/* Mobile Menu */}
        <div
          className={`absolute md:hidden top-20 left-0 w-full rounded-lg bg-gray-100 z-10 dark:bg-black opacity-90 backdrop-blur-lg flex flex-col gap-4 items-center text-lg transform transition-transform ${
            isOpen ? "block" : "hidden"
          }`}>
          <ul className="flex flex-col gap-5 p-5 items-center justify-center">
            <Link to="/" onClick={() => handleLinkClick("home")}>
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
            <Link to="/templates" onClick={() => handleLinkClick("templates")}>
              <li className="list-none w-full text-center hover:bg-violet-400 p-2 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2">
                <Code size={16} />
                Templates
              </li>
            </Link>
          </ul>

          {/* Theme Toggle for Mobile */}
          <div className="">
            {children} {/* Theme toggle */}
          </div>

          {/* Authentication & Profile Section for Mobile */}
          <div className="my-4 flex flex-col items-center gap-4">
            {isAuthenticated && user?.isVerified ? (
              <Link to="/dashboard">
                {user.avater ? (
                  <img
                    src={user.avater}
                    alt="Profile"
                    className="w-12 h-12 overflow-hidden rounded-full cursor-pointer"
                  />
                ) : (
                  <User
                    size={38}
                    className="border dark:border-white rounded-full p-1"
                  />
                )}
              </Link>
            ) : (
              <button
                onClick={() => handleLinkClick("login")}
                className="border bg py-1.5 px-3 rounded-lg text-lg">
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
