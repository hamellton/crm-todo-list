import { React, useState } from "react"
import './App.css'
import TodoList from "./components/TodoList/TodoList"
import { TODO_LIST } from './constants'

const App = () => {
  const [todo, setTodo] = useState(TODO_LIST)

  const buttonAddItem = () => {
    const defultItem = {
      status: false,
      product: 'XXXX-',
      id: Date.now(),
      title: '',
      img: {
        src: 'https://bluemountainfengshui.org/wp-content/uploads/2015/07/kyivstar_new3.jpg',
        alt: 'alt text'
      },
      statusLock: false,
    }

    setTodo([defultItem,...todo])
  }

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
          <TodoList todo={todo} setTodo={setTodo} toggleHandler={toggleHandler} onDelete={onDelete} />
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
