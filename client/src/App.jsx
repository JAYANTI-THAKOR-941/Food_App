import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import VerifyOtp from './pages/VerifyOtp'
import Login from './pages/Login'
import Food from './pages/Food'
import FoodManagement from './pages/admin/FoodManagement'
import Home from './pages/Home'
import Header from './components/Header'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/verifyOtp' element={<VerifyOtp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/foods' element={<Food/>} />
        <Route path='/manage-food' element={<FoodManagement/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App