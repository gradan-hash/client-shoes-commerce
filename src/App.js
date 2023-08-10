import React, { Children } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import "./app.scss";
import Register from "./pages/Login/Register";
import Login from "./pages/Login/Login";
import AdminHome from "./pages/admin/AdminHome.jsx";
import Location from "./pages/admin/Location";
import { First } from "./pages/Login/First";
import Error from "./pages/Login/error";
import { useSelector } from "react-redux";
import AllProducts from "./pages/products/AllProducts";
import Paypal from "./components/Cart/Paypall";
import OrderTable from "./components/adminnav/orders";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home /> } />

        <Route path="/products/:param" element={<AllProducts />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/accounts/login" element={user ? <Home /> : <Login />} />
        <Route path="/accounts/register" element={<Register />} />

        <Route path="/accounts/admin" element={<AdminHome />} />

        <Route path="/orders" element={<OrderTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
