import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className=' text-center'>
    <Link href="/">Home</Link>
    <Link href="/testing">Testing</Link> 
    <Link href="/dashboard">Dashboard</Link>
    
    </nav>
  )
}

export default Navbar