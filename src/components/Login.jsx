import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.scss";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    let lowerCaseUsername = username.toLowerCase();
    if (lowerCaseUsername === "vendedor" && password === "12345") {
      navigate("/seller");
    } else if (username === "comprador" && password === "123") {
      navigate("/buyer");
    } else alert("revisa tu usuario o contraseña");
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center mb-4">OMC Central</h1>
              <p className="text-center">@central.com</p>
              <p className="text-center">onewp.okta.com</p>
              <hr />
              <h3 className="text-center mb-4">Sign In</h3>

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberCheck"
                  />
                  <label className="form-check-label" htmlFor="rememberCheck">
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Sign In
                </button>
              </form>

              <p className="text-center mt-3">
                <a href="#">Need help signing in?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
