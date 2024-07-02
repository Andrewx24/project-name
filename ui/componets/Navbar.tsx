import React from 'react';
import Link from 'next/link';
import { Lusitana } from 'next/font/google';

const lusitana = Lusitana({ subsets: ['latin'], weight: '700' });

const Navbar = () => {
  return (
    <nav className={`bg-gray-800 p-4 shadow-md ${lusitana.className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">
          <Link href="/" className="mx-4 hover:text-blue-500 transition-colors duration-300">
            Home
          </Link>
          <Link href="/testing" className="mx-4 hover:text-blue-500 transition-colors duration-300">
            Testing
          </Link>
          <Link href="/dashboard" className="mx-4 hover:text-blue-500 transition-colors duration-300">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
