import React from "react";
import Paper from "../reusableComponents/Paper";
import Table from "../reusableComponents/table";

const Checkout = ({
  cart,
  addProduct,
  removeProduct,
  deleteProduct,
  totalPrice
}) => {
  const addToCart = product => {
    addProduct(product);
  };

  const removeFromCart = product => {
    removeProduct(product);
  };

  const deleteFromCart = product => {
    deleteProduct(product);
  };

  return (
    <React.Fragment>
      <h4>Checkout </h4>
      <Paper>
        <Table
          item={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          deleteFromCart={deleteFromCart}
        />
        <div className="checkout-total">
          <strong>Total:</strong>{" "}
          <small>
            <strong>$</strong>
          </small>
          <strong>{totalPrice}</strong>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default Checkout;
