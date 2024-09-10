import React from "react";
import ReactDom from "react-dom";
function Card(props) {
  return (<div><h1>{props.name} </h1>
    <img src={props.img}></img>
    <p>{props.tel} </p>
    <p>{props.email}</p>
  </div>);

}
ReactDom.render(<div><Card name="ShahRukh Khan" img="https://www.siasat.com/wp-content/uploads/2022/05/srk-5.jpg" tel="8830073762" email="abc@gmail.com" />
  <Card name="Salman Khan" img="https://theglobalstardom.com/wp-content/uploads/2020/10/Salman-Khan-pic.jpg" tel="8830073762" email="abc@gmail.com" /></div>, document.getElementById("root"));