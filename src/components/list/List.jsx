import React, { useEffect, useState } from "react";
import "./list.scss";
import Cards from "../cards/Cards";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const List = ({ subCats, maxPrice, sort, pty,data }) => {

  let sortOrder = "desc";
  if (sort === "asc") {
    sortOrder = "asc";
  } else if (sort === "desc") {
    sortOrder = "desc";
  }
  
 const [loading,setLoading] = useState("");



  return (
   
    <div className="list">
      {loading
        ? "loading"
        : data.map((item) => <Cards item={item} key={item.id} />)}
    </div>
    
  );
};

export default List;
