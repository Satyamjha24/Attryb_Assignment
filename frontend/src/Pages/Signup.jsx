import React, { useState } from 'react'
import { registerDealer } from '../Redux/Authentication/action';
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux';

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
    <div style={{ width: '100%' }}>
      <h2>Signup Page</h2>
      <input name="name" type="text" onChange={handleRegister} placeholder='Name' /><br /><br />
      <input name="email" type="text" onChange={handleRegister} placeholder='Email' /><br /><br />
      <input name="password" type="text" onChange={handleRegister} placeholder='Password' /><br /><br />
      <button onClick={signupHandler}>Register</button>
    </div>
  )
}

export default Signup