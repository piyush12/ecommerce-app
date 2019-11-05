import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

const initialState = {};

const middlewareArray = [thunk, logger];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewareArray)
);

const persistor = persistStore(store);

export { store, persistor };
