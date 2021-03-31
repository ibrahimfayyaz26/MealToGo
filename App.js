import React from "react";
import { View } from "react-native";
import Navigation from "./AppNavigation";
import { SearchRestContext } from "./servicws/locationContext";
import { RestContext } from "./servicws/RestaurantContext";

export default function App() {
  return (
    <SearchRestContext>
      <RestContext>
        <Navigation />
      </RestContext>
    </SearchRestContext>
  );
}
