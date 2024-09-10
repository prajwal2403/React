import React from "react";
import Card from "./Card";
import Contact from "../contacts.js";
function crateCard(Contact) {
  return <Card
    name={Contact.name}
    img={Contact.imgURL}
    des = "avatar img"
    tel={Contact.phone}
    email={Contact.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contact.map(crateCard)}


    </div>
  );
}

export default App;
