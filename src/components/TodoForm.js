import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='Add a new task' onChange={(e) => setValue(e.target.value)} value={value} />
        <button type="submit" className='todo-button'>Add Task</button>
    </form>
  )
}
