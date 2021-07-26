import React, { Component } from "react";
import Greeting from "./Greeting";
import Today from "./Today";

class Center extends Component {
      constructor(props) {
        super(props);
        this.state = {
          time: this.getTime(),
        };
      }
    
      getTime = () => {
        const today = new Date();
        let hour = today.getHours();
        let min = today.getMinutes();
        min = min < 10 ? `0${min}` : min;
      
        if (hour === 0) {
          hour = 12;
        } else if (hour > 12) {
          hour = hour - 12;
        }

        return `${hour}:${min}`;
    }

    updateTime() {
        this.setState({ time: this.getTime() });
    }

    componentDidMount() {
        setInterval(this.updateTime.bind(this), 1000);
    }
    
    render() {
        return (
            <section className="greeting white">
                <div>
                    <h2>
                        {this.state.time}
                    </h2>
                </div>
                <Greeting />
                <Today />
            </section>
        )
    }
}

export default Center;
