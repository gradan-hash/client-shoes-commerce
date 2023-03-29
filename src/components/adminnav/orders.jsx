import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ordertable.scss";
import { getOrders } from "../../api/api";

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [period, setPeriod] = useState("today");

  useEffect(() => {
    const getOrderss = async () => {
      try {
        const response = await axios.get(getOrders);
        setOrders(response.data.order);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderss();
  }, []);

  const handlePeriodClick = (period) => {
    setPeriod(period);
  };

  const filterOrdersByPeriod = (orders, period) => {
    const today = new Date();
    const filteredOrders = orders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      switch (period) {
        case "today":
          return (
            orderDate.getDate() === today.getDate() &&
            orderDate.getMonth() === today.getMonth() &&
            orderDate.getFullYear() === today.getFullYear()
          );
        case "week":
          const weekStart = new Date();
          weekStart.setDate(today.getDate() - 7);
          return orderDate >= weekStart;
        case "month":
          const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
          return orderDate >= monthStart;
        default:
          return true;
      }
    });
    return filteredOrders;
  };

  const filteredOrders = filterOrdersByPeriod(orders, period);

  return (
    <div>
      <div>
        <button onClick={() => handlePeriodClick("today")}>Today</button>
        <button onClick={() => handlePeriodClick("week")}>This Week</button>
        <button onClick={() => handlePeriodClick("month")}>This Month</button>
      </div>
      <table>
        <thead>
          <title>{`Orders for ${period}`}</title>
          <tr>
            <th>Email</th>
            <th>Total Amount</th>
            <th>Date/Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length >= 0 ? (
            filteredOrders.map((order) => (
              <tr key={order._id}>
                <td>{order.email}</td>
                <td>{order.totalAmount}</td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No orders found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
