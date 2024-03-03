import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import logo from '../images/culinashare_logo.png';
import { UserIcon } from "@heroicons/react/24/outline";
import {  useSelector } from 'react-redux';
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import SideBar from './SideBar';


const NavBar = () => {
  const[isModalOpen , setIsModalOpen] = useState(false);
  const[openPage , setOpenPage] = useState('');
  const user = useSelector(state =>  state.user);
  const [isMobileScreen , setIsMobileScreen] = useState(false);
  const[isNavVisible , setIsNavVisible] = useState(true);
  const[lastScrollY , setLastScrollY] = useState(0);

  const[isSideBarOpen , setIsSideBarOpen] = useState(false);

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

  useEffect(() =>{
    const handleMobileView = () =>{
      if(typeof window !== null){
        if(window.innerWidth < 550){
          setIsMobileScreen(true);
        }
        else{
          setIsMobileScreen(false);
        }
      }
    }
    window.addEventListener('resize' , handleMobileView);
    return () => window.removeEventListener('resize' , handleMobileView)
  })



  return (
    <>
    <div className={`h-16 flex items-center justify-between px-2 md:px-6 z-50 
                   fixed top-0 w-[100vw] bg-gradient-to-br transition-transform duration-300
                    ease-in-out from-slate-900/90 to-slate-700/90 
                    ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}
                    `}>
        
        <img src={logo} className='h-16 w-[40vw] md:w-[14vw] lg:[18vw]' alt='logo' />
        <div className='text-white flex items-center justify-center gap-2 md:gap-4'>
            
                {/* <a  href="#home">Home</a>
                <a  href="#featured">Featured</a> */}
                {user ? <>

                      <p className='font-poppins text-md md:text-xl font-semibold text-orange-600'>{user.userName}</p>
                      
                      <button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                        <Bars3BottomRightIcon   className="h-10 w-8 text-white font-bold" />
                      </button>
                      
                      </>
                        :
                        <>
                        {isMobileScreen ? 
                          <button onClick={()=>modalOpen('login')} className='border border-orange-600 px-4 py-1 text-l rounded-md font-semibold'>Register/Login</button>
                          :
                          <>
                            <button onClick={()=>modalOpen('signup')} className='border border-orange-600 px-4 py-1 text-lg rounded-md font-semibold'>Register</button>
                        <button onClick={()=>modalOpen('login')} className=' bg-orange-600 px-4 py-1 text-lg rounded-md font-semibold'>Login</button>
                          </>
                      }
                        
                        </>
                        }
                
                            
        </div>

        

    </div>
    <SideBar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}  />
    <Modal isOpen={isModalOpen} openPage={openPage} setOpenPage={setOpenPage}  onClose={modalClose}/>
    </>
  )
}

export default NavBar