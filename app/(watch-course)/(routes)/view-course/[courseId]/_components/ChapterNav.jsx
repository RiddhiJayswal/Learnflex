import React, { useEffect, useState, useCallback, memo } from 'react';
import { PauseCircle, PlayCircle } from 'lucide-react';

const ChapterNav = memo(({ course, setActiveChapter }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (course?.chapter?.length > 0 && typeof setActiveChapter === 'function') {
      setActiveChapter(course.chapter[0]);
    }
  }, [course, setActiveChapter]);

  const handleChapterClick = useCallback((chapter, index) => {
    setActiveIndex(index);
    if (typeof setActiveChapter === 'function') {
      setActiveChapter(chapter);
    }
  }, [setActiveChapter]);

  if (!course || !course.chapter) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='border-b p-5'>
        <h2 className='font-medium text-[20px]'>{course.name || 'Course Name'}</h2>
        <h2 className='text-gray-500 text-[14px]'>By {course.author || 'Author Name'}</h2>
      </div>
      <div>
        {course.chapter.map((chapter, index) => (
          <div 
            key={chapter.id || index}
            onClick={() => handleChapterClick(chapter, index)}
            className={`flex items-center gap-2 text-gray-500 text-[16px] p-4 px-5 cursor-pointer hover:bg-gray-100
            ${activeIndex === index ? 'bg-green-100 text-green-700' : ''}`}
          >
            {activeIndex === index ? <PauseCircle /> : <PlayCircle />}
            <h2 className='text-[14px]'>{chapter.name || 'Chapter Name'}</h2>
          </div>
        ))}
      </div>
    </div>
  );
});

ChapterNav.displayName = 'ChapterNav';

export default ChapterNav;