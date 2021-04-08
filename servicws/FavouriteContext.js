import React, { createContext, useState } from "react";

export const favouriteCon = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);

  const add = (restaurant) => {
    setFavourite([...favourite, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavourite = favourite.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavourite(newFavourite);
  };

  return (
    <favouriteCon.Provider
      value={{
        favourite,
        add,
        remove,
      }}
    >
      {children}
    </favouriteCon.Provider>
  );
};
