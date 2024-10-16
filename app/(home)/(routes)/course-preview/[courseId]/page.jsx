"use client";
import React, { useEffect, useState } from 'react';
import { getCourseById } from '@/app/(home)/_services';
import VideoPlayer from './_components/VideoPlayer';
import CourseDetails from './_components/CourseDetails';
import OptionSection from './_components/OptionSection';
import EnrollmentSection from './_components/EnrollmentSection';
import { useUser } from '@clerk/nextjs';

function CoursePreview({ params }) {
  const [courseDetail, setCourseDetails] = useState([]);
  const [userCourse, setUserCourse] = useState([]);

  const { user } = useUser();
  useEffect(() => {
    if (params.courseId) {
      getCourse(params.courseId, user?.primaryEmailAddress?.emailAddress);
    }
  }, [user]);

  const getCourse = (courseId, email) => {
    getCourseById(courseId, email).then(resp => {
      console.log(resp);
      setCourseDetails(resp.courseList);
      setUserCourse(resp?.userEnrollCourses[0]);
    });
  };

  return courseDetail?.name && (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='col-span-2 m-3'>
          {courseDetail?.chapter[0] ? (
            <VideoPlayer videoUrl={courseDetail?.chapter[0]?.video.url} />
          ) : null}
          <CourseDetails courseDetail={courseDetail} />
        </div>
        <div className='mt-5'>
          <OptionSection />
          <EnrollmentSection courseDetail={courseDetail} userCourse={userCourse} />
        </div>
      </div>
    </div>
  );
}

export default CoursePreview;
