import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SideBar = ({isSideBarOpen}) => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('access_token');
    navigate('/')
    window.location.reload();
    
  }
    
  return (
    <div className={`fixed w-64 z-30 bg-slate-600/80 h-full transition duration-300 ease-in-out 
                    top-0  right-0 flex items-center justify-center
                    ${isSideBarOpen ? 'translate-x-0' : 'translate-x-full'} `}>
        <div className='h-1/2 w-full flex flex-col items-start'>
          <Link to='/' className='text-white text-xl font-poppins w-full text-left px-4 py-2 hover:text-orange-700'>
            Home
          </Link>
          <Link to={user&&`/profile/${user.userId}`} className='text-white text-xl font-poppins w-full text-left px-4 py-2 hover:text-orange-700'>
            Profile
          </Link> 
          <Link className='text-white text-xl font-poppins w-full text-left px-4 py-2 hover:text-orange-700'>
            Bookmarks
          </Link>
          <Link onClick={logout} className='text-white text-xl font-poppins w-full text-left px-4 py-2 hover:text-orange-700'>
            Logout
          </Link>
        </div>
    </div>
  )
}

export default SideBar