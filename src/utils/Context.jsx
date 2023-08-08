import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const mainContext = createContext(null);

function Context({ children }) {
  const BASE_URL = `https://restcountries.com/v3.1`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [quantity, setQuantity] = useState(50);
  const getLocalMode = () => {
    const newMode = localStorage.getItem("mode");
    if (newMode) {
      return JSON.parse(newMode) ;
    } else {
      return [];
    }
  };
  const [mode, setMode] = useState(getLocalMode());
  const [trueMode, setTrueMode] = useState(true);

  const changeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
    setTrueMode(!trueMode)
  };
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
    document.body.className = mode;
  }, [mode]);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/all`);
      setData((pre) => [...pre, ...res.data]);
      setQuantity(quantity);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/name/${query}`);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      handleSearch();
    } else {
      getData();
    }
  }, [query]);

  const Values = {
    BASE_URL,
    loading,
    data,
    query,
    setQuery,
    quantity,
    setQuantity,
    changeMode,
    trueMode,
    mode,
  };

  return <mainContext.Provider value={Values}>{children}</mainContext.Provider>;
}

export default Context;
