import React, { useEffect, useState } from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { singleRoute } from "../../api/api";

function Product() {
  const [selectedimage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [loading, setloading] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const singleProduct = async () => {
      try {
        setloading(true);
        const res = await axios.get(`${singleRoute}/${id}`);

        setData(res.data.singleproduct);
        setloading(false);
      } catch (error) {
        setError(error);
      }
    };
    singleProduct();
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="product">
        {loading ? (
          "loading..."
        ) : (
          <>
            <div className="left">
              <div className="images">
                <img
                  src={data.img}
                  alt=""
                  onClick={(e) => setSelectedImage("img")}
                />
                <img
                  src={data.img}
                  alt=""
                  onClick={(e) => setSelectedImage("img2")}
                />
              </div>
            </div>

            <div className="mainimg">
              <img src={data.img} alt="" />
            </div>

            <div className="right">
              <h1>name:{data.name}</h1>
              <span className="price">usd:${data.price}</span>
              <p>type:{data.type}</p>
              <p>size:{data.size}</p>

              <div className="quantity">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }>
                  -
                </button>

                <span>{quantity}</span>

                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>

              <button
                className="add"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data._id,
                      name: data.name,
                      size: data.size,
                      price: data.price,
                      img: data.img,
                      quantity,
                    })
                  )
                }>
                <AddShoppingCartIcon />
                ADD TO CART
              </button>

              <div className="link">
                <div className="item">
                  <FavoriteBorderIcon /> ADD TO WISHLIST
                </div>
                <div className="item">
                  <BalanceIcon /> ADD TO COMPARE
                </div>
              </div>
              <div className="info">
                <span>Category:{data.category}</span>
                <span>Product type:{data.type}</span>
              </div>
              <hr></hr>
              <div className="info">
                <span>DESCRIPTION</span>
                <hr></hr>
                <span>ADDITIONAL INFORMATION</span>
                <hr></hr>
                <span>FAQ</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Product;
