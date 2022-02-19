import useFetch from './useFetch';

const useTeam = (team) => useFetch('/team', 'POST', JSON.stringify({ team }));
export default useTeam;
