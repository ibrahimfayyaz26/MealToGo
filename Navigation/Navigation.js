import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Restaurant from "../screens/restaurant/Reastaurant";
import { Ionicons } from "@expo/vector-icons";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantDetails from "../screens/restaurant/RestaurantDetails";
import Map from "../screens/Map/Map";

const tab = createBottomTabNavigator();
const stack = createStackNavigator();

const RestaurantStack = () => {
  return (
    <stack.Navigator
      headerMode={false}
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <stack.Screen name="Restaurant" component={Restaurant} />
      <stack.Screen name="Details" component={RestaurantDetails} />
    </stack.Navigator>
  );
};

const Settings = () => {
  return <Text>hello</Text>;
};

const Navigation = () => {
  return (
    <tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let icon;
          if (route.name == "Restaurant") {
            icon = "md-restaurant";
          } else if (route.name == "Map") {
            icon = "md-map";
          } else if (route.name == "Settings") {
            icon = "md-settings";
          }
          return <Ionicons name={icon} size={25} color="black" />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <tab.Screen name="Restaurant" component={RestaurantStack} />
      <tab.Screen name="Map" component={Map} />
      <tab.Screen name="Settings" component={Settings} />
    </tab.Navigator>
  );
};

export default Navigation;