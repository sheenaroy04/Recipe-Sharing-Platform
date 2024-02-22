import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '../components/Modal';

const RecipeViewRoute = () => {
  const user = useSelector(state => state.auth);

  return user ? <Outlet/>: (
    <>
    
    <Modal isOpen={true} openPage={'Login'}  /> 
    </>
  
  ) 

}

export default RecipeViewRoute