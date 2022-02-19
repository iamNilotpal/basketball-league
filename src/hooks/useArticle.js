import useFetch from './useFetch';

const useArticle = (args) => useFetch('/article', 'POST', JSON.stringify(args));
export default useArticle;
