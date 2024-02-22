import React, { useState } from 'react'

const Login = () => {

  const loginUser = async () =>{
    const data = {
      username : username,
      password : password
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/v1/customers/users/login/`,{
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

  const [username , setUserName] = useState('');
  const[password , setPassword] = useState('');
  return (
    <div className='w-full  h-full flex flex-col items-center justify-center gap-6'>
        
        <input value={username} onChange={(e) =>setUserName(e.target.value) } className=' w-[95%] focus:border-0 text-black text-lg px-2 py-2 border bg-transparent border-slate-600  placeholder-black rounded-md' type='text' placeholder='Username'/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} className=' w-[95%] focus:border-0 text-black text-lg px-2 py-2 border bg-transparent border-slate-600  placeholder-black rounded-md' type='password' placeholder='Password'/>
        <button onClick={loginUser} className='w-[95%] bg-orange-600  p-1  text-xl text-white font-regular'>Login</button>
    </div>
  )
}

export default Login