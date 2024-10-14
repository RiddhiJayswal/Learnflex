import React from 'react';

function ChapterNav({ course, userCourse }) {
  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <div>
          <h2>{course.name}</h2>
          <h2>{course.author}</h2>
        </div>
      </div>
    </div>
  );
}

export default ChapterNav;
