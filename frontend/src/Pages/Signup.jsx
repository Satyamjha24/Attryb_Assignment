import React from 'react'

const Signup = () => {

  const signupHandler=()=>{

  }
  return (
    <div style={{ width: '100%' }}>
      <h2>Signup Page</h2>
      <input type="text" placeholder='Name' /><br /><br />
      <input type="text" placeholder='Email' /><br /><br />
      <input type="password" placeholder='Password' /><br /><br />
      <button onClick={signupHandler}>Register</button>
    </div>
  )
}

export default Signup