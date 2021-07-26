import React, { Component } from "react";

class MainGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
    }

    enterTodo = e => {
        if(e.key === 'Enter') {
            this.setState({
                todo: e.target.value,
            })
        }
    };

    removeToDo = () => {
        this.setState({
            todo: "",
        })
    }
    
    render() {
        return (
            <div className="main-goal">
              {!this.todo && (
                <>
                <h2 className="white">What is your main focus today?</h2>
                <input
                    type="text"
                    className="input-box"
                    onChange={e => this.enterTodo(e)}
                    onKeyPress={this.enterTodo}
                />
                </>
            )}
            {this.todo && (
                <>
                <h3 className="white">TODAY</h3>
                <p className="white main-goal-item">
                    <input type="checkbox" />
                    <label htmlFor={this.todo} className="custom-checkbox">
                    {this.todo}{" "}
                    </label>
                    <i className="fas fa-times white" onClick={this.removeTodo} />
                </p>
                </>
            )}
            </div>
        );
    }
}

export default MainGoal;