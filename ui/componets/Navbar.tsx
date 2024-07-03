import React from 'react';
import Link from 'next/link';
import { lusitana } from '@/ui/fonts';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className={`bg-gray-800 p-4 shadow-md ${lusitana.className}`}>
      <div className="container mx-auto flex  justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
          </Link>
          <Link href="/" className="mx-4 text-white hover:text-blue-500 transition-colors duration-300">
            Home
          </Link>
          <Link href="/testing" className="mx-4 text-white hover:text-blue-500 transition-colors duration-300">
            Testing
          </Link>
          <Link href="/dashboard" className="mx-4 text-white hover:text-blue-500 transition-colors duration-300">
            Dashboard
          </Link>
        </div>
        <div className="flex  items-end">
          <Link href="/sign-in" className="text-white mx-2 hover:text-blue-500 transition-colors duration-300">
            Sign In
          </Link>
          <Link href="/sign-up" className="text-white mx-2 hover:text-blue-500 transition-colors duration-300">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
