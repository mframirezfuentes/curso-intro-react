import React from 'react'
import './TodosLoading.css'
import { TodoIcon } from '../TodoIcon'

const TodosLoading = () => {
  return (
    <div className='LoadingTodo-container'>
      <TodoIcon/>
      <p className='LoadingTodo-text'>Estamos cargango, esperanos un momento</p>
      <TodoIcon/>
    </div>

  )
}

export { TodosLoading }
