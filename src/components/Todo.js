import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    }
  }

  openTodoLightbox = () => {
    let todoBox = document.getElementsByClassName("todo-lightbox");
    todoBox[0].classList.toggle("hide");
  }

  onSubmit = (e, index) => {
    if (e.which === 13) {
      e.preventDefault();
      if (index != null) {
        let array = this.state.todoList.slice();
        array[index] = e.target.innerText;
        this.setState({
          todoList: array,
        }, () => {
          localStorage.setItem("todo-items", JSON.stringify(this.state.todoList))
        });
      } else {
        let array = this.state.todoList;
        this.setState({
          todoList: [...array, e.target.value],
        }, () => {
          localStorage.setItem("todo-items", JSON.stringify(this.state.todoList));
        });
        let clearInput = document.getElementsByClassName("todo-input-box");
        clearInput[0].value = "";
      }
      e.target.blur();
    }
  }

  check(e, index) {
    e.preventDefault();
    let array = this.state.todoList.slice();
    array.splice(index, 1);
    this.setState({
      todoList: array,
    }, () => {
      localStorage.setItem("todo-items", JSON.stringify(this.state.todoList))
    });
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("todo-items"))) {
      this.setState({
        todoList: JSON.parse(localStorage.getItem("todo-items"))
      })
    }
  }

  render() {
    return (
      <div className="todo">
        <p className="white" onClick={this.openTodoLightbox}>
          Todo
        </p>
  
        <section className="todo-lightbox hide">
          <div className="todo-top-section ">
            <p className="white todo-title"> Todo </p>
          </div>
          {this.state.todoList.length === 0 && 
            <div className="todo-middle-section">
              <p className="white">Add a todo to get started</p>
            </div>
          }
          {this.state.todoList && (
            <div>
              {this.state.todoList.map((todo, index) => (
                <section key={index}>
                  <div className="white todo-mini-item">
                    <span className="todo-item-container">
                      <input type="checkbox" className="todo-checkbox" onClick={e => this.check(e, index)}/>{" "}
                      <label className="custom-todo-checkbox" htmlFor={todo}>
                        <span
                          className="todo-item"
                          onKeyPress={e => this.onSubmit(e, index)}
                          onChange={e => this.onSubmit(e, index)}
                          contentEditable="true"
                        >{todo}
                        </span>
                      </label>
                    </span>
                  </div>
                </section>
              ))}
              <div className="todo-mini-input">
                <input
                  type="text"
                  className="todo-input-box"
                  onChange={e => this.onSubmit(e)}
                  onKeyPress={this.onSubmit}
                  placeholder="New Todo"
                />
              </div>
            </div>
          )}
        </section>
      </div>
    );
  }

}

export default Todo;
