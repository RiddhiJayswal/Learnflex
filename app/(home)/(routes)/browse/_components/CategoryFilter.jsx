"use client";
import React, { useState } from 'react';

function CategoryFilter() {
  const [activeIndex, setActiveIndex] = useState(0); 
  const filterOptions = [
    {
      id: 1,
      name: 'All',
      value: 'all'
    },
    {
      id: 2,
      name: 'React js',
      value: 'react js'
    },
    {
      id: 3,
      name: 'Firebase',
      value: 'firebase'
    },
    {
      id: 4,
      name: 'Talwind Css',
      value: 'talwind css'
    },
  ];

  return (
    <div className='flex gap-2'>
      {filterOptions.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)} 
          className={`border p-2 mt-4 ml-4 px-5 text-sm rounded-md hover:border-purple-800 font-semibold hover:bg-gray-50
             ${activeIndex === index ? 'border-purple-800 bg-purple-50 text-purple-800' : ''}`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
