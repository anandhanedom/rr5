import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Settings = () => <h1>Settings</h1>;
const NotFound = () => <h1>404</h1>;

export default function App() {
  return (
    <Router>
      <div style={{ width: 1000, margin: "0 auto" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
