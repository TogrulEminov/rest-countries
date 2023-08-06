import { useContext } from 'react';
import './Search.scss';
import { mainContext } from '../../utils/Context';
const Search = () => {
  const { query, handleSearch } = useContext(mainContext);
  return (
    <div className="searchingData">
      <input
        type="text"
        placeholder="Search country here..."
        value={query}
        onChange={handleSearch}
      />
      <button>Search</button>
    </div>
  );
};

export default Search;
