import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AdminPage from '../pages/AdminPage'
import LoginPage from '../pages/LoginPage'
import EditPage from '../pages/EditPage'
import PrivateRoute from './PrivateRoute'
import PageNotFound from '../pages/PageNotFound'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/add-products' element={
        <PrivateRoute>
          <AdminPage />
        </PrivateRoute>
      } />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/edit/:id' element={
        <PrivateRoute>
          <EditPage />
        </PrivateRoute>
      } />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default MainRoutes
