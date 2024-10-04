import React from "react";
import { projectsData } from "./ProjectsData";
import { GithubIcon, Link, Link2, Link2Icon, LinkIcon } from "lucide-react";

const Project = () => {
  return (
    <div className="container mx-auto p-4 sm:p-8">
      <div className="flex flex-col items-center h-auto bg-gray-100 rounded-lg dark:bg-gray-900 gap-6 md:gap-[100px] p-4">
        <h1 className="text-4xl font-semibold">Projects</h1>
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } mb-12 sm:mb-16 items-center`}>
            {/* Text Section */}
            <div className="w-full md:w-1/2 p-4 space-y-4">
              <h2 className="text-3xl font-extrabold tracking-wide text-indigo-600">
                {project.name}
              </h2>
              <p className="text-gray-600">
                <span
                  key={""}
                  className="bg-gray-200 text-sm px-2 py-1 rounded-full">
                  Technologies: {project.technologies.join(", ")}
                </span>
              </p>
              <p className="text-gray-600">
                Started: {project.startDate} - Finished: {project.endDate}
              </p>
              <p className="text-sm sm:text-base">{project.description}</p>
              <div className="flex gap-6 items-center">
                <p className="text-violet-500 text-2xl items-center flex gap-2 cursor-pointer">
                  visit <LinkIcon />
                </p>
                <a
                  className="hover:text-violet-500 transition-transform duration-200"
                  href={project.link}>
                  <GithubIcon size={25} />
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-wrap gap-4 p-4 relative justify-around">
  {project.images.map((image, imgIndex) => (
    <div
      key={imgIndex}
      className={`relative w-36 h-36 sm:w-40 sm:h-40 shadow-lg transform-gpu ${
        imgIndex % 2 === 0 ? 'rotate-6 translate-y-2' : 'rotate-3 -translate-y-3'
      } ${
        imgIndex % 3 === 0 ? 'scale-110' : 'scale-95'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full">
        <img
          src={image}
          alt="Project image"
          className="w-full h-full object-cover rounded-lg"
        />

      </div>
    </div>
  ))}
</div>
          </div>    

        ))}
      </div>

    </div>
  );
};

export default Project;
