import React from 'react';
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
  Link,
} from 'react-router-dom';
import useTeamNames from '../hooks/useTeamNames';
import useTeam from '../hooks/useTeam';
import SideBar from './SideBar';
import TeamLogo from './TeamLogo';

function Team() {
  const { teamId } = useParams();
  const { loading, response: team } = useTeam(teamId);

  if (loading) return <h2>LOADING...</h2>;
  if (!team)
    return <h2 className="sidebar-instructions">No Matching Team Found</h2>;

  return (
    <div className="panel">
      <div style={{ width: '100%' }}>
        <TeamLogo id={team.id} className="center" />
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
}

const Teams = () => {
  const { loading, response: teamNames } = useTeamNames();
  const { url } = useRouteMatch();

  if (loading) return <h3>LOADING...</h3>;
  return (
    <div className="container two-column">
      <SideBar title="Teams" list={teamNames} />
      <Switch>
        <Route path={`${url}/:teamId`}>
          <Team />
        </Route>
        <Route path="*">
          <h2 className="sidebar-instruction">Select a Team</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default Teams;
