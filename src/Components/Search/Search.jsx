import { useContext } from 'react';
import './Search.scss';
import { mainContext } from '../../utils/Context';
const Search = () => {
  const { theme, query, setQuery} = useContext(mainContext);
  return (
    <div className="searchingData">
      <input
        data-theme={theme}
        value={query}
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search country here..."
      />
    </div>
  );
};

export default Search;
