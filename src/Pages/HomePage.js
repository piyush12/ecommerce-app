import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Sidebar from "../components/Sidebar";
import Product from "../containers/products";
import OnScroll from "../reusableComponents/onScroll";

const Layout = () => {
  return (
    <Row>
      <Col lg={3} sm={3} md={3}>
        <OnScroll>
          <Sidebar />
        </OnScroll>
      </Col>
      <Col lg={9} sm={9} md={9}>
        <Product />
      </Col>
    </Row>
  );
};

export default Layout;
