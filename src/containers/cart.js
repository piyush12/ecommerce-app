import { connect } from "react-redux";
import Cart from "../components/Header/cart";
import {
  addProduct,
  removeProduct,
  deleteProduct
} from "../componentsDependencies/cart/action";
import { getCart, getTotal } from "./selectors";

const mapState = state => ({
  cart: getCart(state),
  total: getTotal(state)
});

const HeaderContainer = connect(
  mapState,
  { addProduct, removeProduct, deleteProduct }
)(Cart);

export default HeaderContainer;
