import React, { useEffect, useState } from "react";

const sampleLikedPosts = [
  { id: 1, image: "https://via.placeholder.com/200", title: "Sample Post 1" },
  { id: 2, image: "https://via.placeholder.com/200", title: "Sample Post 2" },
  { id: 3, image: "https://via.placeholder.com/200", title: "Sample Post 3" },
  { id: 4, image: "https://via.placeholder.com/200", title: "Sample Post 4" },
  { id: 5, image: "https://via.placeholder.com/200", title: "Sample Post 5" },
  { id: 6, image: "https://via.placeholder.com/200", title: "Sample Post 6" },
];

const LikedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      setPosts(sampleLikedPosts);
  }, [posts]);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden h-[250px] w-[250px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-medium">{post.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LikedPosts;
