import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { ordersRoute } from "../../api/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";

const Paypal = ({ totalPrice, onSuccess, onError, onCancel }) => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPrice,
            currency_code: "USD",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const orderData = {
        email: details.payer.email_address,
        totalAmount: totalPrice,
      };
      axios
        .post(ordersRoute, orderData)
        .then((response) => {
          console.log(response.data);
          onSuccess();
          Swal("Thanks for shopping with us");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          onError();
        });
    });
  };

  const onErrorHandler = (error) => {
    onError();
    Swal("sorry an error occurred", error);
  };

  const onCancelHandler = (data) => {
    onCancel();
  };

  const navigate = useNavigate("");
  const user = useSelector((state) => state.user.currentUser);

  const handlePayPalClick = () => {
    if (user) {
      <PayPalButtons
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
        onError={(error) => onErrorHandler(error)}
        onCancel={(data) => onCancelHandler(data)}
      />;
    } else {
      // User does not exist, redirect to login page
      Swal("Please log in first.");
      navigate("/accounts/login");
    }
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_CLIENT_ID,
      }}>
      <PayPalButtons onClick={handlePayPalClick} />
    </PayPalScriptProvider>
  );
};

export default Paypal;
