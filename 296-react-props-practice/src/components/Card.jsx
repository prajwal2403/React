import React from "react";
import Details from "./details";
function Card(props){
    return (<div className="card">
        <div className="top">
            <h2 className="name">{props.name}</h2>
            <img className="circle-img"
                src={props.img}
                alt={props.des}
            />
        </div>
        <div className="bottom ">
            <Details Detail_info={props.tel} />
            <Details Detail_info={props.email} />
        </div>
    </div>);
}
export default Card;
