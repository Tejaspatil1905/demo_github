import React from "react";
import { ImCross } from "react-icons/im";

const Todo2 = ({ id, title, completed, toggleCompleted, Removebutton }) => {
  return (
    <div className="todo">
      {/* <p>id:{id}</p> */}
      <div className="todo-title">
        
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          toggleCompleted(id);
        }}
          /> 
          <p className={`${completed? "completed":""}`}>{title}</p>
        
      
      </div>
      <div className="cross-line" onClick={() => Removebutton(id)}>
        <ImCross/>
      </div>
     
    </div>
  );
};

export default Todo2;
