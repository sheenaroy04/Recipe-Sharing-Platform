import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import logo from '../images/culinashare_logo.png';

const Modal = ({isOpen , onClose , openPage , setOpenPage}) => {
  if (!isOpen) return null
  return (
    <div   className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center font-poppins z-30">
      <div className=' flex items-center justify-center'>
        <img className='h-[15vh] w-[60vw] sm:[20vw] md:w-[20vw]' src={logo} alt=''/>
      </div>
      <div className="backdrop-blur-md shadow-md bg-[#F0F8FF]/50 p-5 rounded-lg lg:w-[30vw] md:w-[60vw] sm:w-[70vw] w-[95vw]  min-h-[60vh] flex flex-col justify-between">
      
      <div className='w-full flex items-center justify-center'>
        
        <div className='flex flex-row  rounded-full w-[70%] my-2'>
          <button onClick={()=>setOpenPage('login')} className={`p-2 text-center w-[50%]  rounded-full text-xl ${openPage === 'login' && 'bg-slate-600 text-white'} `}>Login</button>
          <button onClick={()=>setOpenPage('signup')} className={`p-2 text-center  w-[50%] rounded-full text-xl ${openPage === 'signup' && 'bg-slate-600 text-white'} `}>Register</button>
        </div>
        
        
      </div>
      
      {openPage ==='login'?(
        <Login/>
      ):(
        <Signup/>
      )}
      
      <button onClick={onClose} className=''>&#10060; Close</button>
      </div>
  </div>
  )
}

export default Modal