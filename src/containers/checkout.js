import { connect } from "react-redux";
import Checkout from "../Pages/Checkout";
import {
  addProduct,
  removeProduct,
  deleteProduct
} from "../componentsDependencies/cart/action";
import { getCart, getTotal, getTotalPrice } from "./selectors";

const mapState = state => ({
  cart: getCart(state),
  total: getTotal(state),
  totalPrice: getTotalPrice(state)
});

const CheckoutContainer = connect(
  mapState,
  { addProduct, removeProduct, deleteProduct }
)(Checkout);

export default CheckoutContainer;
