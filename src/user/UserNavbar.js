import React from "react";
import { Link } from "react-router-dom";

export const UserNavbar = () => {
    var id = 101;
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/user/aboutus">
                ABOUTUS <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to ="/user/contactus">
                CONTACT US
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to= {`/user/feedback/${id}`}>
                FEEDBACK
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to= {`/api/get`}>
                get
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to= {`/api/post`}>
                POST
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};
