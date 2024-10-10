import React from "react";
import portfolio from "../../assets/portfolio.jpg";
import { BookUp2, Code2, Coffee, Settings } from "lucide-react";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { RiNextjsLine, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase, SiMongoose, SiRedux } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import Stack from "./Stack";
import AboutMe from "./About-me";


export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center h-auto bg-gray-100 rounded-lg dark:bg-gray-900 gap-6 md:gap-[100px] p-4">
        <div className=" mx-auto">
          <img className="rounded-full w-[200px] m-5" src={portfolio} alt="" />
          <h1 className="flex flex-col text-center">
            <span className="text-2xl font-semibold">I'm 쇼크룩</span>
            <span className="text-4xl font-bold text-violet-600">Frontend</span>
            <span className="font-semibold">Developer</span>
          </h1>
          <hr className="m-7 md:hidden"></hr>
        </div>

        <div className="flex  gap-8 flex-wrap  md:gap-[100px] justify-center text-center ">
          <span>
            <p className="text-violet-600 font-semibold text-2xl md:text-4xl flex items-center ">
              <Settings size={30} /> 20+
            </p>
            <p className="text-xl md:text-2xl">projects</p>
          </span>
          <div className="hidden md:block h-16 w-px bg-gray-400 gap-2"></div>

          <span>
            <p className="text-violet-600 font-semibold text-2xl md:text-4xl flex items-center ">
              <Coffee size={30} /> 650+
            </p>
            <p className="text-xl md:text-2xl">cups of coffee</p>
          </span>
          <div className=" hidden md:block h-16 w-px bg-gray-400 "></div>

          <span>
            <p className="text-violet-600 font-semibold text-2xl md:text-4xl flex items-center ">
              <BookUp2 size={30} />
              4H+
            </p>
            <p className="text-xl md:text-2xl">practice a day</p>
          </span>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8 md:p-16">
        {/* About Section */}
        <section className="my-16">
          <AboutMe />
        </section>

        {/* Skills Section */}
        <section className="my-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            My Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Stack />
          </div>
        </section>

        {/* Milestones Section */}
        <section className="my-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-violet-600">
                Chonnam National University
              </h3>
              <p>Major in Business Administration</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-violet-600">
                Languages
              </h3>
              <p>Fluent in English, Korean (TOPIK Level 5), Uzbek</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-violet-600">
                4+ Hours
              </h3>
              <p>Daily practice and learning</p>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="my-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Fun Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-violet-600">
                650+ Cups
              </h3>
              <p>Of coffee consumed while coding</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-violet-600">
                10K Subscribers
              </h3>
              <p>On my YouTube channel</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-violet-600">
                Animal Snack Project
              </h3>
              <p>Manufacturing snacks from unused fruits</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="my-16 text-center">
          <h2 className="text-2xl font-semibold">
            Let’s Build Something Amazing Together!
          </h2>
          <p className="mt-4 text-lg">
            Interested in working with me or learning more? Feel free to reach
            out!
          </p>
          <div className="mt-8">
            <a
              href='/resume/resume.pdf'
              download
              className="bg-violet-600 text-white px-6 py-3 rounded-full hover:bg-violet-700 transition duration-300">
              Download My Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
