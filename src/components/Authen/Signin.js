import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import "./Authen.css";
import { useHistory } from "react-router-dom";
import UserPool from "../../config/userPool";
// Swal alert import
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isAutheticated, setAutheticated] = useState(false);

  const Login = () => {
    setAutheticated(true);
    console.log("login");
  };

  const submitLogin = () => {
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        history.push('/home');
        console.log("use: ", UserPool.getCurrentUser());
        console.log("onSuccess: ", data);
      },
      onFailure: (error) => {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        })
        // console.log("onFailure: ", error);
      },
      newPasswordRequired: (data) => {
        console.log("need new password");
        console.log("nesPasswordRequired: ", data);
      },
    });
  };

  return (
    <div className="App-header">
      <div class="card">
        <div className="card-header text-center">
          <h3><span style={{color: "#f7a440"}}>☾</span> <span style={{color: "#ec686a"}}>Hospitel</span> <span style={{color: "#ed8984"}}>Del</span> <span style={{color: "#f5ad9a"}}>Luna</span></h3>
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
              <button
                className="btn btn-primary btn-login"
                onClick={submitLogin}
              >
                Login
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default Signin;
