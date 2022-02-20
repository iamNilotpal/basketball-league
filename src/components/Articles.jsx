import React from 'react';
import { useParams, Switch, Route, useRouteMatch } from 'react-router-dom';
import useArticle from '../hooks/useArticle';
import useTeamsArticles from '../hooks/useTeamsArticles';
import SideBar from './SideBar';

function Article() {
  const { articleId, teamId } = useParams();
  const { loading, response: article } = useArticle({ articleId, teamId });

  if (loading) return <h1>LOADING...</h1>;
  if (!article)
    return <h2 className="sidebar-instruction">No Article Found</h2>;

  return (
    <div className="panel">
      <article className="article">
        <h1 className="header">{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  );
}

const Articles = () => {
  const { teamId } = useParams();
  const { path } = useRouteMatch();
  const { loading, response: articles } = useTeamsArticles(teamId);

  if (loading) return <h1>LOADING...</h1>;
  return (
    <div className="container two-column">
      <SideBar
        title="Articles"
        list={articles.map((article) => article.title)}
      />

      <Switch>
        <Route path={`${path}:articleId`}>
          <Article />
        </Route>
        <Route path="*">
          <h2 className="sidebar-instruction">Select an Article</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default Articles;
