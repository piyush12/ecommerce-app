import { connect } from "react-redux";
import { getProducts } from "../componentsDependencies/products/action";
import { addProduct } from "../componentsDependencies/cart/action";
import Product from "../components/Products";
import {
  getFilterBySize,
  getOrderBy,
  getCart,
  getError,
  getProductsMemo,
  getLoading
} from "./selectors";

const mapState = state => ({
  products: getProductsMemo(state),
  error: getError(state),
  cart: getCart(state),
  isLoading: getLoading(state),
  filterSize: getFilterBySize(state),
  orderBy: getOrderBy(state)
});

const products = connect(
  mapState,
  { getProducts, addProduct }
)(Product);

export default products;
