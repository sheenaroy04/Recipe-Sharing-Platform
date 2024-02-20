import React from 'react'
import NavBar from '../components/NavBar'
import bg from '../images/welcome.jpeg'

const Home = () => {
    

  return (
    <div>
        <NavBar/>

        <div className='h-[80vh] w-[100vw] bg-center bg-no-repeat bg-cover object-contain' style={{backgroundImage:`url(${bg})`}}>

        </div>
    </div>
  )
}

export default Home