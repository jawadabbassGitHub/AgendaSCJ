import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Image } from "react-native";
import Search from "../Components/Screens/Search/Search";
import HomeNavigation from "./HomeNavigation";
import Profile from "../Components/Screens/Profile/Profile";
import Course from "../Components/Screens/Course/Course";
import { useFonts, Nunito_600SemiBold } from "@expo-google-fonts/nunito";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  let [fontsLoaded, fontError] = useFonts({
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Group
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = require("../../assets/Images/icon/HouseSimple.png");
              } else if (route.name === "Search") {
                iconName = require("../../assets/Images/icon/search.png");
              } else if (route.name === "Course") {
                iconName = require("../../assets/Images/icon/BookBookmark.png");
              } else if (route.name === "Profile") {
                iconName = require("../../assets/Images/icon/User.png");
              }

              return (
                <Image
                  style={{ width: 25, height: 25, tintColor: color }}
                  source={iconName}
                />
              );
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontFamily: "Nunito_600SemiBold",
              marginBottom: 15,
            },
            tabBarHideOnKeyboard: true,
            tabBarStyle: { height: 70 },
            tabBarIconStyle: { marginTop: 7 },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Course"
            component={Course}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
        </Tab.Group>
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BottomTabNavigation;
