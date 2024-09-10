import React from "react";
import Login from "./login";
var isLogedIn = false;
function createInput() {
  if (isLogedIn) {
    return <h1>Hello</h1>;
  }
  else{
  return <Login />;
  }
}

function App() {
  return (
    <div className="container">

      {createInput()}
    </div>
  );
}

export default App;
