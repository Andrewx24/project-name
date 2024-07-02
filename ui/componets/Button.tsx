'use client';
import React, { useState } from 'react';

const Button = () => {
    const [count, setCount] = useState(0);

    function counting() {
        if (count === 5) {
            return alert('You have reached the maximum count');
        } else {
            return count;
        }
    }

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

