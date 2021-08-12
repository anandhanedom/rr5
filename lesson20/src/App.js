import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default function App() {
  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>Home!</div>,
      main: () => <h1>Home Page</h1>,
    },
    {
      path: "/bubblegum",
      sidebar: () => <div>Bubblegum!</div>,
      main: () => <h1>Bubblegum Page</h1>,
    },
    {
      path: "/shoelaces",
      sidebar: () => <div>Shoelaces!</div>,
      main: () => <h1>Shoelaces Page</h1>,
    },
  ];

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "10px", width: "40%" }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bubblegum">Bubblegum</Link>
            </li>
            <li>
              <Link to="/shoelaces">Shoelaces</Link>
            </li>
          </ul>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact={Boolean(route.exact)}
              path={route.path}
            >
              <route.sidebar />
            </Route>
          ))}
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact={Boolean(route.exact)}
              path={route.path}
            >
              <route.main />
            </Route>
          ))}
        </div>
      </div>
    </Router>
  );
}
