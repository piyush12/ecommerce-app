import React from "react";
import BagIcon from "../../static/bag-icon.png";
import CartModal from "../../reusableComponents/modal";
import Table from "../../reusableComponents/table";

const Cart = ({ cart, total, addProduct, removeProduct, deleteProduct }) => {
  const [modalShow, setModalShow] = React.useState(false);

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
      <div
        className="bag-cart"
        onClick={() =>
          cart.length > 0 ? setModalShow(true) : setModalShow(false)
        }
      >
        <img src={BagIcon} />
        <span className="bag-item">{total}</span>
      </div>
      <CartModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        buttontext="Checkout"
        buttonurl="/checkout"
      >
        <Table
          item={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          deleteFromCart={deleteFromCart}
        />
      </CartModal>
    </React.Fragment>
  );
};

export default Cart;
