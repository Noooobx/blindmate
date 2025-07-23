import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ForgotPassword from '../pages/ForgotPassword'
import Support from '../pages/Support'
import CreatePost from '../pages/CreatePost'
import ViewPosts from '../pages/ViewPosts'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path="/auth/success" element={<ForgotPassword />} />
        <Route path="/confessions" element={<ViewPosts />} />
        <Route path="//write" element={<CreatePost />} />
        <Route path="/support" element={<Support />} />
    </Routes>
  )
}

export default AppRoutes