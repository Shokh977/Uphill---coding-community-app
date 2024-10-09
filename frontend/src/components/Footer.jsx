import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="dark:bg-gray-900 dark:text-gray-300 bg-gray-100 py-8 w-[80%] rounded-lg">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-400">
              Passionate frontend developer with a love for crafting intuitive,
              beautiful, and responsive web applications. I enjoy bringing ideas
              to life in the browser.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="hover:text-blue-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-500">
                  Skills
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-500">
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
            <div className="flex space-x-6 text-3xl justify-center">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/Shokh977"
                className="hover:text-gray-500">
                <FaGithub />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.linkedin.com/in/abdulazizov-shokhrukh-b7a6b2225/"
                className="hover:text-blue-500">
                <FaLinkedin />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" to="https://www.youtube.com/@shokh_tv"
              className="hover:text-red-500">
                <FaYoutube />
              </Link>
            </div>
            <p className="mt-4 text-gray-400">Email: Uphill7165@gmail.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} 쇼크룩. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
