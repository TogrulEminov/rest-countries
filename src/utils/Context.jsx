import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "use-local-storage";

export const mainContext = createContext(null);

function Context({ children }) {
  const BASE_URL = `https://restcountries.com/v3.1`;
  const [detail, setDetail] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(30);
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const switchTheme = () => {
    const newMode = theme === "light" ? "dark" : "light";
    setTheme(newMode);
  };
  const getData = async (selectedRegion = null) => {
    try {
      setLoading(true);
      let url = `https://restcountries.com/v3.1/all`;

      if (selectedRegion) {
        url = `https://restcountries.com/v3.1/region/${selectedRegion}`;
      }
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseData = await res.json();
      setTimeout(() => {
        setData(responseData);
      }, 1000);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const Values = {
    BASE_URL,
    loading,
    data,
    detail,
    setLoading,
    setDetail,
    getData,
    quantity,
    query,
    setQuantity,
    switchTheme,
    setQuery,
    theme,
    name,
  };

  return <mainContext.Provider value={Values}>{children}</mainContext.Provider>;
}

export default Context;
