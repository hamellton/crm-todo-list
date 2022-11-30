import { React } from 'react'
import TodoItem from './TodoItem/TodoItem'
import classes from './TodoList.module.css'

const TodoList = ({ todo, toggleHandler, onDelete }) => {
  return (
        <div className={classes.todo}>
            {todo.map((el) => <TodoItem key={el.id} id={el.id} item={el} toggleHandler={toggleHandler} onDelete={onDelete} />)}
        </div>
  )
}

export default TodoList