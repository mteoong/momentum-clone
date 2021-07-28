import React from "react";
import TodoLightBox from "./TodoLightBox";
const Todo = () => {
  const openTodoLightbox = () => {
    let todoBox = document.getElementsByClassName("todo-lightbox");
    todoBox[0].classList.toggle("hide");
  };

  return (
    <div className="todo">
      <p className="white" onClick={openTodoLightbox}>
        Todo
      </p>

      <TodoLightBox />
    </div>
  );
};

export default Todo;
