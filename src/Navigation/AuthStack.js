import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../Components/Screens/Welcome/WelcomeScreen";
import Login from "../Components/Screens/Login/LoginScreen";
import SignupScreen from "../Components/Screens/Signup/SignupScreen";
import ForgotPassword from "../Components/Screens/ForgotPassword/ForgotPassword";
import AccountConfirmation from "../Components/Screens/AccountConfirmation/AccountConfirmation";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Account Confirmation"
        component={AccountConfirmation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPassword}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
