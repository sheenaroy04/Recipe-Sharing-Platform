import React from 'react'

const Signup = () => {
  return (
    <div className='w-full  h-full flex flex-col items-center justify-center gap-6'>

        <input className='w-[80%] text-lg focus:border-0 border border-slate-600 bg-transparent text-black px-2 py-2 placeholder-black  rounded-md' type='text' placeholder='Enter your username...'/>
        <input className='w-[80%] text-lg focus:border-0 border border-slate-600 bg-transparent text-black px-2 py-2 placeholder-black  rounded-md' type='email' placeholder='Enter your email...'/>
        <button className='w-[80%]  p-1  text-xl bg-orange-600 text-white font-regular'>Register</button>
    </div>
  )
}

export default Signup