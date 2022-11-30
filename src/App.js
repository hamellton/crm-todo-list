import { React, useState, useEffect } from "react"
import './App.css'
import TodoList from "./components/TodoList/TodoList"
import { ITEM, TODO_LIST } from './constants'

const App = () => {
  const [todo, setTodo] = useState(TODO_LIST)
  const [defaultItem, setDefultItem] = useState(null)

  const buttonAddItem = () => {
    setDefultItem(ITEM)
  }

  useEffect(() => {
    if (defaultItem && defaultItem.id && defaultItem.title) {
    setTodo([defaultItem,...todo])
    setDefultItem(null)
  }
  }, [defaultItem, todo])
  

  const toggleHandler = (id) => {
    setTodo(prevState => {
      return prevState.map(el => {
        if (el.id === id) {
          return {
            ...el,
            status: !el.status,
          }
        }
        return el
      })
    })
  }

  const onDelete = (id) => {
    const shouldDelete = window.confirm('Вы уверенны, что хотите удалить элеемент?')
    if (shouldDelete) {
      setTodo(prevState => prevState.filter(todo => todo.id !== id))
    }
  }

  return (
    <div className="todo__page">
      <div className="container">
        <div className="todo__page__container">
          <TodoList todo={todo} setTodo={setTodo} toggleHandler={toggleHandler} onDelete={onDelete} defaultItem={defaultItem} setDefultItem={setDefultItem} />
          <div className="handle__buttons">
            <button onClick={buttonAddItem}>+</button>
            <button>X</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
