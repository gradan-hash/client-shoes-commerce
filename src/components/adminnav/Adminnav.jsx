import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Admin.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import LoginIcon from "@mui/icons-material/Login";

function AdminNav() {
  const user = useSelector((state) => state.user.currentUser);

  const [adminname, setAdminname] = useState("");
  useEffect(() => {
    if (user) {
      setAdminname(user.user.username);
    }
  }, [user]);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/kenya.png" alt="" className="img" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            KSH
            <KeyboardArrowDownIcon />
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/account/accounts/admin">
            TWICE ThRIFT ADMiN<br></br>

           
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

          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
