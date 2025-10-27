import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    if(title.trim().length === 0){
     toast.error("Please fill input",{autoClose:2000})
      return
    }
    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };
    // console.log(newTodo);
    setTitle("");
    addTodo(newTodo);
  }

  return (
    <div>
      <form onSubmit={handlesubmit} className="todoForm">
        <input className="todoForm-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="todoForm-btn">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
