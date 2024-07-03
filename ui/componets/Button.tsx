'use client';
import React, { useState } from 'react';

const Button = () => {
    const [count, setCount] = useState(0);

    

    return (
        <div>
            <button className="btn" onClick={() => setCount(count + 1)}>
                Increase
            </button>
            <p className="text-dark">Count is  {count}</p>
            <button className="btn" onClick={() => setCount(count - 1)}>
                Decrease
            </button>
        </div>
    );
}

export default Button;

