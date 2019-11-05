import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { withRouter } from "react-router-dom";

const CartModal = props => {
  const goToPage = () => {
    props.onHide();
    props.history.push(props.buttonurl);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">View Item</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          overflow: "hidden",
          maxHeight: "500px",
          overflowY: "scroll"
        }}
      >
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={goToPage}>{props.buttontext}</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default withRouter(CartModal);
