import React from 'react';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className={`bg-gray-800 p-4 shadow-inner `}>
      <div className="container mx-auto flex justify-between items-center text-white">
        <div className="text-lg">
          &copy; 2024 My Website
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-blue-500 transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-500 transition-colors duration-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors duration-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
