import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";

const HomePage = lazy(() => import("./Pages/HomePage"));
const Checkout = lazy(() => import("./containers/checkout"));

function App() {
  return (
    <div className="App">
      <Header />
      <Container style={{ marginTop: 100 }}>
        <Suspense fallback="">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
