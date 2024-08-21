import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Welcome";
import WelcomeIntro from "./WelcomeIntro";

const Stack = createNativeStackNavigator();

const WelcomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome Page"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome Intro"
        component={WelcomeIntro}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default WelcomeScreen;
