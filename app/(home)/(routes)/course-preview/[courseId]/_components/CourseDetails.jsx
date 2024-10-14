import React from 'react'
import { Book } from 'lucide-react';

function CourseDetails({courseDetail}) {
  return (
    <div className='mt-5 p-5 rounded-lg border'>
        <h2 className='text-[20px] font-medium'>{courseDetail.name}</h2>
        <div className='flex items-center gap-2 mt-2'>
        <Book className='h-6 w-6 text-pink-600 rounded-full bg-purple-100'/>
        <h2 className='text-[12px] text-gray-400'>{courseDetail?.totalChapters} Chapters</h2>
        </div>
        <p className='line-clmp-6 mt-5 text-gray-500'>{courseDetail.description}</p>
    </div>
  )
}

export default CourseDetails