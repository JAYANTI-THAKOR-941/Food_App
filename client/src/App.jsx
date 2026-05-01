import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import VerifyOtp from './pages/VerifyOtp'
import Login from './pages/Login'
import Food from './pages/Food'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/verifyOtp' element={<VerifyOtp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/foods' element={<Food/>} />
      </Routes>
    </>
  )
}

export default App