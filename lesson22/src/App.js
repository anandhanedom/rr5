import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch,
} from "react-router-dom";

const OldSchoolMenuLink = ({ to, exact, children }) => {
  const match = useRouteMatch({
    exact,
    path: to,
  });

  return (
    <div className={match ? "active" : ""}>
      <Link to={to}>
        {match ? "> " : ""}
        {children}
      </Link>
    </div>
  );
};

export default function App() {
  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <h1>Home Page</h1>,
    },
    {
      path: "/about",
      main: () => <h1>About Page</h1>,
    },
  ];

  return (
    <Router>
      <div>
        <OldSchoolMenuLink exact={true} to="/">
          Home
        </OldSchoolMenuLink>
        <OldSchoolMenuLink to="/about">About</OldSchoolMenuLink>

        <hr />

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
    </Router>
  );
}
