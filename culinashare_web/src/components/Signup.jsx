import React, { useState } from 'react'

const Signup = () => {
  const [username , setUserName] = useState('');
  const[email , setEmail] = useState('');
  const[password , setPassword] = useState('');


  const authUrl = process.env.REACT_APP_BASE_URL ;

  const registerNewUser = async () =>{
    const data = {
      username : username,
      email : email,
      password : password
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/v1/customers/users/register/`,{
        method :'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      console.log(responseData);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='w-full  h-full flex flex-col items-center justify-center gap-6'>

        <input value={username} onChange={(e) =>setUserName(e.target.value) } className='w-[95%] text-lg focus:border-0 border border-slate-600 bg-transparent text-black px-2 py-2 placeholder-black  rounded-md' type='text' placeholder='Enter your username...'/>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-[95%] text-lg focus:border-0 border border-slate-600 bg-transparent text-black px-2 py-2 placeholder-black  rounded-md' type='email' placeholder='Enter your email...'/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-[95%] text-lg focus:border-0 border border-slate-600 bg-transparent text-black px-2 py-2 placeholder-black  rounded-md' type='password' placeholder='Create New Password'/>
        <button onClick={registerNewUser} className='w-[95%]  p-1  text-xl bg-orange-600 text-white font-regular'>Register</button>
    </div>
  )
}

export default Signup