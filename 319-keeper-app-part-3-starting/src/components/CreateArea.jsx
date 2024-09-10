import React from "react";

function CreateArea(props) {
  const [itemValue, setItem] = React.useState({
    title: "",
    content: ""
  });


  function handleChange(event) {
    const { name, value } = event.target;

    setItem((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });

  }

  function handleClick(event) {
    props.onAdd(itemValue);
    event.preventDefault();

  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={itemValue.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={itemValue.content} placeholder="Take a note..." rows="3" />
        <button onClick={handleClick} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
