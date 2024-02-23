import React, { useState } from 'react'
import Modal from './Modal';
import logo from '../images/culinashare_logo.png';
import { UserIcon } from "@heroicons/react/24/outline";
import {  useSelector } from 'react-redux';

const NavBar = () => {
  const[isModalOpen , setIsModalOpen] = useState(false);
  const[openPage , setOpenPage] = useState('');
  const user = useSelector(state =>  state.user);

  const modalOpen = (openPage) =>{
    setIsModalOpen(true);
    setOpenPage(openPage)
  }

  const modalClose = () =>{
    setIsModalOpen(false);
    setOpenPage('')
  }
  return (
    <div className='h-16 flex items-center justify-between px-10 fixed top-0 w-[100vw] bg-gradient-to-br from-slate-900/90 to-slate-700/90 z-20'>
        {/* <div className='text-white text-4xl font-bold font-dancing-script flex flex-row'>
            <p>Culina</p>
            <p className='text-orange-600'>Share</p>
            
        </div> */}
        <img src={logo} className='h-16 w-[12vw]' alt='logo' />
        <div className='text-white flex items-center justify-center gap-4'>
            
                {/* <a  href="#home">Home</a>
                <a  href="#featured">Featured</a> */}
                {user ? <>
                      <p className='font-poppins text-xl font-semibold text-orange-600'>{user.userName}</p>
                      <UserIcon className="h-7 w-7 text-white font-bold" />
                      </>
                        :
                        <>
                        <button onClick={()=>modalOpen('signup')} className='border border-orange-600 px-4 py-1 text-lg rounded-md font-semibold'>Register</button>
                <button onClick={()=>modalOpen('login')} className='bg-orange-600 px-4 py-1 text-lg rounded-md font-semibold'>Login</button>
                        </>
                        }
                
                            
        </div>

        <Modal isOpen={isModalOpen} openPage={openPage} setOpenPage={setOpenPage}  onClose={modalClose}/>

    </div>
  )
}

export default NavBar