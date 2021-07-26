import React, { Component } from "react";
import Greeting from "./Greeting";
import MainGoal from "./MainGoal";

class MiddleContainer extends Component {
    render() {
        return (
            <div className="middle-container">
                <Greeting />
                <MainGoal />
            </div>
        )
    }
}

export default MiddleContainer;
