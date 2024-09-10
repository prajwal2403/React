import React from "react";


function App() {
  const [time, currentTime ] = React.useState("time");

  function getTime()
  {
    currentTime(new Date().toLocaleTimeString());
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
