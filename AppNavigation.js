import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Restaurant from "./screens/restaurant/Reastaurant";
import { Ionicons } from "@expo/vector-icons";

const tab = createBottomTabNavigator();

const Map = () => {
  return <Text>hello</Text>;
};
const Settings = () => {
  return <Text>hello</Text>;
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
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
        <tab.Screen name="Restaurant" component={Restaurant} />
        <tab.Screen name="Map" component={Map} />
        <tab.Screen name="Settings" component={Settings} />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
