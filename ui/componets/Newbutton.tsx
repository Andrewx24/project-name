'use client';
import React from 'react'

const Newbutton = () => {
 function handleClick() {
     alert('Button clicked')
 }
  return (
    <div>
        <button onClick={handleClick} className='btn'>Click Me Again </button>


    </div>
  )
}

export default Newbutton