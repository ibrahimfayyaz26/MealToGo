import React from "react";
import { View } from "react-native";
import Navigation from "./AppNavigation";
import { RestContext } from "./servicws/RestaurantContext";

export default function App() {
  return (
    <RestContext>
      <Navigation />
    </RestContext>
  );
}
