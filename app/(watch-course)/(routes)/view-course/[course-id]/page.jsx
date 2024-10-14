"use client"
import React , { useEffect, useState } from 'react'
import ChapterNav from './_components/ChapterNav'
import FullVideoPlayer from './_components/FullVideoPlayer'
import { useUser } from '@clerk/nextjs'
import { getCourseById } from '@/app/(home)/_services';

function ViewCourse({params}) {
  const {user}=useUser();
  const [course,setCourse]=useState([]);
  const[userCourse,setUserCourse]=useState([]);
  useEffect(()=>{
    user?getCourse():null;
  },[user])

  const getCourse=async()=>{
    await getCourseById(params?.courseId,user?.primaryEmailAddress.emailAddress)
    .then(resp=>{
      console.log(resp);
      setCourse(resp.courseList);
      setUserCourse(resp.userEnrollCourses)
    })
  }
  return (
    <div className='flex'>
        <div className='w-64 border shadow-sm h-screen z-50'>
          <ChapterNav course={course} userCourse={userCourse}/>
        </div>
        <div>
          <FullVideoPlayer/>
        </div>
    </div>
  )
}

export default ViewCourse