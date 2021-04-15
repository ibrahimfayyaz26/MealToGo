import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Restaurant from "../screens/restaurant/Reastaurant";
import { Ionicons } from "@expo/vector-icons";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantDetails from "../screens/restaurant/RestaurantDetails";
import Map from "../screens/Map/Map";
import { SearchRestContext } from "../servicws/locationContext";
import { RestContext } from "../servicws/RestaurantContext";
import { FavouriteProvider } from "../servicws/FavouriteContext";
import Settings from "../screens/Setting/Setting";
import Favourite from "../screens/Setting/Favourite";
import Camera from "../screens/Setting/Camera";

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

const SettingStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        options={{ header: () => null }}
        name="Setting"
        component={Settings}
      />
      <stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitle: "Favourites",
          headerTintColor: "red",
        }}
        name="Favourite"
        component={Favourite}
      />
      <stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitle: "Favourites",
          headerTintColor: "red",
        }}
        name="Camera"
        component={Camera}
      />
    </stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <FavouriteProvider>
      <SearchRestContext>
        <RestContext>
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
            <tab.Screen name="Settings" component={SettingStack} />
          </tab.Navigator>
        </RestContext>
      </SearchRestContext>
    </FavouriteProvider>
  );
};

export default Navigation;
