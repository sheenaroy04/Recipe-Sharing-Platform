import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({isSideBarOpen}) => {
    
  return (
    <div className={`fixed w-64 z-20 bg-slate-600/90 h-full transition duration-300 ease-in-out 
                    top-0  right-0 flex items-center justify-center
                    ${isSideBarOpen ? 'translate-x-0' : 'translate-x-full'} `}>
        <div className='h-1/2 w-full flex flex-col items-start'>
          <Link to='/' className='text-white text-xl font-poppins w-full text-left px-4 py-2 hover:text-orange-700'>
            Home
          </Link>
          <Link to='/profile' className='text-white text-xl font-poppins w-full text-left px-4 py-2 hover:text-orange-700'>
            Profile
          </Link> 
          <Link className='text-white text-xl font-poppins w-full text-left px-4 py-2 hover:text-orange-700'>
            Bookmarks
          </Link>
          <Link className='text-white text-xl font-poppins w-full text-left px-4 py-2 hover:text-orange-700'>
            Logout
          </Link>
        </div>
    </div>
  )
}

export default SideBar