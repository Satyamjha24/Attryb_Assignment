import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import { Button, Heading } from '@chakra-ui/react';
import { logoutFun } from '../Redux/Authentication/action';

const Navbar = () => {
  const dispatch=useDispatch()
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const handleLogout=()=>{
   localStorage.removeItem('token') 
   localStorage.removeItem('status')
   dispatch(logoutFun())
  }
  return (
    <div id='box'>
      <Link to="/"> <Heading color={'red.400'}>CAR'S</Heading></Link>
        <Link to="/">Market</Link>
        <Link to="/oem">Add car </Link>
        <Link to="/dealer">Your Inventory</Link>
        {!isAuth && (
          <Link to="/login">
            <Button colorScheme="teal" size="md">
              Sign In
            </Button>
          </Link>
        )}

        {isAuth && (
          <Link to="/" onClick={handleLogout}>
            <Button colorScheme="teal" size="md">
              Sign Out
            </Button>
          </Link>
        )}
        {!isAuth && <Link to="/register">Sign Up</Link>}
    </div>
  )
}

export default Navbar