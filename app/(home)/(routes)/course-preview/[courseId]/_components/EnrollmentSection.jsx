import { EnrollCourse, PublishCourse } from '@/app/(home)/_services';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react';

function EnrollmentSection({ courseDetail, userCourse }) {
  const { user } = useUser();
  const router = useRouter();

  const enrollCourse = async () => {
    if (user) {
      await EnrollCourse(courseDetail.id, user.primaryEmailAddress.emailAddress)
        .then(async (resp) => {
          console.log("EnrollCourseResp=>", resp);
          if (resp) {
            await PublishCourse(resp?.createUserEnrollCourse?.id)
              .then(result => {
                console.log(result);
                if(result){
                  router.push('/view-course/'+courseDetail.id)
                }
              });
          }
        });
    } else {
      router.push('/sign-in');
    }
  };

  console.log("userCourse", userCourse);

  return (
    <div>
      {userCourse?.courseId? (
        <div className='mt-5 border rounded-lg p-2 text-center'>
          <h2 className='text-gray-500'>Continue to Build Project, Access Source code and Track your Progress for free</h2>
          <button className='p-2 w-full bg-pink-500 text-white border rounded-lg text-[14px] mt-2 hover:bg-pink-700'
          onClick={()=> router.push('/view-course/'+courseDetail.id)}>Continue</button>
        </div>
      ) : null}
      {courseDetail.free&&!userCourse?.courseId? (
        <div className='mt-5 border rounded-lg p-2 text-center'>
          <h2 className='text-gray-500'>Learn and Build Project, Access Source code and Track your Progress for free</h2>
          <button className='p-2 w-full bg-pink-500 text-white border rounded-lg text-[14px] mt-2 hover:bg-pink-700' onClick={enrollCourse}>Enroll Now</button>
        </div>
      ) : !userCourse?.courseId?(
        <div className='mt-5 border rounded-lg p-2 text-center'>
          <h2 className='text-gray-500'>Buy this course, Source code and Track your progress for free</h2>
          <button className='p-2 w-full bg-pink-500 text-white border rounded-lg text-[14px] mt-2 hover:bg-pink-700'>Buy course for $1.55</button>
        </div>
      ):null}
      <div className='mt-5 border rounded-lg p-2 text-center'>
        <h2 className='text-gray-500'>Buy monthly membership and get access to all courses, Source code and Track your progress for free</h2>
        <button className='p-2 w-full bg-pink-500 text-white border rounded-lg text-[14px] mt-2 hover:bg-pink-700'>Buy Membership $4.99/Month</button>
      </div>
    </div>
  );
}

export default EnrollmentSection;
