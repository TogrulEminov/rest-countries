import { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const mainContext = createContext(null);

function Context({ children }) {
  const [query, setQuery] = useState();
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  let { data } = useFetch(`/name/${query}`);
  if (!query?.length) {
    data = null;
  }
  const Values = {
    data,
    query,
    handleSearch,
  };
  return <mainContext.Provider value={Values}>{children}</mainContext.Provider>;
}
export default Context;
