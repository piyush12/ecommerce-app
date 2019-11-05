import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { store, persistor } from "./store";
import ErrorBoundary from "./components/ErrorBoundaries";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ErrorBoundary>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </ErrorBoundary>
    </Provider>
  </Router>,
  document.getElementById("root")
);
