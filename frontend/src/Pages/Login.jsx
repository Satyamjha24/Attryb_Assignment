import React, { useState } from 'react'
// import styles from '../CSS/login.module.css'
// import '../CSS/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginDealer } from '../Redux/Authentication/action';
const Login = () => {

  const store = useSelector((state) => state.authReducer);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const loginState = { email: "", password: "" }
  const [login, setLogin] = useState(loginState)

  const handleForm = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }
  const loginHandler = async() => {
    //console.log(login);
    if (login.email != "" && login.password != "") {
       dispatch(loginDealer(login))  
    } else {
      alert('Please fill all the fields')
      return
    }

  }

  if (store.isAuth) {
    alert('Login Successful')
    navigate('/')
  }
  
  return (
    <div >
      <h2>Login Page</h2>
      <input className='inputbox' name="email" type="text" onChange={handleForm} placeholder='Email' /><br /><br />
      <input className='inputbox' name="password" type="text" onChange={handleForm} placeholder='Password' /><br /><br />
      <button onClick={loginHandler}>Login</button>
      <p>Not Registered go to <Link to={'/register'}><span>Register</span></Link></p>
    </div>
  )
}

export default Login