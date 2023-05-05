import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

const TodoForm = () => {

    const [newTodoValue, setNewTodoValue] = React.useState("")
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onWrite = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)

    }
    return (
        <form onSubmit={onSubmit}>

            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onWrite} />
            <div className="TodoForm-buttonContainer">
                <button
                    type='button'
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel">
                    Cancelar</button>
                <button
                    type='submit'
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    )
}
export { TodoForm };