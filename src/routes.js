import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import Main from "./pages/Main";

const Stack = createStackNavigator();

export default function Routes({ authenticated }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(0);

  // isSignedIn().then((res) => setIsLoggedIn(res));

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authenticated ? (
          <Stack.Screen name="Main" component={Main} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
