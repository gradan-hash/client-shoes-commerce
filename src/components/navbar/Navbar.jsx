import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import LoginIcon from "@mui/icons-material/Login";

function Navbar() {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const { user } = useSelector((state) => state.user.currentUser) || {};

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/kenya.png" alt="" className="img" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            USD
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <Link className="link" to="/products/men">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/women">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/both">
              Both
            </Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">
            TWICE ThRIFT StORE
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          {user ? null : (
            <div className="item">
              <Link className="link" to="/accounts/login">
                Login
              </Link>
            </div>
          )}
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />

            <div className="carticon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
}

export default Navbar;
