import React from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import slug from "slug";

const CustomLink = ({ to, children }) => {
  const match = useRouteMatch({
    path: to.pathname,
  });

  return (
    <li style={{ fontWeight: match ? 900 : "normal" }}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

const Sidebar = ({ title, list }) => {
  const { search } = useLocation();
  const { url } = useRouteMatch();

  return (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {list.map((item) => (
          <CustomLink
            to={{
              pathname: `${url}/${slug(item)}`,
              search: search,
            }}
          >
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
