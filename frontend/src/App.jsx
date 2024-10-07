import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About/About";
import ThemeToggle from "./UI/ThemeToggle";
import Blog from "./pages/Blog/Blog";
import Projects from "./pages/Projects/Projects";
import BlogPostDetail from "./pages/Blog/BlogDetails";
import { EmailVerification } from "./UI/EmailVerification";
import { Toaster } from "react-hot-toast";
import { useStoreAuth } from "./store/authStore";
import Dashboard from "./pages/Dashboard";
import { ForgotPassword } from "./auth/ForgotPassword";
import  ResetPasswordPage  from "./auth/ResetPasswordPage";
import Login from './auth/Login';
import { SignUp } from './auth/sign-up';

function App() {
  const { checkAuth, isAuthenticated, user, isCheckingAuth } = useStoreAuth();
  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setIsDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <BrowserRouter>
      <div className="flex flex-col items-center">
        <Navbar>
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        </Navbar>
        <main className="flex-grow w-[80%] my-[7.5rem] flex justify-center ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-email" element={<EmailVerification />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/reset-password/:token"
              element={<ResetPasswordPage />}
            />
          </Routes>
          <Toaster />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
