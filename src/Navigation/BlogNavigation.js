import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Blog from "../Components/Screens/Blog/Blog";
import BlogDetails from "../Components/Screens/Blog/BlogDetails";

const Stack = createNativeStackNavigator();

const BlogNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Blog Page"
        component={Blog}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Blog Details"
        component={BlogDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default BlogNavigation;
