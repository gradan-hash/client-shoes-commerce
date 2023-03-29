import { Link } from "react-router-dom";
import React from "react";
import "./cards.scss";

const Cards = ({ item }) => {
  // console.log(item);
  return (
    <>
      <div className="card-container">
        <Link className="link" to={`/product/${item.id}`}>
          <div className="card">
            <div className="image">
              <span>New arrivals</span>
              <img src={item.img} alt="" className="mainImg" />
              <img src={item.img} alt="" className="secondImg" />
            </div>
            <h2>name: {item.name}</h2>
            <h2>type: {item.type}</h2>
            <div className="prices">
              <h3>price: ${item.price}</h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;
