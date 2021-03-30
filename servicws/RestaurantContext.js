import React, { createContext } from "react";

export const Rest = createContext();

export const RestContext = ({ children }) => {
  return (
    <Rest.Provider
      value={{
        restaurant: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      }}
    >
      {children}
    </Rest.Provider>
  );
};
