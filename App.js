import React from "react";
import { View } from "react-native";
import Navigation from "./AppNavigation";
import { SearchRestContext } from "./servicws/locationContext";
import { RestContext } from "./servicws/RestaurantContext";
import { FavouriteProvider } from "./servicws/FavouriteContext";

export default function App() {
  return (
    <FavouriteProvider>
      <SearchRestContext>
        <RestContext>
          <Navigation />
        </RestContext>
      </SearchRestContext>
    </FavouriteProvider>
  );
}
