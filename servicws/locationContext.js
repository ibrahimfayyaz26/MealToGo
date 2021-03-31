import React, { createContext, useState, useEffect } from "react";
import { locationFetch, refinedLocation } from "./locationService";

export const SearchRest = createContext();

export const SearchRestContext = ({ children }) => {
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
        console.log(searchRest);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    setLoading(true);

    search(keyword);
  }, []);

  return (
    <SearchRest.Provider
      value={{
        searchRest,
        loading,
        error,
        searching: search,
      }}
    >
      {children}
    </SearchRest.Provider>
  );
};
