import React, { useState } from "react";
import {
  FaEye,
  FaThumbsUp,
  FaClock,
  FaFolder,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaCommentAlt,
} from "react-icons/fa";

const BlogPostDetail = () => {
  const post = {
    id: 1,
    title: "Introduction to React",
    category: "Web Development",
    date: "Sep 24, 2024",
    views: 320,
    likes: 42,
    content: `<p>React is a popular JavaScript library for building user interfaces. It's component-based, making it easy to build reusable UI elements.</p>
              <p>This article introduces React concepts, such as components, props, state, and lifecycle methods.</p>
              <p>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.</p>
               `,
    imageUrl:
      "https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg",
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Understanding React State",
      imageUrl: "/real-estate/estate_1.jpg",
    },
    {
      id: 3,
      title: "React Hooks in Depth",
      imageUrl: "/real-estate/estate_2.jpg",
    },
  ];

  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8 my-[7.5rem]">
      <header className="w-full h-96 relative mb-8">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover  rounded-lg shadow-xl"
        />
        <div className="absolute inset-0 opacity-40 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">{post.title}</h1>
        </div>
      </header>

      <article className="w-full mx-auto dark:bg-gray-900 bg-gray-100 p-8 shadow-lg rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-500 text-sm flex items-center space-x-4">
            <span>
              <FaFolder className="inline-block mr-1 text-violet-600" />{" "}
              {post.category}
            </span>
            <span>
              <FaClock className="inline-block mr-1 text-violet-600" />{" "}
              {post.date}
            </span>
            <span>
              <FaEye className="inline-block mr-1 text-violet-600" />{" "}
              {post.views} Views
            </span>
          </div>
          <button
            onClick={handleLike}
            className="text-gray-600 hover:text-violet-500 flex items-center">
            <FaThumbsUp className="mr-2 text-violet-600" /> {likes} Likes
          </button>
        </div>

        <div
          className="prose prose-lg text-xl max-w-none my-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold">Share this Post</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            <FaCommentAlt className="inline-block mr-2 text-violet-600" />{" "}
            Comments
          </h2>
          <div className="p-4 rounded-lg shadow-md mb-8">
            <form>
              <textarea
                className="w-full p-4 border rounded-lg mb-4"
                placeholder="Leave a comment..."
                rows="5"
              />
              <button className="bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-500">
                Submit
              </button>
            </form>
          </div>
        </div>
      </article>

      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {relatedPosts.map((relatedPost) => (
            <div
              key={relatedPost.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={relatedPost.imageUrl}
                alt={relatedPost.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {relatedPost.title}
                </h3>
                <a
                  href={`/blog/${relatedPost.id}`}
                  className="text-violet-600 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPostDetail;
