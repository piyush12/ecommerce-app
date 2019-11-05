import produce from "immer";
import * as T from "../types";

const initialState = {
  size: [],
  sortBy: ""
};

const setVal = (state, currentVal) => {
  const isExist = state.find(size => size === currentVal);
  if (isExist) {
    const removeSize = state.filter(size => size !== currentVal);
    return [...removeSize];
  }
  return [...state, currentVal];
};

const FilterReducer = produce((draft, action) => {
  switch (action.type) {
    case T.FILTER_BY_SIZE:
      draft.size = setVal(draft.size, action.payload);
      return;
    case T.SORT_BY:
      draft.sortBy = action.payload;
      return;
  }
}, initialState);

export default FilterReducer;
