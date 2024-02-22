import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';

const Login = () => {
  const dispatch = useDispatch();
  const [username , setUserName] = useState('');
  const[password , setPassword] = useState('');
  const[responseMessage , setResponseMessage] = useState('');
  const[isResponseError , setIsResponseError] = useState(false);


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
      if(response.status === 400){
          setResponseMessage(responseData.error);
          setIsResponseError(true)
          setTimeout(()=>{
            setResponseMessage('');
            setIsResponseError(false);
          },4000)
      }
      else{
        setResponseMessage(responseData.message);
        // console.log(jwtDecode(responseData.access_token));
        const user = {
          userId : jwtDecode(responseData.access_token).user_id,
          userName : jwtDecode(responseData.access_token).username
        }
        localStorage.setItem('access_token' , responseData.access_token);
        dispatch(setUser(user));
        setTimeout(() =>{
          setResponseMessage('');
          window.location.reload();
        },4000)
      }

      // console.log(responseData);

    } catch (error) {
      console.error(error);
    }
  }

  
  return (
    <div className='w-full  h-full flex flex-col items-center justify-center gap-6'>
        {responseMessage.length > 0 &&
        <div className={`w-[95%] h-10 flex text-white font-semibold items-center justify-center ${isResponseError?'bg-red-700':'bg-green-700'} `}>
          <p>
            {responseMessage}
          </p>
        
        </div>
        }
        <input value={username} onChange={(e) =>setUserName(e.target.value) } className=' w-[95%] focus:border-0 text-black text-lg px-2 py-2 border bg-transparent border-slate-600  placeholder-black rounded-md' type='text' placeholder='Username'/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} className=' w-[95%] focus:border-0 text-black text-lg px-2 py-2 border bg-transparent border-slate-600  placeholder-black rounded-md' type='password' placeholder='Password'/>
        <button onClick={loginUser} className='w-[95%] bg-orange-600  p-1  text-xl text-white font-regular'>Login</button>
    </div>
  )
}

export default Login