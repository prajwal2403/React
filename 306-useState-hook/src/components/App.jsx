import React from "react";


function App() {

  const [count, inCount] = React.useState(0);

  function increase() {
    inCount(count + 1);
  }

  function decrease () 
  {
    inCount(count - 1);
  }
  return <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>;
}

export default App;
