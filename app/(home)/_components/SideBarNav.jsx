"use client"
import { ArchiveIcon, Captions, Circle, FileArchiveIcon, Layout, Mail, Search, Shield } from 'lucide-react'
import React, { useState } from 'react'

function SideBarNav() {
    const menulist=[
        {
            id:1,
            name:'Browse',
            icon: Search,
            path:'/browse',
        },
        {
            id:2,
            name:'Dashboard',
            icon: Layout,
            path:'/dashboard',
        },
        {
            id:3,
            name:'NewsLetter',
            icon: Mail,
            path:'/Newsletter',
        },
        {
            id:4,
            name:'Projects',
            icon: Circle,
            path:'/projects',
        },
        {
            id:5,
            name:'Internship',
            icon: Captions,
            path:'/internship',
        },
        {
            id:6,
            name:'Certificates',
            icon: FileArchiveIcon,
            path:'/certificate.jsx',
        },
    ]
    const [activeIndex,setActiveIndex]=useState(0);
  
    return (
        
            <div className='h-full  bg-white border-r flex flex-col overflow-y-auto shadow-md'> {/* Adjusted width and removed 'h-full' */}
                <div className='p-5 border-b z-50'>
                    <img src="/logo.png" alt="" width={170} height={100}/>
                </div>

                <div className='flex flex-col'>
                    {menulist.map((item,index)=>(
                        <div
                            key={item.id}  
                            className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-100 cursor-pointer ${activeIndex==index?'bg-pink-50 text-purple-900':null} `}
                            onClick={()=>setActiveIndex(index)}>
                            
                            <item.icon/>
                            <h2>{item.name}</h2>
                        </div>
                    ))}
                </div>
            </div>

            
        
    )
}

export default SideBarNav; {/* Ensure to export the component */}
