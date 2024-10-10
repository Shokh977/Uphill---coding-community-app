import React, { useState, useRef, Suspense } from "react";
import { IoMdMore } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { ArrowLeft, ArrowRight, Check, ShoppingBasket } from "lucide-react";

const user = {
  name: "shokhrukh",
  avatar: "/testemonial/portfolio.jpg",
};
const product = {
  image: "/smartwatch.png",
  name: "Smart watch",
  rating: 4,
  price: 29.99,
};
const pricingPlans = [
  {
    planName: "Premium",
    price: 59,
    features: [
      "Access All Courses",
      "Lifetime access",
      "235 file materials",
      "Cancel anytime",
    ],
    buttonText: "Choose Plan",
    isPremium: true,
  },
];

const blogPost = {
  image: "/blog.png",
  title: "Modern Blog Post Title",
  excerpt:
    "This is a brief description of the modern blog post. reusable just by changing the data...",
  author: "shokhrukh",
};

const testimonials = [
  {
    name: "shokhrukh",
    role: "Web Developer",
    text: "Passionate frontend developer with a love for crafting intuitive, beautiful, and responsive web applications. I enjoy bringing ideas to life in the browser.",
    image: "/testemonial/portfolio.jpg",
  },
  {
    name: "Jane Smith",
    role: "Designer",
    text: "I love the aesthetic and functionality of this tool. It has made my design process so much smoother.",
    image: "/testemonial/woman-user.jpg",
  },
  {
    name: "Mark Wilson",
    role: "Project Manager",
    text: "A game-changer for project management! The collaboration features are outstanding.",
    image: "/testemonial/man-user.jpg",
  },
];

