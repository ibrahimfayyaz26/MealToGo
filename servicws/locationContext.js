import React, { createContext, useState, useEffect } from "react";
import { locationFetch, refinedLocation } from "./locationService";

export const searchRest = createContext();

export const searchRestContext = ({ children }) => {
  const [searchRest, setSearchRest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");

  const search = (searchKeyword) => {
    setKeyword(searchKeyword);
    locationFetch(searchKeyword.toLowerCase())
      .then(refinedLocation)
      .then((data) => {
        setSearchRest(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    setLoading(true);

    dataFetching(keyword);
  }, []);

  return (
    <searchRest.Provider
      value={{
        searchRest,
        loading,
        error,
        searching: search,
      }}
    >
      {children}
    </searchRest.Provider>
  );
};
