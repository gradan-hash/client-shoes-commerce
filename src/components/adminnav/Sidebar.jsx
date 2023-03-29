import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <>
      <div className="sidebare">
        <button className="sidebarleft">Upoad Items</button>
        <br></br>
        <Link to="/orders">
          <button className="sidebarcenter">Orders</button>
        </Link>
        <br></br>
        <button className="sidebarbottom">Clear</button>
      </div>
    </>
  );
};

export default Sidebar;
