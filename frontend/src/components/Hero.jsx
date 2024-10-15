import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";
import project from "../assets/projects.svg";
import blog from "../assets/blog.svg";
import resume from "../assets/resume.svg";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full h-[500px] flex rounded-lg  backdrop-blur-lg bg-transparent md:dark:bg-black bg-opacity-30 relative shadow-lg ">
      <div className="md:bg-slate-700 p-2 rounded-lg md:bg-transparent absolute left-7 top-1/2 -translate-y-1/2 flex flex-col gap-2 cursor-pointer text-white z-10">
        <Link target="_blank" rel="noopener noreferrer" to="https://github.com/Shokh977">
          <Github className="hover:text-violet-400" />
        </Link>
        <Link target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/abdulazizov-shokhrukh-b7a6b2225/">
          <Linkedin className="hover:text-violet-400" />
        </Link>
        <Link target="_blank" rel="noopener noreferrer" to="https://www.youtube.com/@shokh_tv">
          <Youtube className="hover:text-violet-400" />
        </Link>
      </div>

      <div className="w-1/2  md:flex hidden justify-center items-center flex-col">
        <img
          className="w-full h-full p-2 dark:w-[500px] dark:h-[90%]"
          src="https://camo.githubusercontent.com/aa3b7c25d2be856f50dbbece232936b85ea8b13cebc32ee2aa1a0d88f43ffd2f/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f38312f31372f38622f38313137386234376138353938663063383163343739396632636464343035372e676966"
          alt=""
        />
      </div>

      <div className="w-full  md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
        {" "}
<<<<<<< HEAD
        <div className=" flex flex-col bg-yellow-500 dark:bg-[#232A3C] items-center justify-center gap-2 rounded-lg p-2 cursor-pointer transition-transform duration-300 hover:scale-105">
=======
        <div className=" flex flex-col bg-red-500 dark:bg-[#232A3C] items-center justify-center gap-2 rounded-lg p-2 cursor-pointer transition-transform duration-300 hover:scale-105">
>>>>>>> fb143a1412afe08974b0d412e9915107e2c7fe6d
          <Link to="/projects" className="flex flex-col items-center">
            <h1 className="text-white font-semibold text-xl md:text-4xl m-2">
              Projects
            </h1>
            <img
              src={project}
              alt="Projects"
              className="w-[100px] md:w-[250px]"
            />{" "}
          </Link>{" "}
        </div>
        <div className="bg-[#d4c9b2] dark:bg-[#232A3C]  flex flex-col justify-center items-center gap-2 rounded-lg p-2 cursor-pointer transition-transform duration-300 hover:scale-105">
          <Link to="/blog" className="flex flex-col items-center">
            <h1 className="text-white font-semibold text-xl md:text-4xl m-2">
              Blogs
            </h1>
            <img src={blog} alt="Blogs" className="w-[100px] md:w-[200px]" />
          </Link>
        </div>
        <div className="bg-[#d4c9b2] dark:bg-[#232A3C] flex flex-col justify-center items-center gap-2 rounded-lg p-2 col-span-1 md:col-span-2 cursor-pointer transition-transform duration-300 hover:scale-105">
          <Link to="/about" className="flex flex-col items-center">
            <h1 className="text-white font-semibold text-xl md:text-4xl m-2">
              About Myself
            </h1>
            <img
              className="md:w-[200px] w-[75px] max-h-[150px]"
              src={resume}
              alt="About Myself"
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
