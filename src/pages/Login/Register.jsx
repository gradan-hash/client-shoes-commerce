import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import image2 from "../../img/image2.jpg";
import image5 from "../../img/image5.jpg";
import axios from "axios";
import { makeRequest } from "../../makeRequest";
import { RegisterRoute } from "../../api/api";
import { useSelector } from "react-redux";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate("");

  // const { user } = useSelector((state) => state.user);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(RegisterRoute, {
        username,
        password,
        email,
      });
      console.log(response);

      if (response.status === 200) {
        navigate("/accounts/login");
      } else {
        navigate("/accounts/register");
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className="register">
      <div className="leftregister">
        <div className="lf-wrapper">
          <p className="lf-text">
            Please Create Account and Enjoy Best Offers{" "}
          </p>
          <br></br>
          <div className="imgregister">
            <img src={image2} alt="" className="imgreg" />
          </div>
        </div>
      </div>
      <div className="centerregister">
        <div className="ct-wrapper">
          <form onSubmit={handleSubmit}>
            <br></br>
            <h4 className="ct-head">Sign Up</h4>
            <div className="registerdetails">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                minLength={4}
                required
                name="username"
                className="regformdetails"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br></br>
              <br></br>
              <label htmlFor="username">email:</label>
              <input
                type="text"
                id="email"
                minLength={4}
                required
                name="email"
                className="regformdetails"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br></br>
              <br></br>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                minLength={6}
                required
                placeholder="password"
                className="regformdetails"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br></br>
            <br></br>
            <button className="signup">Sign Up</button>
            <p className="extra-commet">
              "Already have an account Please{" "}
              <Link to="/accounts/login" className="ex-link">
                Login
              </Link>
              <br />
              here."
            </p>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
      <div className="rightregister">
        <div className="rt-wrapper">
          <p className="lf-text">Cheap and Affordable Wears </p>
          <br></br>
          <br></br>
          <div className="imgregister">
            <img src={image5} alt="" className="imgreg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
