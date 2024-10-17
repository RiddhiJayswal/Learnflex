"use client";
export const dynamic = "force-dynamic";

import React, { useEffect, useState } from 'react';
import ChapterNav from './_components/ChapterNav';
import FullVideoPlayer from './_components/FullVideoPlayer';
import { useUser } from '@clerk/nextjs';
import { getCourseById } from '@/app/(home)/_services';

function ViewCourse({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [userCourse, setUserCourse] = useState([]);
  const [activeChapter, setActiveChapter] = useState(null); // New state for the active chapter

  useEffect(() => {
    if (user) {
      getCourse();
    }
  }, [user]);

  const getCourse = async () => {
    await getCourseById(params?.courseId, user?.primaryEmailAddress.emailAddress)
      .then(resp => {
        console.log(resp);
        setCourse(resp.courseList);
        setUserCourse(resp.userEnrollCourses);

        // Set the initial active chapter if there are chapters in the course list
        if (resp.courseList && resp.courseList.length > 0) {
          setActiveChapter(resp.courseList[0]); // Set the first chapter as the default active chapter
        }
      });
  };

  return (
    <div className='flex'>
      <div className='w-72 border shadow-sm h-screen z-50'>
        <ChapterNav course={course} userCourse={userCourse} setActiveChapter={setActiveChapter} /> {/* Pass setActiveChapter to ChapterNav */}
      </div>
      <div>
        <FullVideoPlayer activeChapter={activeChapter} /> {/* Pass activeChapter to FullVideoPlayer */}
      </div>
    </div>
  );
}

export default ViewCourse;
