import useFetch from './useFetch';

const useTeamNames = () => useFetch('/teams', 'GET');
export default useTeamNames;
