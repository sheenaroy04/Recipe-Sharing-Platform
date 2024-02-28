import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector(state => state.user);
  const backendUrl = process.env.REACT_APP_BASE_API_URL;
  const[posted , setPosted] = useState([])
  const getProfileDetails = async() =>{
    try {
      const getUserProfile = await fetch(`${backendUrl}/food/recipies/author=${user.userId}`);
      const responseData = await getUserProfile.json();
      console.log(responseData);
      setPosted(responseData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProfileDetails();
  },[])

  return (
    <div className='w-full min-h-[100vh] flex items-center justify-center '>
      <div className='w-[80%] h-[40vw] grid grid-cols-2  justify-center backdrop-blur-md shadow-xl rounded-lg mt-16 p-4 md:p-8 bg-white/80'>
          
          <div className='w-full flex items-center flex-col p-4 gap-2 border-r border-black/50'>
            <div className='h-32 w-32 bg-orange-600 rounded-full flex items-center justify-center text-5xl font-semibold text-white font-poppins'>
              {user.userName[0].toUpperCase()}
            </div>
            <p className='text-2xl font-poppins'>{user.userName}</p>
            <div className='flex flex-row w-1/2 items-center justify-between'>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-2xl font-semibold'>Posts</p>
                <p>{posted.length}</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-2xl font-semibold'>Bookmarks</p>
                <p>{posted.length}</p>
              </div>
            </div>
          </div>
          <div>2</div>
       

      </div>
    </div>
  )
}

export default Profile