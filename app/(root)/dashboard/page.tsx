import React from 'react'
import Search from '../testing/search'
import { open_sans } from '@/ui/fonts'


const page = () => {
  return (
    <div> 
      <h1 className= {`text-center text-5xl ${open_sans}`}> Dashboard Page </h1>
      <Search/>

    </div>
  )
}

export default page