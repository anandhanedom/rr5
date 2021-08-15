import React from "react";
import {
  useLocation,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link,
} from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import Sidebar from "./Sidebar";
import useTeam from "../hooks/useTeam";
import TeamLogo from "./TeamLogo";

const Team = () => {
  const { teamId } = useParams();
  const { loading, response: team } = useTeam();

  if (loading) {
    return null;
  }

  return (
    <div className="panel">
      <div style={{ width: "100%" }}>
        <TeamLogo id={teamId} className="center" />
        <h1 className="medium-header">{team.name}</h1>
        <ul className="info-list row">
          <li>
            Est.<div>{team.established}</div>
          </li>
          <li>
            Manager<div>{team.manager}</div>
          </li>
          <li>
            Coach<div>{team.coach}</div>
          </li>
        </ul>
        <Link className="center btn-main" to={`/${teamId}`}>
          {team.name} Team Page
        </Link>
      </div>
    </div>
  );
};

const Teams = () => {
  const { response: teamNames, loading } = useTeamNames();
  const { path } = useRouteMatch();

  if (loading) {
    return <p>LOADING</p>;
  }

  return (
    <div className="container two-column">
      <Sidebar title="Teams" list={teamNames} />
      <Switch>
        <Route path={`${path}/:teamId`}>
          <Team />
        </Route>
        <Route path="*">
          <div className="sidebar-instruction">
            <h1>Please select a team</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default Teams;
