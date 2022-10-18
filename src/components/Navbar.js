import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark px-5 sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <h2>Krishna</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <li className="nav-item mx-4">
              <Link
                className={`nav-link ${
                  location.path === "/home" ? "active" : ""
                }`}
                aria-current="page"
                to="/home"
              >
                <h5>Home</h5>
              </Link>
            </li>
            <Link
              className={`nav-link mx-4 ${
                location.path === "/projects" ? "active" : ""
              }`}
              to="/projects"
            >
              <h5>Projects</h5>
            </Link>
            <Link
              className={`nav-link mx-4 ${
                location.path === "/Signin" ? "active" : ""
              }`}
              to="/signin"
            >
              <h5>SignIn</h5>
            </Link>
            {/* <Link className={`nav-link mx-4 ${location.path==="/Signup" ? "active" : ""}`}to="/signup"><h5>SignUp</h5></Link> */}
            {/* <Link className={`nav-link mx-4 ${location.path==="/cart" ? "active" : ""}`}to="/cart"><h5>Cart</h5></Link> */}
            <Link to="PageNotFound" />
            <button type="button" className="cartbtn btn btn-light position-relative">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2<span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
