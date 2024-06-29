import React from 'react';
import Link from 'next/link';
import { Lusitana } from 'next/font/google';
 
const lusitana= Lusitana({subsets: ['latin'], weight: '700'});

const Navbar = () => {
  return (
    <nav className={`text-center text-blue-300 ${lusitana}`}>
      <Link  className="hover:text-blue-500"  href="/">
        Home
      </Link>
      <Link href="/testing">
   Testing
      </Link>
      <Link href="/dashboard">
      Dashboard
      </Link>
    </nav>
  );
};

export default Navbar;
