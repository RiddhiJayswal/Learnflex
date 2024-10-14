import { PauseCircle, PlayCircle } from 'lucide-react';
import React, { useState } from 'react';

function ChapterNav({ course, userCourse }) {
  // Handle loading state for course data
  if (!course || !course.chapter) {
    return <div>Loading...</div>; 
  }

  const[activeIndex,setActiveIndex]=useState(0);

  return (
    <div>
      <div className='border-b p-5'>
        <h2 className='font-medium text-[20px]'>{course.name || 'Course Name'}</h2>
        <h2 className='text-gray-500 text-[14px]'>By {course.author || 'Author Name'}</h2>
      </div>

      <div>
        {/* Map over chapters only if course.chapter is available */}
        {course.chapter.map((chapter, index) => (
          <div key={index}
          onClick={()=>setActiveIndex(index)} 
          className={`flex items-center gap-2 text-gray-500 text-[16px] p-4 px-5 cursor-pointer hover:bg-gray-100
          ${activeIndex==index?'bg-green-100 text-green-700':null}`}>
           {activeIndex == index?<PauseCircle/>:<PlayCircle/>} 
            <h2 className='text-[14px]'>{chapter.name || 'Chapter Name'}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterNav;
