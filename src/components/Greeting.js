import React, { useState } from "react";
import EdiText from 'react-editext';

const Greeting = () => {
  let name = localStorage.getItem("name");
  if (!name || name === "null") {
    name = 'Marc';
    localStorage.setItem("name", name);
  }
  const [value, setValue] = useState(name);

  if (!name || name === "null") {
    name = 'Marc';
  }

  const handleSave = (name) => {
    setValue(name);
  };

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
      <section className="greeting white">
        <div>
          <h2>
            {hour}:{min}
          </h2>
        </div>
        <div>
          <p>
            Good {greeting},
            <EdiText type="text" value={value} onSave={handleSave} />
          </p>
        </div>
      </section>
    </>
  );
};

export default Greeting;
