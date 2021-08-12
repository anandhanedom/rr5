import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Players from "./Players";
import Home from "./Home";
import Teams from "./Teams";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/players">
          <Players />
        </Route>
        <Route path="/teams">
          <Teams />
        </Route>
      </div>
    </Router>
  );
};

export default App;
