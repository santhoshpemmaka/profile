import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header.js";
import Conatct from "./Contact/Contact.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/PSR">
            <h1>PSR</h1>
          </Route>
          <Route path="/contact">
            <Header />
            <Conatct />
          </Route>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Home Page!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
