import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../static/logo.svg";
import Cart from "../../containers/cart";

const Header = () => {
  return (
    <div className="app-header">
      <Navbar
        fixed="top"
        bg="dark"
        variant="dark"
        style={{ justifyContent: "space-between" }}
      >
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Cart />
      </Navbar>
    </div>
  );
};

export default Header;
