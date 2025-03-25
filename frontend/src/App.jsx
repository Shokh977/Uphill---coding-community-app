import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About/About";
import ThemeToggle from "./UI/ThemeToggle";
import Blog from "./pages/Blog/Blog";
import Projects from "./pages/Projects/Projects";
import TemplatesPage from "./pages/Templates/Templates";
import BlogPostDetail from "./pages/Blog/BlogDetails";
import { EmailVerification } from "./UI/EmailVerification";
import { Toaster } from "react-hot-toast";
import { useStoreAuth } from "./store/authStore";
import Dashboard from "./pages/Dashboard";
import { ForgotPassword } from "./auth/ForgotPassword";
import ResetPasswordPage from "./auth/ResetPasswordPage";
import Login from './auth/Login';
import { SignUp } from './auth/sign-up';
import TodoDetails from "./components/todo/TodoDetails";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";

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
      <div className="flex flex-col items-center overflow-hidden">
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Animated Particle Background */}
        <div className="fixed inset-0 z-[-1] opacity-60">
          <ParticleBackground />
        </div>
        
        <Navbar>
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        </Navbar>
        
        <main className="flex-grow w-[80%] my-[7.5rem] flex justify-center relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <PageTransition>
                  <Home />
                </PageTransition>
              } />
              <Route path="/about" element={
                <PageTransition>
                  <About />
                </PageTransition>
              } />
              <Route path="/blog" element={
                <PageTransition>
                  <Blog />
                </PageTransition>
              } />
              <Route path="/blog/:id" element={
                <PageTransition>
                  <BlogPostDetail />
                </PageTransition>
              } />
              <Route path="/projects" element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              } />
              <Route path="/templates" element={
                <PageTransition>
                  <TemplatesPage />
                </PageTransition>
              } />
              <Route path="/login" element={
                <PageTransition>
                  <Login />
                </PageTransition>
              } />
              <Route path="/sign-up" element={
                <PageTransition>
                  <SignUp />
                </PageTransition>
              } />
              <Route path="/forgot-password" element={
                <PageTransition>
                  <ForgotPassword />
                </PageTransition>
              } />
              <Route path="/verify-email" element={
                <PageTransition>
                  <EmailVerification />
                </PageTransition>
              } />
              <Route path="/dashboard" element={
                <PageTransition>
                  <Dashboard />
                </PageTransition>
              } />
              <Route path="/todo/:id" element={
                <PageTransition>
                  <TodoDetails />
                </PageTransition>
              } />
              <Route path="/reset-password/:token" element={
                <PageTransition>
                  <ResetPasswordPage />
                </PageTransition>
              } />
            </Routes>
          </AnimatePresence>
          <Toaster />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
