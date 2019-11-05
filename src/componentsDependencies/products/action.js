import * as T from "../types";
import * as service from "../../service/product";
import { filterProducts } from "../../utils";

// get all products
export const getProducts = (size, orderBy) => async dispatch => {
  dispatch({
    type: T.LOADING
  });

  try {
    let products = await service.fetchData();
    if (orderBy === "highPrice") {
      products = products.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        }
      });
    } else if (orderBy === "lowestPrice") {
      products = products.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
      });
    }
    const filteredProduct = filterProducts(products, size);

    dispatch({
      type: T.FETCH_PRODUCT,
      payload: filteredProduct
    });
  } catch (err) {
    dispatch({
      type: T.FETCH_PRODUCT_ERROR,
      payload: err
    });
  }
};
