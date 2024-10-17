import { CheckCircle2 } from 'lucide-react';
import React, { useEffect } from 'react';

function FullVideoPlayer({ activeChapter }) {
  useEffect(() => {
    console.log('activeChapter:', activeChapter);
  }, [activeChapter]);

  if (!activeChapter) {
    return <div>Loading</div>;
  }

  if (!activeChapter.video) {
    return <div>No video data available for this chapter</div>;
  }

  if (!activeChapter.video.url) {
    return <div>No video URL available for this chapter</div>;
  }

  return (
    <div className='p-5'>
      <video 
        width="1000" 
        height="260" 
        key={activeChapter.video.url} 
        controls 
        controlsList='nodownload'
      >
        <source src={activeChapter.video.url} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='p-5 border rounded-lg mt-5 flex justify-between items-center'>
        <h2 className='text-[20px] font-medium'>{activeChapter.name}</h2>
        <button className='bg-purple-500 text-white p-2 px-5 rounded-lg flex gap-2 hover:bg-purple-800'>
          <CheckCircle2/><h2>Mark as Completed</h2>
        </button>
      </div>
    </div>
  );
}

export default FullVideoPlayer;
