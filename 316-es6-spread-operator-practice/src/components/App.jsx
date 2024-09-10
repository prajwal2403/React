import React from "react";
import Xyz from "./Xyz";

function App() {
  const [item, setChange] = React.useState(" ");
  const [addItems, setItems] = React.useState([]);

  function handleChange(event) {
    setChange(event.target.value)
  }
  function handlClick() {
    setItems((prevValue) => {
      return [...prevValue, item];
    })
    setChange(" ");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={handlClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {

            addItems.map((abc)=>(
              <Xyz text={abc} />
            ))
           
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
