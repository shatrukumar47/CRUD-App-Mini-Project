import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from '../components/Todo'
import SingleTodo from '../components/SingleTodo'
import EditTodoPage from '../components/EditTodoPage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Todo />} />
      <Route path='/todo/:id' element={<SingleTodo />} />
      <Route path='/todo/:id/edit' element={<EditTodoPage />} />
      <Route path='*' element={<h1 style={{color:"white"}}>PAGE NOT FOUND...404 Error</h1>} />
    </Routes>
  )
}

export default AllRoutes
