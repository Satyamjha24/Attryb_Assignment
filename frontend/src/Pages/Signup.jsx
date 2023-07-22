import React, { useState } from 'react'
import { registerDealer } from '../Redux/Authentication/action';
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { Box, Button, Input } from '@chakra-ui/react';

const Signup = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const registerState = { name: "", email: "", password: "" }
  const [register, setRegister] = useState(registerState)

  const handleRegister = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value })
  }

  const signupHandler = () => {
     console.log(register);
     if(register.name!="" && register.email!="" && register.password!=""){
      dispatch(registerDealer(register))
      alert('Registration successful')
      navigate('/login')
     }else{
      alert('Please fill all the fields')
      return
     }  
  }
  return (
    <Box w={'40%'} m={'auto'}>
      <h2>Signup Page</h2>
      <Input name="name" type="text" onChange={handleRegister} placeholder='Name' /><br /><br />
      <Input name="email" type="text" onChange={handleRegister} placeholder='Email' /><br /><br />
      <Input name="password" type="text" onChange={handleRegister} placeholder='Password' /><br /><br />
      <Button onClick={signupHandler}>Register</Button>
    </Box>
  )
}

export default Signup