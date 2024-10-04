import { Code } from "lucide-react";
import React, { useState } from "react";
import { FaEye, FaThumbsUp, FaClock, FaFolder } from "react-icons/fa"; 

const BlogPage = () => {
  const categories = ["Technology", "Web Development", "Design", "Marketing"];
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to React",
      category: "Web Development",
      date: "Sep 24, 2024",
      views: 320,
      likes: 42,
      excerpt:
        "Learn the basics of React and how to get started building modern web applications.",
      imageUrl: "real-estate/estate_3.png",
    },
    {
      id: 2,
      title: "UI Design Trends 2024",
      category: "Design",
      date: "Sep 22, 2024",
      views: 280,
      likes: 35,
      excerpt:
        "Explore the latest trends in UI design for modern web applications.",
      imageUrl: "real-estate/estate_2.jpg",
    },
  ];

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const [posts, setPosts] = useState(blogPosts);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      <aside className="w-full md:w-1/4 dark:bg-gray-900 p-6 mb-8 md:mb-0 md:mr-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <ul className="space-y-4">
          {categories.map((category, index) => (
              <li key={index} className=" border p-4 cursor-pointer rounded-lg hover:text-violet-500">
                <Code className="inline-block mr-2 " />
                {category}
              </li>
          ))}
        </ul>
      </aside>

      <main className="w-full md:w-3/4">
        <h2 className="text-3xl font-bold mb-8">New Blog Posts</h2>
        <div className="grid grid-cols-1 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  <FaFolder className="inline-block mr-1 text-violet-600" />{" "}
                  {post.category} |
                  <FaClock className="inline-block ml-2 mr-1 text-violet-600" />{" "}
                  {post.date}
                </p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between text-gray-600">
                  <div className="flex items-center space-x-4">
                    <span>
                      <FaEye className="inline-block text-violet-600 mr-1" />{" "}
                      {post.views} Views
                    </span>
                    <button
                      onClick={() => handleLike(post.id)}
                      className="hover:text-violet-500">
                      <FaThumbsUp className="inline-block text-violet-600 mr-1" />{" "}
                      {post.likes} Likes
                    </button>
                  </div>
                  <a
                    href={`/blog/${post.id}`}
                    className="text-violet-600 hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
