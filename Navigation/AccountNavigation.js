import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Login from "../screens/Account/Login";
import Main from "../screens/Account/Main";
import Register from "../screens/Account/Register";

const stack = createStackNavigator();

const AccountNavigation = () => {
  return (
    <stack.Navigator headerMode={false}>
      <stack.Screen name="Main" component={Main} />
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Register" component={Register} />
    </stack.Navigator>
  );
};

export default AccountNavigation;
