import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import Navigation from "./Navigation";
import AccountNavigation from "./AccountNavigation";
import { Account } from "../servicws/AccountContext";

const AppNavigation = () => {
  const { isAuthenticated } = useContext(Account);

  return (
    <NavigationContainer>
      {isAuthenticated ? <Navigation /> : <AccountNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
