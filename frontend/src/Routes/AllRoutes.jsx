import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Market from '../Pages/Market'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import AddCar from '../Pages/AddCar'
import PrivateRoute from './PrivateRoute'
import Oem from '../Pages/Oem'
import DealerItems from '../Pages/DealerItems'
import Popup from '../Components/Popup'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Market/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/addcar/:id' element={<PrivateRoute><AddCar/></PrivateRoute>}/>
      <Route path='/oem' element={<PrivateRoute><Oem/></PrivateRoute>}/>
      <Route path="/edit/:id" element={<Popup />}></Route>
      <Route path='/dealer' element={<PrivateRoute><DealerItems/></PrivateRoute>}/>

    </Routes>
  )
}

export default AllRoutes