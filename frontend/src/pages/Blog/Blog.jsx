import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, FileText, Calendar, Eye, ThumbsUp, ArrowRight, Filter } from "lucide-react";
import { FaFolder, FaClock, FaEye, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const categories = ["All", "Technology", "Web Development", "Design", "Marketing"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  
  const blogPosts = [
    {
      id: 1,
      title: "React vs Next.js",
      category: "Web Development",
      date: "Sep 24, 2024",
      views: 320,
      likes: 42,
      excerpt: `React와 Next.js는 둘 다 웹 애플리케이션을 개발하는 데 사용되는 도구이지만, 사용 목적과 기능에서 차이가 있습니다. 특히 SSR(서버 사이드 렌더링)과 CSR(클라이언트 사이드 렌더링) 측면에서 중요한 차이가 있습니다.`,
      imageUrl: "/nextvsreact.png",
      author: {
        name: "Shokhrukh Abdulazizov",
        avatar: "/man-user.jpg"
      },
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "UI Design Trends 2024",
      category: "Design",
      date: "Sep 22, 2024",
      views: 280,
      likes: 35,
      excerpt: "Explore the latest trends in UI design for modern web applications. From glassmorphism to dark mode interfaces, learn what's shaping the digital landscape.",
      imageUrl: "/real-estate/estate_2.jpg",
      author: {
        name: "Shokhrukh Abdulazizov",
        avatar: "/woman-user.jpg"
      },
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "The Future of TypeScript",
      category: "Technology",
      date: "Sep 18, 2024",
      views: 195,
      likes: 28,
      excerpt: "TypeScript continues to evolve with new features that enhance developer productivity and code safety. Let's explore what's coming in future versions.",
      imageUrl: "/portfolio.jpg",
      author: {
        name: "Shokhrukh Abdulazizov",
        avatar: "/man-user.jpg"
      },
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Optimizing Website Performance",
      category: "Web Development",
      date: "Sep 15, 2024",
      views: 310,
      likes: 48,
      excerpt: "Learn how to optimize your website's performance using modern techniques like code splitting, lazy loading, and image optimization.",
      imageUrl: "/blog.png",
      author: {
        name: "Shokhrukh Abdulazizov",
        avatar: "/woman-user.jpg"
      },
      readTime: "6 min read"
    }
  ];

  const [posts, setPosts] = useState(blogPosts);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  // Filter posts based on category and search term
  useEffect(() => {
    let filtered = posts;
    
    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        post => 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPosts(filtered);
  }, [activeCategory, searchTerm, posts]);

  const handleLike = (id) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Blog & Articles</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, design, and technology.
          </p>
        </motion.div>
        
        {/* Search and filter bar */}
        <motion.div 
          className="mb-12 flex flex-col md:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full md:w-2/3 relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 pl-12 pr-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          <div className="hidden md:flex items-center gap-3 flex-wrap">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-violet-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                } shadow-sm`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* Mobile filter button */}
          <button 
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="md:hidden flex items-center gap-2 py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-sm"
          >
            <Filter size={16} />
            Filter
          </button>
        </motion.div>
        
        {/* Mobile filter dropdown */}
        {showMobileFilter && (
          <motion.div 
            className="md:hidden mb-8 flex flex-wrap gap-2 justify-center"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCategory(category);
                  setShowMobileFilter(false);
                }}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-violet-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}
        
        {/* Blog posts grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-violet-600 text-white text-xs font-medium py-1 px-3 rounded-full">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-6 h-6 rounded-full object-cover" 
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{post.author.name}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </span>
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        {post.views}
                      </span>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          handleLike(post.id);
                        }}
                        className="flex items-center hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      >
                        <ThumbsUp size={14} className="mr-1" />
                        {post.likes}
                      </button>
                      <span className="flex items-center">
                        <FileText size={14} className="mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-violet-600 dark:text-violet-400 font-medium text-sm flex items-center hover:underline"
                    >
                      Read More 
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="col-span-full text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="mx-auto w-24 h-24 mb-6 text-gray-300 dark:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No articles found</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button 
                onClick={() => {
                  setActiveCategory("All");
                  setSearchTerm("");
                }}
                className="inline-flex items-center px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </motion.div>
        
        {/* Newsletter subscription */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to my newsletter</h3>
              <p className="text-violet-100 mb-6 max-w-lg">
                Get the latest articles, tutorials, and updates delivered straight to your inbox.
                No spam, unsubscribe anytime.
              </p>
            </div>
            
            <div className="md:w-1/2 w-full">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow py-3 px-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <motion.button 
                  className="whitespace-nowrap bg-white text-violet-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
