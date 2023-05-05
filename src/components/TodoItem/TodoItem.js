import React from 'react'
import './TodoItem.css'
import { TodoIcon } from '../TodoIcon'
import { FiTrash2 } from "react-icons/fi";
import {FiCheck} from 'react-icons/fi'

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}>

        <TodoIcon IconColor={"verde"} IconType={FiCheck}/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}>
        <TodoIcon IconColor={"red"} IconType={FiTrash2}/>
      </span>
    </li>
  )
}
 export {TodoItem}