import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import {} from "@expo-google-fonts/nunito";
import { styles } from "../Styles/CustomHeaderStyles/CustomHeader.styles";

const CustomDrawerHeader = ({ children }) => {
  const navigation = useNavigation();

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backIconWrapper}
        onPress={() => navigation.openDrawer()}
      >
        <FontAwesome5 name="bars" size={24} color={"black"} />
      </TouchableOpacity>
      <Text style={[styles.text, { fontFamily: "Raleway_700Bold" }]}>
        {children}
      </Text>
      <TouchableOpacity
        style={styles.backIconWrapper}
        onPress={() => navigation.navigate("Cart")}
      >
        <View>
          <View style={styles.cartRed}></View>
          <Feather name="shopping-bag" size={26} color={"black"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerHeader;
