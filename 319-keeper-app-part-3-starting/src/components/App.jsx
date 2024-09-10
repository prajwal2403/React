import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [note, setNote] = React.useState([]);


  function addNote(item) {
    console.log(item);
    setNote((prevValue) => {
      return [...prevValue, item];
    });
  }

  function deleteNote(id) {
    setNote((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }




return (
  <div>
    <Header />
    <CreateArea onAdd={addNote} />
    {
      note.map((noteItem, index) => {
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} ondelete={deleteNote} />;
      })
    }

    <Footer />
  </div>
);
}

export default App;
