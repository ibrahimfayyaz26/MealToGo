import React, { useContext } from "react";
import { Text, Button, SafeAreaView, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Restaurant from "../screens/restaurant/Reastaurant";
import { Ionicons } from "@expo/vector-icons";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantDetails from "../screens/restaurant/RestaurantDetails";
import Map from "../screens/Map/Map";
import { Account } from "../servicws/AccountContext";
import { SearchRestContext } from "../servicws/locationContext";
import { RestContext } from "../servicws/RestaurantContext";
import { FavouriteProvider } from "../servicws/FavouriteContext";

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
  const { onLogout } = useContext(Account);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings</Text>
        <Button title="logout" onPress={() => onLogout()} />
      </View>
    </SafeAreaView>
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
            <tab.Screen name="Settings" component={Settings} />
          </tab.Navigator>
        </RestContext>
      </SearchRestContext>
    </FavouriteProvider>
  );
};

export default Navigation;
