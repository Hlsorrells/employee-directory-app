import React from "react";

function Card() {
  return (
    <div className="card" style={{background: "#daccf6"}}>
      <div className="card-body">
        <h3 className="card-text">Employee Name:<span></span></h3>
        <p className="card-text">Address:<span></span></p>
        <p className="card-text">Phone:<span></span></p>
        <p className="card-text">Email:<span></span></p>
      </div>
    </div>
  );
}

export default Card;
