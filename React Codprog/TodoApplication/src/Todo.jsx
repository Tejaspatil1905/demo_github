import React from 'react'
import Todo2 from './Todo2'
const Todo = ({todos,toggleCompleted,Removebutton}) => {
  return (
    <div>
      {todos.map((todos =>
        <Todo2 {...todos} key={todos.id} toggleCompleted={toggleCompleted} Removebutton={Removebutton}/>
      ))}
    </div>
  )
}

export default Todo
