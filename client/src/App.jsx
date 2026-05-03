import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import VerifyOtp from './pages/VerifyOtp'
import Login from './pages/Login'
import Food from './pages/Food'
import FoodManagement from './pages/admin/FoodManagement'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import Disclaimer from './pages/Disclaimer'
import './index.css'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

const App = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '75px' }}>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/verifyOtp' element={<VerifyOtp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
          <Route path='/foods' element={<Food />} />
          <Route path='/manage-food' element={<FoodManagement />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/refund-policy' element={<RefundPolicy />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App