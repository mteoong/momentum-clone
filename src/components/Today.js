import React, { useState } from "react";

const Today = () => {
  const [todo, setTodo] = useState(localStorage.getItem("todo"));

  const onKeyPressSubmit = e => {
    if (e.which === 13) {
      setTodo(e.target.value);
      localStorage.setItem("todo", e.target.value);
    }
  };

  const removeItem = () => {
    setTodo("");
    localStorage.setItem("checked", "false");
    localStorage.setItem("todo", "");
  };

  const check = () => {
    let checked = localStorage.getItem("checked");
    checked = checked === "false" ? "true" : "false";
    localStorage.setItem("checked", checked);
    console.log("check " + checked);
  }

  const getCheck = () => {
    let checked = localStorage.getItem("checked");
    console.log("getcheck " + checked)
    if (checked === null) {
      localStorage.setItem("checked", "false");
    }
    return checked === "false" ? false : true;
  }

  return (
    <section className="main-goal">
      {!todo && (
          <div className="today-prompt">
            <h2 className="white">What is your main focus for today?</h2>
            <input
              type="text"
              className="input-box"
              onChange={e => onKeyPressSubmit(e)}
              onKeyPress={onKeyPressSubmit}
            />
          </div>
      )}
      {todo && (
        <div>
          <h3 className="white today">TODAY</h3>
          <p className="white today-to-do">
            <input type="checkbox" onClick={check} defaultChecked={getCheck()} id="main-checked"/>
            <label htmlFor={todo} className="custom-checkbox">
              {todo}{" "}
            </label>
            <i className="fas fa-times white" onClick={removeItem} />
          </p>
        </div>
      )}
    </section>
  );
};

export default Today;