const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex items-center">
      {Array.from({ length: totalStars }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.43 8.208 1.193-5.92 5.657 1.398 8.155L12 18.897l-7.354 3.865 1.398-8.155-5.92-5.657 8.208-1.193z" />
        </svg>
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const circleRef = useRef(null);

  const handleAddToCart = () => {
    setIsAnimating(true);
    setIsAdded(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="relative h-auto md:h-80 dark:border-none border dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-4 flex md:flex-col gap-4 items-center">
      <img src={product.image} alt={product.name} className="p-4 w-[45%] " />
      <div className="flex md:flex-row flex-col md:gap-20 gap-2 justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>{" "}
          <Rating rating={product.rating} />
          <p className="text-gray-600 text-xl">${product.price}</p>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Add to Cart
        </button>{" "}
      </div>
      {isAnimating && (
        <div
          ref={circleRef}
          className="absolute flex justify-center items-center top-30 left-1/2 transform -translate-x-1/2 w-30 h-30 bg-blue-500 rounded-lg animate-move-to-cart">
          <Check size={32} />
        </div>
      )}
      {isAdded && !isAnimating && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 rounded-lg">
          <h3 className="text-xl font-semibold text-white">Added to Cart!</h3>
        </div>
      )}
    </div>
  );
};

export const UserCard = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    if (!isAdded) {
      setTimeout(() => {
        setIsAdded(true);
      }, 500);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-80 dark:bg-gray-800 flex justify-center shadow-lg rounded-lg p-4 relative">
      <div className="flex flex-col items-center justify-center gap-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 rounded-full border border-violet-500 mr-4"
        />
        <div>
          <h2 className="text-lg font-bold">{user.name}</h2>
          <button
            onClick={toggleDropdown}
            className="absolute top-2 right-4 mt-2 text-blue-500">
            <IoMdMore size={24} />
          </button>
          {isOpen && (
            <div className="absolute bg-white shadow-md mt-2 rounded-md top-8 right-6 w-40 z-10">
              <button
                className="block px-4 py-2 text-left text-gray-800 hover:bg-gray-200 w-full"
                onClick={() => alert("Edit clicked")}>
                Edit
              </button>
              <button
                className="block px-4 py-2 text-left text-gray-800 hover:bg-gray-200 w-full"
                onClick={() => alert("Delete clicked")}>
                Delete
              </button>
              <button
                className="block px-4 py-2 text-left text-gray-800 hover:bg-gray-200 w-full"
                onClick={() => alert("Logout clicked")}>
                Logout
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          <button
            className={`relative px-3 py-2 rounded-md font-semibold text-white transition-all duration-500 ease-in-out transform ${
              isAdded ? "bg-green-500" : "bg-violet-500 hover:bg-violet-600"
            }`}
            onClick={handleClick}>
            {isAdded ? "Added" : "Add Friend"}
          </button>
          <button className="border py-2 px-3 rounded-md dark:text-gray-200 border-violet-500 hover:bg-violet-500 transition duration-300">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};


// PricingCard.jsx
export const PricingCard = ({
  planName,
  price,
  features,
  buttonText,
  isPremium,
}) => {
  return (
    <div className="relative h-80 w-full rounded-lg border shadow-lg overflow-hidden dark:bg-gray-800">
      <div className="p-6 text-center">
        {isPremium && (
          <span className="absolute top-2 right-2 bg-violet-500 text-white text-xs font-bold rounded-full px-2 py-1">
            <MdOutlineWorkspacePremium size={24} />
          </span>
        )}
        <h2 className="text-2xl font-bold mb-2">{planName}</h2>
        <p className="text-2xl font-bold mb-4">
          ${price} <span className="text-sm ">/ month</span>
        </p>
        <ul className="mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM8 14.5l-4-4 1.414-1.414L8 11.672l6.586-6.586L16 6.5l-8 8z" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

// Blog

export const BlogPostCard = ({ post }) => (
  <div className="dark:bg-gray-800 relative group rounded-lg overflow-hidden shadow-lg transition-transform transform ">
    <img
      src={post.image}
      alt={post.title}
      className="h-48 object-cover transition-transform transform duration-200 group-hover:scale-105 mx-auto"
    />
    <div className=" p-4">
      <h3 className="font-semibold text-lg">{post.title}</h3>
      <p className="text-gray-600 mt-2">{post.excerpt}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-500 text-sm">By {post.author}</span>
        <button className="bg-blue-500 text-white rounded-md px-3 py-2 transition-transform transform hover:scale-105">
          Read More
        </button>
      </div>
    </div>
  </div>
);

//  Testemonial

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative dark:bg-gray-800  rounded-lg shadow-lg mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center py-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 overflow-hidden object-contain rounded-full border-2 border-blue-500 mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <h4 className="text-gray-600">{testimonial.role}</h4>
              <p className="text-gray-400 text-center mt-2">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4 p-4">
        <button
          onClick={handlePrev}
          className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          <ArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

// lazy load
const MiniCard = ({ title, description }) => {
  return (
    <div className="dark:bg-black p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-12 bg-gray-300 rounded mb-2"></div>
      <div className="h-8 bg-gray-300 rounded mb-2"></div>
    </div>
  );
};

const MainCard = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMoreCards = () => {
    setLoading(true);

    setTimeout(() => {
      const newCards = [
        { id: 1, title: "Shokhrukh", description: "fullstack web developer..." },
       
      ];
      setCards(newCards);
      setLoading(false);
    }, 2000); 
  };

  return (
    <div className="max-w-md mx-auto dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Lazy Loading</h2>
      <p className="text-gray-300 mb-6">
        This is a description for the main card. Click the button below to load
        more mini cards.
      </p>
      <button
        onClick={loadMoreCards}
        className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Load the page
      </button>

      <div className="mt-6 grid grid-cols-1 gap-4">
        {loading ? (
          <Skeleton />
        ) : (
          <Suspense fallback={<Skeleton />}>
            {cards.map((card) => (
              <MiniCard
                key={card.id}
                title={card.title}
                description={card.description}
              />
            ))}
          </Suspense>
        )}
      </div>
    </div>
  );
};

const CardsComponent = () => {
  return (
    <div className=" grid md:grid-cols-3 gap-4 my-10">
      <ProductCard product={product} />
      <UserCard user={user} />
      <div className="flex justify-center">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
      <BlogPostCard post={blogPost} />
      <Testimonial />
      <MainCard />
    </div>
  );
};
export default CardsComponent;
