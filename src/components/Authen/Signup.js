import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserPool from "../../config/userPool";
import "./Authen.css";
// Swal alert import
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    UserPool.signUp(email, password, [], null, (error, data) => {
      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        })
        console.log(error);
      } else {
        MySwal.fire({
          icon: 'success',
          title: 'Sign up success',
        })
        console.log(data);
      }
    });
  };

  return (
    <div className="App-header">
      <div class="card">
        <div className="card-header text-center">
          <h3>
            <span style={{ color: "#f7a440" }}>☾</span>{" "}
            <span style={{ color: "#ec686a" }}>Hospitel</span>{" "}
            <span style={{ color: "#ed8984" }}>Del</span>{" "}
            <span style={{ color: "#f5ad9a" }}>Luna</span>
          </h3>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="row mb-3">
            <div className="col-12 text-center">
              <button className="btn btn-primary btn-login" onClick={onSubmit}>
                Signup
              </button>
            </div>
            <div className="col-12 text-center mt-3">
            <Link to="/">
            Login
          </Link>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default Signup;
