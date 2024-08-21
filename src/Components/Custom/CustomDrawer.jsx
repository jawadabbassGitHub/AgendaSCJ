import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../../Context/AuthProvider";
import { styles } from "../Styles/CustomDrawerStyles/CustomDrawer.styles";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_600SemiBold } from "@expo-google-fonts/nunito";

const CustomDrawer = (props) => {
  const { logout, user } = useContext(AuthContext);

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const { width } = Dimensions.get("window");
  const buttonSize = width * 0.1;

  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/Images/user.png")}
          style={styles.headerImage}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.headerText, { fontFamily: "Raleway_700Bold" }]}>
            Enita Bulligan
          </Text>
          <Text
            style={[styles.headerEmail, { fontFamily: "Nunito_600SemiBold" }]}
          >
            Enitabulligan@gmail.com
          </Text>
        </View>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList
          {...props}
          labelStyle={styles.drawerContent}
          activeTintColor="#2E86C1"
          inactiveTintColor="#333"
        />
      </DrawerContentScrollView>

      <TouchableOpacity style={styles.signOutButton} onPress={() => logout()}>
        <AntDesign name="logout" size={24} color={"#2E86C1"} />
        <Text style={[styles.signOutText, { fontFamily: "Raleway_700Bold" }]}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CustomDrawer;
