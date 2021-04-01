import React, { createContext, useState, useEffect } from "react";
import { locationFetch, refinedLocation } from "./locationService";

export const SearchRest = createContext();

export const SearchRestContext = ({ children }) => {
  const [searchRest, setSearchRest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");

  const search = (searchKeyword) => {
    setLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
      setLoading(false);
      setError("No keyword added");
    }
    locationFetch(keyword.toLowerCase())
      .then(refinedLocation)
      .then((data) => {
        setSearchRest(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <SearchRest.Provider
      value={{
        searchRest,
        loading,
        error,
        searching: search,
        keyword,
      }}
    >
      {children}
    </SearchRest.Provider>
  );
};
