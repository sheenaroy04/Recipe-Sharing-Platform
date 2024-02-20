import React from 'react'

const NavBar = () => {
  return (
    <div className='h-14 bg-black flex items-center justify-between px-10 fixed w-[100vw]'>
        <div className='text-white text-2xl font-bold'>
            CulinaShare
        </div>
        <div className='text-white'>
            
                <a className='mx-5' href="#home">Home</a>
                <a className='mx-5' href="#featured">Featured</a>
            
        </div>
    </div>
  )
}

export default NavBar