import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Event from "../Components/Screens/Event/Event";
import EventDetails from "../Components/Screens/Event/EventDetails";

const Stack = createNativeStackNavigator();

const EventNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Event Page"
        component={Event}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Event Details"
        component={EventDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default EventNavigation;
