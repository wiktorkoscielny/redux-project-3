import React from "react";

// hooks
import { useDispatch } from "react-redux";

// actions (reducers)
import { toggleComplete } from "../redux/todoSlice";
import { deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({id: id}))
  }

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={() => handleCompleteClick()}
          ></input>
          {title}
        </span>
        <button 
            className="btn btn-danger"
            onClick={() => handleDelete()}
        >Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;