import React, { useContext, createContext, useState, useEffect } from "react";
import { dataFetch, newData } from "./RestaurantService";
import { SearchRest } from "./locationContext";

export const Rest = createContext();

export const RestContext = ({ children }) => {
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { searchRest } = useContext(SearchRest);

  const dataFetching = (loc) => {
    setRestaurant([]);
    setTimeout(() => {
      dataFetch(loc)
        .then(newData)
        .then((data) => {
          setLoading(false);
          setRestaurant(data);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    }, 1500);
  };

  useEffect(() => {
    setLoading(true);
    const refined = `${searchRest.lat},${searchRest.lng}`;
    dataFetching(refined);
  }, [searchRest]);

  return (
    <Rest.Provider
      value={{
        restaurant,
        loading,
        error,
      }}
    >
      {children}
    </Rest.Provider>
  );
};
