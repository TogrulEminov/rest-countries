import { useContext} from 'react';
import './Search.scss';
import { mainContext } from '../../utils/Context';
const Search = () => {
  const { query, setQuery } = useContext(mainContext);
  return (
    <div className="searchingData">
      <input
        type="search"
        placeholder="Search country here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
