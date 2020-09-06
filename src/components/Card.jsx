import React from "react";

function Card(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.img} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info"> {props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
