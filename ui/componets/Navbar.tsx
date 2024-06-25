import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className=' text-center'>
    <Link href="/">Home</Link>
    <Link href="/testing">Testing</Link> 
    
    </nav>
  )
}

export default Navbar