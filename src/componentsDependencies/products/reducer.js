import produce from "immer";
import * as T from "../types";

const initialState = {
  products: [],
  error: null,
  cart: [],
  isLoading: false
};

const productReducer = produce((draft, action) => {
  switch (action.type) {
    case T.LOADING:
      draft.isLoading = true;
      return;
    case T.FETCH_PRODUCT:
      draft.products = [...action.payload];
      draft.error = null;
      draft.isLoading = false;
      return;
    case T.FETCH_PRODUCT_ERROR:
      draft.products = [];
      draft.error = action.payload;
      draft.isLoading = false;
      return;
  }
}, initialState);

export default productReducer;
