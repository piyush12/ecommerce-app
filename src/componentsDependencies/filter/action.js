import * as T from "../types";

export const filterBySize = val => dispatch => {
  dispatch({
    type: T.FILTER_BY_SIZE,
    payload: val
  });
};

export const sortBy = val => dispatch => {
  dispatch({
    type: T.SORT_BY,
    payload: val
  });
};
