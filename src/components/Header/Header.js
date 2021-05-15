import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserPool from "./../../config/userPool";


const Header = () => {
const history = useHistory();
  const logout = () => {
    const user = UserPool.getCurrentUser();
    if (user) {
      user.signOut();
      console.log('signout')
      history.push('/');
    }
  };

  return (
    <nav className="navbar navbar-expand-sm bg-light border-bottom shadow-sm ssticky-top">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item d-md-inline-block nav-link">
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item d-md-inline-block nav-link">
          <Link className="nav-link" to="/resident-log">
            Resident Log
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item d-md-inline-block nav-link" onClick={logout}>
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default Header;
