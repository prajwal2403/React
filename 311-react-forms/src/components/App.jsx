import React from "react";

function App() {
  const [name, setChange] = React.useState(" ");
  const [fname , setClick] = React.useState(" ");
  function handleChange(event)
  {
      setChange(event.target.value);
  }

  function handleClick()
  {
     setClick(name);
  }
  return (
    <div className="container">
      <h1>Hello {fname} </h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
