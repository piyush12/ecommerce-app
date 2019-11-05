import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "./componentsDependencies/products/reducer";
import FilterReducer from "./componentsDependencies/filter/reducer";
import cartReducer from "./componentsDependencies/cart/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const reducers = {
  products: productReducer,
  filterPorducts: FilterReducer,
  cart: cartReducer
};

const rootReducer = combineReducers(reducers);

export default persistReducer(persistConfig, rootReducer);
