import React, { createContext, useState, useEffect } from "react";
import { dataFetch, newData } from "./RestaurantService";

export const Rest = createContext();

export const RestContext = ({ children }) => {
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dataFetching = () => {
    setTimeout(() => {
      dataFetch()
        .then(newData)
        .then((data) => {
          setLoading(false);
          setRestaurant(data);
        })
        .catch((error) => {
          setLoading(false);

          setError(error);
        });
    }, 2000);
  };

  useEffect(() => {
    setLoading(true);

    dataFetching();
  }, []);

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
