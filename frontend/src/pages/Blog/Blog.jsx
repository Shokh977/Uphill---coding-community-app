import { Code } from "lucide-react";
import React, { useState } from "react";
import { FaEye, FaThumbsUp, FaClock, FaFolder } from "react-icons/fa";

const BlogPage = () => {
  const categories = ["Technology", "Web Development", "Design", "Marketing"];
  const blogPosts = [
    {
      id: 1,
      title: "React vs Next.js",
      category: "Web Development",
      date: "Sep 24, 2024",
      views: 320,
      likes: 42,
      excerpt: `React와 Next.js는 둘 다 웹 애플리케이션을 개발하는 데 사용되는 도구이지만, 사용 목적과 기능에서 차이가 있습니다. 특히 SSR(서버 사이드 렌더링)과 CSR(클라이언트 사이드 렌더링) 측면에서 중요한 차이가 있습니다.

React: React는 UI를 구축하기 위한 JavaScript 라이브러리입니다. 컴포넌트를 사용하여 사용자 인터페이스를 선언적으로 설계할 수 있으며, 주로 CSR(클라이언트 사이드 렌더링)에 사용됩니다. React 자체는 SPA(Single Page Application)를 만들기 위해 주로 사용되며, 클라이언트에서만 렌더링되는 애플리케이션을 만듭니다.

Next.js: Next.js는 React를 기반으로 하는 프레임워크로, SSR(서버 사이드 렌더링) 및 정적 사이트 생성(Static Site Generation, SSG)을 지원합니다. Next.js는 파일 기반 라우팅, API 라우트, 이미지 최적화, 국제화(i18n) 등의 기능을 기본적으로 제공합니다.

SSR vs CSR
SSR은 사용자가 웹 페이지에 접근 할때, 서버에 각각 페이지에 대해 요청하고 서버에서 HTML, JS 파일 등을 모두 다운로드하여 화면에 렌더링 하는 방식이다. CSR은 클라이언트측에서 HTML, JS, 리소스 파일들을 받은 이후에 브라우저에서 렌더링을 진행하는 것으로, JS가 동작하면서 데이터만을 주고 받는다.

SSR은 사용자가 웹 페이지에 접근 할때, 서버에 각각 페이지에 대해 요청하고 서버에서 HTML, JS 파일 등을 모두 다운로드하여 화면에 렌더링 하는 방식이다. CSR은 클라이언트측에서 HTML, JS, 리소스 파일들을 받은 이후에 브라우저에서 렌더링을 진행하는 것으로, JS가 동작하면서 데이터만을 주고 받는다.`,
      imageUrl: "/nextvsreact.png",
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
            <li
              key={index}
              className=" border p-4 cursor-pointer rounded-lg hover:text-violet-500">
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
                <p className="text-gray-700 mb-4">{post.excerpt.substring(0,200)}</p>

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
