import React from "react";

const projects = [
  {
    title: "Real Estate Website",
    description: "A modern real estate platform to buy, sell, and rent properties.",
    image: "realestate.jpg",
    link: "/projects/real-estate"
  },
  {
    title: "Food Community App",
    description: "A food community app connecting food enthusiasts.",
    image: "/food.jpg",
    link: "/projects/food-community"
  },
  {
    title: "E-Commerce Platform",
    description: "An elegant e-commerce website for online shopping.",
    image: "/e-commerce.jpg",
    link: "/projects/e-commerce"
  }
];

const Card = ({ title, description, image, link }) => {
    return (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white dark:bg-gray-800">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={title}
        />
        <div className="px-6 py-4">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <a
            href={link}
            className="text-violet-500 font-semibold hover:underline"
          >
            View Project
          </a>
        </div>
      </div>
    );
  };

const Cards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Cards;
