import React, { useEffect, Suspense, lazy } from "react";
import { User, Verified } from "lucide-react";
import { useStoreAuth } from "../store/authStore";
import SkeletonPost from "../components/SkeletonPosts";
import { motion } from "framer-motion";
import Login from "../auth/Login";
import { useTodoAuth } from "../store/toDoStore";
import TodoCard from "../components/todo/TodoCard";

const LikedPosts = lazy(() => import("./LikedPosts"));

const Dashboard = () => {
  const { todos, fetchTodos } = useTodoAuth();
  const { user, isAuthenticated, checkAuth, logout } = useStoreAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      checkAuth();
    }
    if (user && user.email) {
      fetchTodos(user);
    }
  }, [isAuthenticated, checkAuth, user]);

  if (!user) {
    return <Login />;
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleLogOut = () => {
    logout();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex md:flex-row flex-col gap-4 justify-between items-center bg-white dark:bg-gray-900 shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-6">
          {user.avatar ? (
            <img
              src={user.avatar || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <User
              size={50}
              className="border dark:border-white rounded-full p-1"
            />
          )}
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 flex gap-2">
              <strong>Email: </strong> {user.email}{" "}
              {user.isVerified ? (
                <Verified className="text-violet-500" />
              ) : (
                "Not Verified"
              )}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Joined: </strong>{" "}
              {new Date(user.createdAt).toDateString()}
            </p>
          </div>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogOut}
            className="border dark:border-gray-600 px-3 py-2 rounded-lg">
            logout
          </motion.button>
        </div>
      </div>

      <h1 className="text-xl font-semibold mt-12 text-center">Created Notes</h1>
      {todos.length === 0 ? (
        <div className="text-center text-gray-500">No todos available</div>
      ) : (
        <div className="todos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          {todos.map((todo) => (
            <div className="border border-gray-500 rounded p-3 max-w-md shadow-lg">
              <h2 className="font-semibold dark:text-gray-300 text-gray-700 text-xl">{todo.title}</h2>
              <p className="text-gray-500">  {formatDate(todo.createdAt)}</p>
              <p className="mt-2 text-sm text-gray-300">{todo.content.substring(0, 30)}</p>
              <p className="text-violet-500">{todo.tags}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold mb-4 ">Liked Posts</h3>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(6)].map((_, index) => (
                <SkeletonPost key={index} />
              ))}
            </div>
          }>
          <LikedPosts />
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;

const SkeletonUser = () => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 animate-pulse">
      <div className="flex items-center space-x-6">
        {/* Avatar Placeholder */}
        <div className="w-24 h-24 rounded-full bg-gray-200"></div>
        <div className="flex-1">
          {/* Name Placeholder */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          {/* Email Placeholder */}
          <div className="h-5 bg-gray-200 rounded w-1/2 mb-2"></div>
          {/* Verified Placeholder */}
          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
          {/* Joined Date Placeholder */}
          <div className="h-5 bg-gray-200 rounded w-1/4 mt-2"></div>
        </div>
      </div>
    </div>
  );
};
