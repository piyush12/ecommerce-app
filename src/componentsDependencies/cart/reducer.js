import produce from "immer";
import * as T from "../types";
import { addtoCart, removeFromCart, deleteFromCart } from "../../utils";

const initialState = {
  cart: []
};

const cartReducer = produce((draft, action) => {
  switch (action.type) {
    case T.ADD_TO_CART:
      draft.cart = addtoCart(draft.cart, action.payload);
      return;
    case T.REMOVE_FROM_CART:
      draft.cart = removeFromCart(draft.cart, action.payload);
      return;
    case T.DELETE_FROM_CART:
      draft.cart = deleteFromCart(draft.cart, action.payload);
      return;
  }
}, initialState);

export default cartReducer;
