import useFetch from './useFetch';

const usePlayers = (team) =>
  useFetch('/players', 'POST', JSON.stringify({ team }));

export default usePlayers;
