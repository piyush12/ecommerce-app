import { createSelector } from "reselect";
import { cartTotal, cartTotalPrice } from "../utils";

const cart = state => state.cart.cart;
const size = state => state.filterPorducts.size;
const orderBy = state => state.filterPorducts.sortBy;
const products = state => state.products.products;
const error = state => state.products.error;
const isLoading = state => state.products.isLoading;

// reselect function
export const getCart = createSelector(
  [cart],
  cart => cart
);

export const getTotal = createSelector(
  [cart],
  cart => cartTotal(cart)
);

export const getTotalPrice = createSelector(
  [cart],
  cart => cartTotalPrice(cart)
);

export const getFilterBySize = createSelector(
  [size],
  size => size
);

export const getOrderBy = createSelector(
  [orderBy],
  orderBy => orderBy
);

export const getLoading = createSelector(
  [isLoading],
  isLoading => isLoading
);

export const getError = createSelector(
  [error],
  error => error
);

export const getProductsMemo = createSelector(
  [products],
  products => products
);
