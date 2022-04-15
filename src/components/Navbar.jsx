// import PropTypes from 'prop-types'
import React from "react";
import { Link } from "react-router-dom";
// import data from "./data";
const Navbar = () => {
  // static propTypes = { second: third }
  // state = {
  //   data: data,
  // };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsTimes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ textTransform: "capitalize" }}
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item"><Link className="nav-link " to="/about">About</Link></li> */}
              <li className="nav-item">
                <Link className="nav-link " to="/business">
                  business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  general
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  technology
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                                    <Link className="nav-link d" to="/" i >

                                        About
                                    </Link>

                                </li> */}
            </ul>
            {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}

            {/* <div className="group mx-5">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Country
                </button>
                <ul className="dropdown-menu">
                  {data.map((ele, index) => {
                    return (
                      <li key={index}>
                        <div
                          className="dropdown-item"
                          onClick={() => {
                            this.props.setCountry(ele.code);
                          }}
                        >
                          {ele.countryname}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
