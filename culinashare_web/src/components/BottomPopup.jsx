import React from 'react'
import { XCircleIcon } from "@heroicons/react/20/solid";
const BottomPopup = ({showPopup,message}) => {
  if (!showPopup) return null;
  return (
    <div className='fixed bottom-10 z-50 left-10 w-1/3 px-6 py-2 rounded-full backdrop-blur-md 
                    shadow-md bg-slate-800/70 flex flex-row'>
      <p className='flex-1 text-white font-poppins text-lg'>{message}</p>
      {/* <XCircleIcon className="h-6 w-6 text-gray-500" /> */}
    </div>
  )
}

export default BottomPopup