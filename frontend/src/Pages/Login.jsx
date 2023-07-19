import React from 'react'
import styles from '../CSS/login.module.css'
import { Link } from 'react-router-dom'
const Login = () => {

  const loginHandler=()=>{

  }
  return (
    <div style={{width:'100%'}}>
      <h2>Login Page</h2>
      <input className={styles.inputbox} type="text" placeholder='Email' /><br /><br />
      <input className={styles.inputbox} type="password" placeholder='Password'/><br /><br />
      <button onClick={loginHandler}>Login</button>
      <p>Not Registered go to <Link to={'/register'}><span>Register</span></Link></p>
    </div>
  )
}

export default Login