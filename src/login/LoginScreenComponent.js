import React, { useState } from "react";
import { loginUser } from "../services/UserService";
import { withRouter } from "react-router-dom";
import "./login.scss";

const LoginScreenComponent = ({ signUpHandler, history }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const usernameHandler = (evt) => setUsername(evt.target.value);
  const passwordHandler = (evt) => setPassword(evt.target.value);

  const logIn = () => {
    setLoading(true);
    loginUser(username, password).then((res) => {
      if (res) {
        if (res.error) {
          setLoading(false);
          setError(res.error);
        }
        if (res.jwt) {
          window.localStorage.setItem("token", res.jwt);
          history.push("/");
        }
      }
    });
  };

  return (
    <>
      <h1 class="p-2">Login</h1>
      <div class="p-2">
        <label for="username">Username</label>
        <input
          className="form-control"
          name="username"
          type="text"
          onChange={usernameHandler}
        />
      </div>
      <div class="p-2">
        <label for="password">Password</label>
        <input
          className="form-control"
          name="password"
          type="password"
          onChange={passwordHandler}
        />
      </div>
      <div className="p-2 d-flex flex-column">
        <button className="m-2 p-2 primary shadowed" onClick={logIn}>
          Log In
        </button>
        <button className="m-2 p-2 primary shadowed" onClick={signUpHandler}>
          Sign up
        </button>
        {
          loading && <p className='text-info mx-auto'>Loading...</p>
        }
        {
          error && <p className='text-danger mx-auto'>{error}</p>
        }
      </div>
    </>
  );
};

export default withRouter(LoginScreenComponent);
