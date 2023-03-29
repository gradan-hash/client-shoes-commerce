import React, { useState } from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import Paypal from "./Paypall";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  const [paymentStatus, setPaymentStatus] = useState("");

  const handleSuccess = () => {
    setPaymentStatus("success");
  };

  const handleError = () => {
    setPaymentStatus("error");
  };

  const handleCancel = () => {
    setPaymentStatus("canceled");
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products.map((item) => (
        <div className="item" key={item._id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.name}</h1>
            <p>{item.size}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <Paypal
        totalPrice={totalPrice()}
        onSuccess={handleSuccess}
        onError={handleError}
        onCancel={handleCancel}
      />

      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
      {paymentStatus === "success" && (
        <div>Payment Successful. Thank you for your order!</div>
      )}
      {paymentStatus === "error" && (
        <div>Payment Error. Please try again later.</div>
      )}
      {paymentStatus === "canceled" && (
        <div>Payment Canceled. Please try again later.</div>
      )}
    </div>
  );
};

export default Cart;
