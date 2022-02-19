import React from 'react';
import TeamLogo from './TeamLogo';
import { Link } from 'react-router-dom';
import useTeamNames from '../hooks/useTeamNames';

const Home = () => {
  const { loading, response: teamNames } = useTeamNames();

  if (loading) return null;
  return (
    <div className="container">
      <h2 className="large-header">Hash History BasketBall League</h2>
      <h3 className="header text-center">Select a Team</h3>
      <div className="home-grid">
        {teamNames.map((team) => (
          <Link key={team} to={`/${team}`}>
            <TeamLogo width="125px" id={team} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
