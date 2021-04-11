import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Account } from "./AccountContext";

export const favouriteCon = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);

  const { user } = useContext(Account);

  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
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
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourite.length) {
      saveFavourites(favourite, user.uid);
    }
  }, [favourite, user]);

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
