import React from 'react'
import Search from '../testing/search'
import { open_sans } from '@/ui/fonts'
import a from '@/lib/data'

const page = () => {
  return (
    <div> 
      <h1 className= {`text-center text-5xl ${open_sans}`}> Dashboard Page </h1>
      <Search/>
  <h1> {a} </h1>
  <button > click me</button>
    </div>
  )
}

export default page