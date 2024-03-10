import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SideBar = ({isSideBarOpen , setIsSideBarOpen}) => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const currentLoc = useLocation();

  const handleNavigate = (loc) =>{
    if(user){
      navigate(loc);
      setIsSideBarOpen(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token')
    navigate('/')
    window.location.reload();
    
  }

  useEffect(() =>{

    const closeBar =() =>{
      setIsSideBarOpen(false)
    }
    window.addEventListener('beforeunload' , closeBar);

    closeBar();
  },[currentLoc])
    
  return (
    <div className={`fixed w-64 z-30 bg-slate-600/80 h-full transition duration-300 ease-in-out 
                    top-0  right-0 flex items-center justify-center
                    ${isSideBarOpen ? 'translate-x-0' : 'translate-x-full'} `}>
        <div className='h-1/2 w-full flex flex-col items-start'>
          <button onClick={() => handleNavigate('/')} className='text-white text-xl font-poppins w-full text-left px-4 py-2 hover:text-orange-700'>
            Home
          </button>
          <button onClick={()=>handleNavigate(`/profile/${user.userId}`)} className='text-white text-xl font-poppins w-full text-left px-4 py-2 hover:text-orange-700'>
            Profile
          </button> 
          {/* <Link className='text-white text-xl font-poppins w-full text-left px-4 py-2 hover:text-orange-700'>
            Bookmarks
          </Link> */}
          <Link onClick={logout} className='text-white text-xl font-poppins w-full text-left px-4 py-2 hover:text-orange-700'>
            Logout
          </Link>
        </div>
    </div>
  )
}

export default SideBar