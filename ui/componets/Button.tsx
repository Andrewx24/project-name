'use client';
import '@/styles/globals.css';
import React, {useState} from 'react'

const Button = () => {
    const [count, setCount] = useState(0);
  return (
    <div>

        <button  className='btn'   onClick={() => setCount(count + 1)}>Click me</button>
        <p>Count: {count}</p>
        <button className='btn' onClick={() => setCount(count - 1)}>Click me</button>
        </div>
  )
}

export default Button