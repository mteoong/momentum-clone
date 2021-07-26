import React, { useState } from "react";

const Today = () => {
  const [todo, setTodo] = useState("");

  const onKeyPressSubmit = e => {
    if (e.which === 13) {
      setTodo(e.target.value);
    }
  };

  const removeItem = () => {
    setTodo("");
  };

  return (
    <section className="main-goal">
      {!todo && (
          <div>
            <h2 className="white">What is your main focus today?</h2>
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
          <h3 className="white">Today</h3>
          <p className="white main-goal-item">
            <input type="checkbox" />
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
