import React from 'react';
import  liveCooking from '../images/live-cooking-unscreen.gif';
import logo from '../images/culinashare_logo.png'

const Loading = ({showLoading}) => {
    if (!showLoading) return null

  return (
    <div  className="fixed inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center font-poppins z-30">
        <img src={logo} className='w-[80vw]  md:w-[30vw] h-[20vh]' alt="" />
        <p className='text-3xl'>Fetching your recipes...</p>
        <img src={liveCooking} alt="" />
        
    </div>
  )
}

export default Loading