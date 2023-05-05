import React from 'react'
import './TodosLoading.css'
import { TodoIcon } from '../TodoIcon'
import { RxReload } from "react-icons/rx";

const TodosLoading = () => {
  return (
    <div className='LoadingTodo-container'>
      <TodoIcon IconType={RxReload} IconColor={"gray"}/>
      <p className='LoadingTodo-text'>Estamos cargango, esperanos un momento</p>

    </div>

  )
}

export { TodosLoading }
