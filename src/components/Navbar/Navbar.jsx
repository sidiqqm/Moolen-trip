"use client";

import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import AuthContext from "@/context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change this based on auth state
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser } = useContext(AuthContext);

  // Navigation links data
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Feature", path: "/features" },
    { name: "About Us", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
  ];

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 py-3 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md"
          : "bg-transparent backdrop-blur-xs shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with Link */}
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/logo-moolen.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-36 md:w-48"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="text-gray-800 hover:text-color-primary transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 ml-6">
            <Link
              href="/search"
              className="bg-color-primary text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200"
            >
              Search
            </Link>
            {currentUser ? (
              <Link
                href="/profile"
                className="flex items-center space-x-2 cursor-pointer"
              >
                <img
                  src={
                    currentUser.avatar ||
                    "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </Link>
            ) : (
              <Link
                href="/login"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {isLoggedIn ? (
            <Link
              href="/profile"
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer mr-4"
              onClick={closeMenu}
            >
              <User className="text-gray-600" />
            </Link>
          ) : (
            <Link
              href="/signin"
              className="bg-black text-white px-4 py-2 rounded-full text-sm mr-4"
              onClick={closeMenu}
            >
              Sign In
            </Link>
          )}
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <ul className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={closeMenu}
                  className="block py-2 text-gray-800 hover:text-color-primary transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/search"
                onClick={closeMenu}
                className="block w-full mt-2 bg-color-primary text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200 text-center"
              >
                Search
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
