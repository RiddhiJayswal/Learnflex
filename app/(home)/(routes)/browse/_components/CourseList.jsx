import React from 'react';
import Image from 'next/image';
import { Book, Youtube } from 'lucide-react';
import Link from 'next/link';

function CourseList({ courses }) {
  return (
    <div className='mt-5 ml-3 grid grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-5'>
      {courses.map((course) => (
        <Link key={course.id} href={'/course-preview/' + course.id}>
          <div className='border rounded-lg p-2 cursor-pointer hover:border-pink-300'>
            <Image
              src={course.banner.url}
              alt={course.name}
              width={1000}
              height={500}
              className='rounded-lg'
            />
            <div className='mt-2'>
              <h2 className='text-[18px] md:text-[16px] font-medium'>{course.name}</h2>
              <h2 className='text-gray-400 text-[13px]'>{course.author}</h2>
              
              {course.totalChapters ? (
                <div className='flex items-center gap-2'>
                  <Book className='h-6 w-6 text-pink-600 rounded-full bg-purple-100'/>
                  <h2 className='text-[12px] text-gray-400'>{course.totalChapters} Chapters</h2>
                </div>
              ) : null}

              {course.youtubeUrl ? (
                <div className='flex items-center gap-2'>
                  <Youtube className='h-6 w-6 text-pink-600 rounded-full bg-purple-100'/>
                  <h2 className='text-[12px] text-gray-400'>Watch on YouTube</h2>
                </div>
              ) : null}

              <h2 className='mt-2 text-[14px]'>{course.free ? 'Free' : 'Paid'}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CourseList;
