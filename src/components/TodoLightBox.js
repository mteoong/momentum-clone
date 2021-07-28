import React, { useState } from "react";
import TodoMiddleSection from "./TodoMiddleSection";
import { showDropdown } from "../utils";
const TodoLightBox = () => {
  const [todoList, setTodoList] = useState([]);

  const deleteItem = index => {
    todoList.splice(index, 1);
    setTodoList([...todoList]);
  };

  const editItem = index => {
    let readOnlyElem = document.getElementsByClassName("todo-mini-input-box");
    if (readOnlyElem[index].readOnly) {
      readOnlyElem[index].readOnly = false;
      readOnlyElem[index].focus();
    } else {
      readOnlyElem[index].readOnly = true;
    }
  };

  const onKeyPressSubmit = (e, index) => {
    if (e.which === 13) {
      if (index) {
        todoList[index] = e.target.value;
        setTodoList([...todoList]);
        editItem(index);
      } else {
        setTodoList([...todoList, e.target.value]);
        let clearInput = document.getElementsByClassName("todo-input-box");
        clearInput[0].value = "";
      }
    }
  };

  return (
    <section className="todo-lightbox hide">
      <div className="todo-top-section ">
        <p className="white today">
          Today <i className="fas fa-angle-down" />
        </p>
        <i className="fas fa-ellipsis-h white" />
      </div>
      {todoList.length === 0 && <TodoMiddleSection />}
      {todoList && (
        <div>
          {todoList.map((todo, index) => (
            <section key={index}>
              <div className="white todo-mini-item">
                <span>
                  <input type="checkbox" />{" "}
                  <label className="custom-todo-checkbox" htmlFor={todo}>
                    <input
                      type="text"
                      className="todo-mini-input-box"
                      onKeyPress={e => onKeyPressSubmit(e, index)}
                      placeholder={todo}
                      onChange={e => onKeyPressSubmit(e)}
                      readOnly={true}
                    />
                  </label>
                </span>

                <div className=" dropdown todo-list-dropdown-options">
                  <p
                    className="dropdown-item white"
                    value="edit"
                    onClick={() => editItem(index)}>
                    Edit
                  </p>

                  <p className="dropdown-item white" value="Move to Inbox">
                    Move to Inbox
                  </p>
                  <p className="dropdown-item white" value="Move to ...">
                    Move to...
                  </p>

                  <p
                    className="dropdown-item white"
                    value="delete"
                    onClick={() => deleteItem(index)}>
                    Delete
                  </p>
                </div>
                <i
                  key={index}
                  className="fas fa-ellipsis-h sub-ellipsis white"
                  onClick={() =>
                    showDropdown(index, "todo-list-dropdown-options")
                  }
                />
              </div>
            </section>
          ))}
          <div className="todo-mini-input hide">
            <input
              type="text"
              className="todo-input-box"
              onChange={e => onKeyPressSubmit(e)}
              onKeyPress={onKeyPressSubmit}
              placeholder="New Todo"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TodoLightBox;
