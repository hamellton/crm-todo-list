import { React, useState, useRef } from 'react'
import classes from './TodoItem.module.css'

const TodoItem = ({ item, toggleHandler, id, onDelete, setDefultItem }) => {

    const refId = useRef(null)
    const refTitle = useRef(null)
    const [title, setTitle] = useState('')

    const [idInput, setIdInput] = useState('')

    const deleteHandler = (event, id) => {
        event.preventDefault()

        onDelete(id)
    }

    const toggleHandlerCheckBox = (id) => {
        toggleHandler(id)
    }

    const changeHandlerId = (event) => {
        setIdInput(event.target.value)
    }

    const changeHandlerTitle = (event) => {
        setTitle(event.target.value)
    }

    const addId = (event) => {
        if (event.key === 'Enter') {
            setDefultItem(prevState => {
                return {
                    ...prevState,
                    id: refId.current.value
                }
            })
            // setIdInput(refId.current.value)
        }
    }

    const addTitle = (event) => {
        if (event.key === 'Enter') {
            setDefultItem(prevState => {
                return {
                    ...prevState,
                    title: refTitle.current.value
                }
            })

            // setTitle(refTitle.current.value)
        }
    }

    return (
        <div className={classes.todo__item}>
            <div className={classes.todo__item__checkbox}>
                <input type="checkbox" id="highload1" name="highload1" checked={item.status} onChange={() => toggleHandlerCheckBox(id)} />
                <label for="highload1" className="lb1"></label>
            </div>
            {item.product && <div className={classes.todo__item__product}>{item.product}</div>}
            {!item.id ? <input
                type="text"
                id="id"
                ref={refId}
                value={idInput}
                onChange={changeHandlerId}
                onKeyPress={addId}
            /> : <div className={classes.todo__item__id}>{item.id}</div>}
            <div className={classes.todo__item__title}>
                <div className={classes.todo__item__title__img}>
                    <img width={20} height={20} src={item.img.src} alt={item.img.alt} />
                </div>
                {!item.title ? <input
                type="text"
                id="id"
                ref={refTitle}
                value={title}
                onChange={changeHandlerTitle}
                onKeyPress={addTitle}
            /> : <div className={classes.todo__item__title__text}>{item.title}</div>}
            </div>
            {!item.default && <div className={classes.todo__item__delete}>
                <button className={classes.btn__delete} onClick={event => deleteHandler(event, id)}>X</button>
            </div>}
        </div>
    )
}

export default TodoItem