'use client';
import React, { useState } from 'react';

const Form = () => {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Basic form validation
    if (e.target.name.value && e.target.email.value && e.target.message.value) {
      setSubmit(true);
      // Further logic for form submission can be added here
    } else {
      alert('Please fill out all fields');
    }
  }
  
  return (
    
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Submit</button>
      </form>
    
  )
}

export default Form;
