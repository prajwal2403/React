import React from "react";

function App() {

  const [name, setChange] = React.useState(" ");
  const [fname, setChangee] = React.useState(" ");
  function handleChange(event) {
    setChange(event.target.value);
    
  }
  function handleChangee(event) {
    setChangee(event.target.value);

  }

  return (
    <div className="container">
      <h1>Hello {name} {fname}</h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChangee} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
