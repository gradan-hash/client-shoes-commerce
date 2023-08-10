import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";

import image1 from "../../img/image1.jpg";
import image3 from "../../img/image3.jpg";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, error, isFetching } =
    useSelector((state) => state.user.currentUser) || {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login({ email, password }, dispatch);
      // Redirect to admin section if user is admin
      navigate(
        user && user.user.email === "admin@gmail.com" ? "/accounts/admin" : "/"
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="register">
      <div className="leftregister">
        <div className="lf-wrapper">
          <p className="lf-text">Enjoy Best Offers </p>
          <br />
          <div className="imgregister">
            <img src={image1} alt="" className="imgreg" />
          </div>
        </div>
      </div>
      <div className="centerregister">
        <div className="ct-wrapper">
          <form onSubmit={handleSubmit}>
            <br />
            <h4 className="ct-head">Log In</h4>
            <div className="registerdetails">
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                className="regformdetails"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <input
                type="password"
                min={4}
                required
                name="password"
                placeholder="Password"
                className="regformdetails"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <br />
            <button className="signup" disabled={isFetching}>
              {isFetching ? "Please wait..." : "Log In"}
            </button>
            <p className="extra-commet">
              "Dont have Account Please{" "}
              <Link to="/accounts/register" className="ex-link">
                Register
              </Link>
              <br />
              here."
            </p>
            {error && <p style={{ textDecoration: "red" }}>{error}</p>}
          </form>
        </div>
      </div>
      <div className="rightregister">
        <div className="rt-wrapper">
          <p className="lf-text">Cheap and Affordable Wears </p>
          <br />
          <br />
          <div className="imgregister">
            <img src={image3} alt="" className="imgreg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
