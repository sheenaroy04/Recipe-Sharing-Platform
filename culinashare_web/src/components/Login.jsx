import React from 'react'

const Login = () => {
  return (
    <div className='w-full  h-full flex flex-col items-center justify-center gap-6'>
        
        <input className=' w-[80%] focus:border-0 text-black text-lg px-2 py-2 border bg-transparent border-slate-600  placeholder-black rounded-md' type='email' placeholder='Enter your email...'/>
        <button className='w-[80%] bg-orange-600  p-1  text-xl text-white font-regular'>Login</button>
    </div>
  )
}

export default Login