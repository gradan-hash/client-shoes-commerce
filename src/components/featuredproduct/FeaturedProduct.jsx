import axios from "axios";
import React, { useEffect, useState } from "react";
import { AllproductRoute } from "../../api/api";

import "./featuredproducts.scss";
import { Link } from "react-router-dom";

function FeaturedProduct({ type }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(AllproductRoute);
        console.log(res.data);
        const filteredProducts = res.data.products.filter(
          (product) => product.type === type
        );
        setProperties(filteredProducts);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="bedrooms-container">
      <div className="headers">
        <div className="featured-products">
          <h1>
            {type === "men"
              ? "Featured Products for Men"
              : "Featured Products for Women"}
          </h1>
        </div>
        <Link to="/products/men" style={{ textDecoration: "none" }}>
          {" "}
          <button className="">See more</button>
        </Link>
      </div>

      <div className="bedrooms">
        {loading ? (
          <p>Loading...</p>
        ) : (
          properties.map((m) => (
            <div className="bedroomsitems" key={m._id}>
              <div className="img">
                <img src={m.img} alt="" />
              </div>
              <Link to={`/product/${m._id}`} style={{ textDecoration: "none" }}>
                <div className="bedroomsfooter">
                  <h2 className="bedroomsname">{m.name}</h2>
                  <h4 className="category">{m.category}</h4>
                  <h4 className="bedroomslocation">{m.type}</h4>
                  <h4 className="bedroomslocation">{m.size}</h4>
                  <h4 className="bedroomsprice">Ksh: {m.price}</h4>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FeaturedProduct;
