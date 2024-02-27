import React from 'react'

const SideBar = ({isSideBarOpen}) => {
    
  return (
    <div className={`fixed w-64 z-20 bg-black/50 h-full transition duration-300 ease-in-out top-0  right-0 ${isSideBarOpen ? 'translate-x-0' : 'translate-x-full'} `}>

    </div>
  )
}

export default SideBar