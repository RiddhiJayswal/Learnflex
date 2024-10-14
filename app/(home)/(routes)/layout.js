import React from 'react'
import SideBarNav from '../_components/SideBarNav'
import Header from '../_components/Header'


function homeLayout({children}) {
  return (
    <div>
        <div className='h-full w-64 md:flex flex-col fixed inset-y-0 z-50 hidden'>
            <SideBarNav/>
        </div>
        <Header/>
        <div className='ml-64'>
        {children}
        </div>
        </div>
  )
}

export default homeLayout