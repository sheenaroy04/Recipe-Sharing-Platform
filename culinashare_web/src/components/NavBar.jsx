import React, { useState } from 'react'
import Modal from './Modal';

const NavBar = () => {
  const[isModalOpen , setIsModalOpen] = useState(false);
  const[openPage , setOpenPage] = useState('');

  const modalOpen = (openPage) =>{
    setIsModalOpen(true);
    setOpenPage(openPage)
  }

  const modalClose = () =>{
    setIsModalOpen(false);
    setOpenPage('')
  }
  return (
    <div className='h-14 flex items-center justify-between px-10 fixed top-0 w-[100vw] bg-gradient-to-br from-slate-900/90 to-slate-700/90 z-20'>
        <div className='text-white text-4xl font-bold font-dancing-script flex flex-row'>
            <p>Culina</p>
            <p className='text-orange-600'>Share</p>
        </div>
        <div className='text-white flex items-center justify-center gap-4'>
            
                {/* <a  href="#home">Home</a>
                <a  href="#featured">Featured</a> */}
                <button onClick={()=>modalOpen('signup')} className='border border-orange-600 px-4 py-1 text-lg rounded-md font-semibold'>Register</button>
                <button onClick={()=>modalOpen('login')} className='bg-orange-600 px-4 py-1 text-lg rounded-md font-semibold'>Login</button>
                            
        </div>

        <Modal isOpen={isModalOpen} openPage={openPage} setOpenPage={setOpenPage}  onClose={modalClose}/>

    </div>
  )
}

export default NavBar