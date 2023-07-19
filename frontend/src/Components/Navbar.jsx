import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Navbar.css"

const Navbar = () => {
  return (
    <div id='box'>
        <Link to="/">Market</Link>
        <Link to="/oem">Add car </Link>
        <Link to="/dealer">Your Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Signup</Link>
    </div>
  )
}

export default Navbar