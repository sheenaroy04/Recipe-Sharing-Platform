import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

const RecipePostRoute = () => {
  const user = useSelector(state => state.user);
  const navigation = useNavigate()

  return user ? <Outlet/>: (
    <>
    <Modal isOpen={true} openPage={'login'} onClose={()=>navigation('/')}  /> 
    </>
  
  ) 

}

export default RecipePostRoute