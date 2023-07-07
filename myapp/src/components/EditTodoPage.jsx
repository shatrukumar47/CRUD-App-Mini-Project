import React from 'react'
import { useParams } from 'react-router-dom'

const EditTodoPage = () => {
    const param = useParams();
    console.log(param)
  return (
    <div>
      <h1 style={{color:"white"}}>Edit</h1>
    </div>
  )
}

export default EditTodoPage
