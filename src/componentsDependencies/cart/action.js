import * as T from "../types";

// add all products to cart
export const addProduct = product => async dispatch => {
  dispatch({
    type: T.ADD_TO_CART,
    payload: product
  });
};

export const removeProduct = product => async dispatch => {
  dispatch({
    type: T.REMOVE_FROM_CART,
    payload: product
  });
};

export const deleteProduct = product => async dispatch => {
  dispatch({
    type: T.DELETE_FROM_CART,
    payload: product
  });
};
