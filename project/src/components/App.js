import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Players from "./Players";
import Home from "./Home";
import Teams from "./Teams";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/players",
    main: () => <Players />,
  },
  {
    path: "/teams",
    main: () => <Teams />,
  },
];

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact={Boolean(route.exact)}
              path={route.path}
            >
              <route.main />
            </Route>
          ))}
          <Route path="*">
            <h1 className="text-center">Four oh Four (404)</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
