import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/pages/Home";
import Services from "./Components/pages/Services";
import SignUp from "./Components/pages/SignUp";
import Products from "./Components/pages/Products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/products" exact component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
