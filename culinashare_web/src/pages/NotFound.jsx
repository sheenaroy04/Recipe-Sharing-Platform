import React from 'react'
import not_found from '../images/not_found.png';
const NotFound = () => {
  return (
    <div className='w-[100vw] h-[80vh] flex items-center justify-center'>

      <img src={not_found} alt=''/>
    </div>
  )
}

export default NotFound