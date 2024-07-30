import React from 'react'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='todo'>
        <p className={`${task.completed ? 'completed': ""}`} onClick={() => {
            toggleComplete(task.id)
        }}>{task.task}</p>
        <div>
            <button onClick={() => editTodo(task.id)}>Edit</button>
            <button onClick={() => deleteTodo(task.id)}>Delete</button>
        </div>
    </div>
  )
}
