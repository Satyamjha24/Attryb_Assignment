import React, { useState } from 'react'
import { Box, Button, Input, useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginDealer } from '../Redux/Authentication/action';
const Login = () => {
  const toast = useToast()
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const loginState = { email: "", password: "" }
  const [login, setLogin] = useState(loginState)

  const handleForm = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }



  const loginHandler = () => {
    //console.log(login);
    if (login.email !== "" && login.password !=="") {
      dispatch(loginDealer(login)).then((res) => {
        const token = localStorage.getItem("token");
        const status = localStorage.getItem("status");
        if (token && status==200) {
          toast({
            title: "Login Succesfull.",
            description: "",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Wrong Credentials.",
            description: "Please check your credentials.",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
      });
    }else{
      toast({
              title: 'Some field is Empty.',
              description: "Please check your credentials.",
              status: 'error',
              duration: 3000,
              isClosable: true,
            })
    }
  }

  if(isAuth){
    navigate('/dealer')
  }

    return (
      <Box w={'40%'} m={'auto'}>

        <h2>Login Page</h2>
        <Input className='inputbox' name="email" type="text" onChange={handleForm} placeholder='Email' /><br /><br />
        <Input className='inputbox' name="password" type="text" onChange={handleForm} placeholder='Password' /><br /><br />
        <Button onClick={loginHandler}>Login</Button>
        <p>Not Registered go to <Link to={'/register'}><span>Register</span></Link></p>
      </Box>
    )
  }

export default Login