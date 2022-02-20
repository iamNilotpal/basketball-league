import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import slug from 'slug';
import useTeam from '../hooks/useTeam';
import useTeamArticles from '../hooks/useTeamsArticles';
import TeamLogo from './TeamLogo';
import Loading from './Loading';

function useTeamPageData(teamId) {
  const { loading: loadingArticles, response: articles } =
    useTeamArticles(teamId);
  const { loading: loadingTeam, response: team } = useTeam(teamId);

  return {
    loading: loadingArticles || loadingTeam,
    team,
    articles,
  };
}

const TeamPage = () => {
  const { teamId } = useParams();
  const { url } = useRouteMatch();
  const { loading, team, articles } = useTeamPageData(teamId);

  if (loading) return <Loading />;
  if (!team)
    return <h2 className="sidebar-instruction">No Matching Team Found</h2>;

  return (
    <div className="panel">
      <TeamLogo id={teamId} />
      <h1 className="medium-header">{team.name}</h1>
      <h4 style={{ margin: 5 }}>
        <Link to={{ pathname: '/players', search: `?teamId=${teamId}` }}>
          View Roster
        </Link>
      </h4>
      <h4>Championships</h4>
      <ul className="championships">
        {team.championships.map((ship) => (
          <li key={ship}>{ship}</li>
        ))}
      </ul>
      <ul className="info-list row" style={{ width: '100%' }}>
        <li>
          Est.<div>{team.established}</div>
        </li>
        <li>
          Manager<div>{team.manager}</div>
        </li>
        <li>
          Coach<div>{team.coach}</div>
        </li>
        <li>
          Record
          <div>
            {team.wins}-{team.losses}
          </div>
        </li>
      </ul>
      <h2 className="header">Articles</h2>
      <ul className="articles">
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`${url}/articles/${slug(article.title)}`}>
              <h4 className="article-title">{article.title}</h4>
              <div className="article-date">
                {new Date(article.date).toLocaleDateString()}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
