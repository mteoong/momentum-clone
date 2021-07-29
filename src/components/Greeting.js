import React, { Component } from 'react';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeGreeting: this.typeGreeting(),
      name: "Marc",
    };
  }

  typeGreeting() {
    const hrs = new Date().getHours();
    switch (true) {
      case (hrs >= 0 && hrs < 12):
        return 'Good morning, ';
      case (hrs >= 12 && hrs < 18):
        return 'Good afternoon, ';
      case (hrs >= 18 && hrs <= 23):
        return 'Good evening, ';
      default:
        return 'Hello, ';
    }
  }

  updateGreetingType() {
    this.setState({ typeGreeting: this.typeGreeting() });
  }

  componentDidMount() {
    setInterval(this.updateGreetingType.bind(this), 1200000);
  }

  onBlur = (e) => {
    console.log("focus out " + e.target.innerText);
    localStorage.setItem("name", e.target.innerText);
  }

  onSubmit = (e) => {
    if (e.which === 13) {
      e.preventDefault();
      e.target.blur();
    }
  }

  render() {
    let name = localStorage.getItem("name");
    if (name === "undefined" || name==="null") {
      name = prompt("Please enter your name");
      localStorage.setItem("name", name);
    }

    return (
      <div className="greeting-container">
        <span>
          {this.state.typeGreeting} 
        </span>
        <span className="name" contentEditable="true"
          onChange={e => this.onSubmit(e)}
          onKeyPress={this.onSubmit}
          onBlur={this.onBlur}
        >
        {name}
        </span> 
      </div>
    );
  }
}

export default Greeting;






/*
const Greeting = () => {
  let name = localStorage.getItem("name");
  if (!name || name === "null") {
    name = 'Marc';
    localStorage.setItem("name", name);
  }

  if (!name || name === "null") {
    name = 'Marc';
  }

  const today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  min = min < 10 ? `0${min}` : min;

  let period = 'AM';
  if (hour === 0) {
    hour = 12;
  } else if (hour === 12) {
    period = 'PM';
  } else if (hour > 12) {
    hour = hour - 12;
    period = 'PM';
  }

  const getGreeting = hour => {
    if (period === 'AM') {
      return "morning";
    } else if (period === 'PM' && hour < 5) {
      return "afternoon";
    } else {
      return "evening";
    }
  };

  let greeting = getGreeting(hour);
  return (
    <>
      <section className="welcome white">
        <div>
          <h2>
            {hour}:{min}
          </h2>
        </div>
        <div>
          <p>
            Good {greeting},
          </p>
        </div>
      </section>
    </>
  );
};

export default Greeting;
*/