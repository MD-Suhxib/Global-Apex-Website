"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Replacement with Text */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-black font-bold text-xl">GLOBAL APEX</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="#hero" className="text-black hover:text-gray-900">
              HOME
            </Link>
            <Link href="#about" className="text-black hover:text-gray-800">
              ABOUT
            </Link>
            <Link href="#products" className="text-black hover:text-gray-800">
              PRODUCTS
            </Link>
            <Link href="#work" className="text-black hover:text-gray-800">
              WORK
            </Link>
            <Link href="/#contact" className="text-black hover:text-gray-800">
              CONTACT US
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              href="/"
              className="block px-3 py-2 text-black hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 text-black hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 text-black hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              PRODUCTS
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 text-black hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              PROJECTS
            </Link>
            <Link
              href="/promotions"
              className="block px-3 py-2 text-black hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 