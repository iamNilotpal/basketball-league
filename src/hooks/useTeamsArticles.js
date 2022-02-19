import useFetch from './useFetch';

const useTeamsArticles = (team) =>
  useFetch('/articles', 'POST', JSON.stringify({ team }));

export default useTeamsArticles;
