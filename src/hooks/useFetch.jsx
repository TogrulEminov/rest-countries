import { useEffect, useState } from 'react';
import { fetchDatFromApi } from '../utils/api';

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    makeCallApi();
  }, [endpoint]);
  const makeCallApi = async () => {
    const res = await fetchDatFromApi(endpoint);
    setData(res);
  };
  return { data };
};

export default useFetch;
