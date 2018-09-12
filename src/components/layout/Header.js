import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  // DESTRUCTURING
  const { branding } = props;
  return (
    // <div>
    //   <h1 style={{ color: "red", fontSize: "50px" }}>{branding}</h1>
    //   <h1 style={headingStyle}>{branding}</h1>
    // </div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

//This is to pass a default Text in case you DON'T have props
Header.defaultProps = {
  branding: "My App"
};

//Validation of type
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

const headingStyle = {
  color: "green",
  fontSize: "50px"
};

export default Header;
