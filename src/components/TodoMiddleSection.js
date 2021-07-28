import React from "react";

const TodoMiddleSection = () => {
  const showInputBox = () => {
    let inputBox = document.getElementsByClassName("todo-mini-input");
    inputBox[0].classList.remove("hide");
  };

  return (
    <div>
      <div className="todo-middle-section">
        <p className="white">Add a todo to get started</p>
        <div className="todo-inbox-link">
          <a href="#top" title="switch to inbox" className="white">
            Switch to Inbox <i className="fas fa-angle-right" />
          </a>
        </div>
        <button
          className="btn btn-default white gray-button"
          onClick={showInputBox}>
          New Todo
        </button>
      </div>
    </div>
  );
};

export default TodoMiddleSection;
