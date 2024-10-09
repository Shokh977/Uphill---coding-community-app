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
  const posts = [
    {
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
    },
    {
      id: 2,
      title: "React vs Next.js",
      category: "Web Development",
      date: "Sep 24, 2024",
      views: 276,
      likes: 47,
      content: `React와 Next.js는 둘 다 웹 애플리케이션을 개발하는 데 사용되는 도구이지만, 사용 목적과 기능에서 차이가 있습니다. 특히 SSR(서버 사이드 렌더링)과 CSR(클라이언트 사이드 렌더링) 측면에서 중요한 차이가 있습니다.

React: React는 UI를 구축하기 위한 JavaScript 라이브러리입니다. 컴포넌트를 사용하여 사용자 인터페이스를 선언적으로 설계할 수 있으며, 주로 CSR(클라이언트 사이드 렌더링)에 사용됩니다. React 자체는 SPA(Single Page Application)를 만들기 위해 주로 사용되며, 클라이언트에서만 렌더링되는 애플리케이션을 만듭니다.

Next.js: Next.js는 React를 기반으로 하는 프레임워크로, SSR(서버 사이드 렌더링) 및 정적 사이트 생성(Static Site Generation, SSG)을 지원합니다. Next.js는 파일 기반 라우팅, API 라우트, 이미지 최적화, 국제화(i18n) 등의 기능을 기본적으로 제공합니다.

SSR vs CSR
SSR은 사용자가 웹 페이지에 접근 할때, 서버에 각각 페이지에 대해 요청하고 서버에서 HTML, JS 파일 등을 모두 다운로드하여 화면에 렌더링 하는 방식이다. CSR은 클라이언트측에서 HTML, JS, 리소스 파일들을 받은 이후에 브라우저에서 렌더링을 진행하는 것으로, JS가 동작하면서 데이터만을 주고 받는다.

SSR은 사용자가 웹 페이지에 접근 할때, 서버에 각각 페이지에 대해 요청하고 서버에서 HTML, JS 파일 등을 모두 다운로드하여 화면에 렌더링 하는 방식이다. CSR은 클라이언트측에서 HTML, JS, 리소스 파일들을 받은 이후에 브라우저에서 렌더링을 진행하는 것으로, JS가 동작하면서 데이터만을 주고 받는다.`,
      imageUrl: "/nextvsreact.png",
    },
  ];

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


  return (
    <div className="container mx-auto px-4 py-8 mb-[7.5rem]">
      <div>
        {posts.map((item) => (
          <div key={item.id}>
            <header className="w-full h-96 relative mb-8">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover  rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 opacity-40 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold">{item.title}</h1>
              </div>
            </header>

            <article className="w-full mx-auto dark:bg-gray-900 bg-gray-100 p-8 shadow-lg rounded-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="text-gray-500 text-sm flex items-center space-x-4">
                  <span>
                    <FaFolder className="inline-block mr-1 text-violet-600" />{" "}
                    {item.category}
                  </span>
                  <span>
                    <FaClock className="inline-block mr-1 text-violet-600" />{" "}
                    {item.date}
                  </span>
                  <span>
                    <FaEye className="inline-block mr-1 text-violet-600" />{" "}
                    {item.views} Views
                  </span>
                </div>
                <button
                  className="text-gray-600 hover:text-violet-500 flex items-center">
                  <FaThumbsUp className="mr-2 text-violet-600" /> 28 Likes
                </button>
              </div>

              <div
                className="prose prose-lg text-xl max-w-none my-12"
                dangerouslySetInnerHTML={{ __html: item.content }}
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
          </div>
        ))}
      </div>

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
