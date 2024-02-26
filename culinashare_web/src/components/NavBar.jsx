import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import logo from '../images/culinashare_logo.png';
import { UserIcon } from "@heroicons/react/24/outline";
import {  useSelector } from 'react-redux';

const NavBar = () => {
  const[isModalOpen , setIsModalOpen] = useState(false);
  const[openPage , setOpenPage] = useState('');
  const user = useSelector(state =>  state.user);

  const[isNavVisible , setIsNavVisible] = useState(true);
  const[lastScrollY , setLastScrollY] = useState(0);

  const modalOpen = (openPage) =>{
    setIsModalOpen(true);
    setOpenPage(openPage)
  }

  const modalClose = () =>{
    setIsModalOpen(false);
    setOpenPage('')
  }

  const controlNavBar = () =>{
    if(typeof window !== 'undefined'){
      if(window.scrollY > lastScrollY){
        setIsNavVisible(false);
      }
      else{
        setIsNavVisible(true)
      }
      setLastScrollY(window.scrollY);
    }
  }

  useEffect(() => {
    if(typeof window !== 'undefined'){
      window.addEventListener('scroll' , controlNavBar);

      return () => window.removeEventListener('scroll',controlNavBar);
    }
  },[lastScrollY])
  return (
    <div className={`h-16 flex items-center justify-between px-2 md:px-6
                   fixed top-0 w-[100vw] bg-gradient-to-br transition-transform duration-300
                    ease-in-out from-slate-900/90 to-slate-700/90 z-20
                    ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}
                    `}>
        
        <img src={logo} className='h-16 w-[40vw] md:w-[14vw] lg:[18vw]' alt='logo' />
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