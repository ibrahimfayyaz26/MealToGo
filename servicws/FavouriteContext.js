import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const favouriteCon = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) {
        setFavourite(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = (restaurant) => {
    setFavourite([...favourite, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavourite = favourite.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavourite(newFavourite);
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourite);
  }, [favourite]);

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
