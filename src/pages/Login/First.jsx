import React, { useState } from "react";
import "./eror.scss";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlicer";
import { useNavigate } from "react-router-dom";

export const First = () => {
  const [username, setUsername] = useState("");
  const [uniquekey, setUniqueKey] = useState("");
  const [secretword, setSecretWord] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetching, error, user } = useSelector((state) => state.user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    login({ username, uniquekey, secretword }, dispatch);

    if (error) {
      navigate("/404/error");
    }

    if (user) {
      navigate("/home");
    }
  };

  return (
    <div className="firstlog">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="string"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="uniqueKey">Unique Key:</label>
        <input
          type="text"
          id="uniquekey"
          value={uniquekey}
          onChange={(e) => setUniqueKey(e.target.value)}
          min={12}
          required
        />

        <label htmlFor="secretWord">Secret Word:</label>
        <input
          type="text"
          id="secretword"
          value={secretword}
          onChange={(e) => setSecretWord(e.target.value)}
          min={12}
          required
        />

        <button type="submit" disabled={isFetching}>
          Submit
        </button>
        {error && <error className="error">something went wrong</error>}
        {isFetching  && <span className="success">success</span>}
      </form>
    </div>
  );
};
