import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodo] = useState([
    // { id: 1, title: "play cricket", completed: false },
    // { id: 2, title: "Sleep", completed: true },
    // { id: 3, title: "Study", completed: false },
  ]);

  const addTodo = (newTodo) => {
    setTodo((prevstste) => [...prevstste, newTodo]);
  };

  const toggleCompleted = (id) => {
    setTodo((prevstate) => {
      return prevstate.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const Removebutton = (id) =>{
    setTodo((prevstate)=>{
      return prevstate.filter((todo) => todo.id !== id)
    })
  }

  return (
    <div className="container">
      <ToastContainer/>
      <h1 className="main-title">TodoList</h1>
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} toggleCompleted={toggleCompleted} Removebutton={Removebutton} />
    </div>
    
  );
}

export default App;
