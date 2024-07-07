import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from '@/ui/fonts'; // Ensure this import is correct and points to your font file

const Header = () => {
  return (
    <header>
      <nav className={`bg-gray-800 p-4 shadow-md ${lusitana.className}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" passHref>
              <Image src="/logo.png" alt="logo" width={50} height={50} />
            </Link>
            <Link href="/" passHref>
              <span className="mx-4 text-white hover:text-blue-500 transition-colors duration-300">
                Home
              </span>
            </Link>
            <Link href="/testing" passHref>
              <span className="mx-4 text-white hover:text-blue-500 transition-colors duration-300">
                Testing
              </span>
            </Link>
            <Link href="/dashboard" passHref>
              <span className="mx-4 text-white hover:text-blue-500 transition-colors duration-300">
                Dashboard
              </span>
            </Link>
            <Link href="/askai"> 
            <span className="mx-4 text-white hover:text-blue-500 transition-colors duration-300">
                Ask AI
              </span>
            
            </Link>
          </div>
          <div className="flex items-end">
            <Link href="/sign-in" passHref>
              <span className="text-white mx-2 hover:text-blue-500 transition-colors duration-300">
                Sign In
              </span>
            </Link>
            <Link href="/sign-up" passHref>
              <span className="text-white mx-2 hover:text-blue-500 transition-colors duration-300">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;

