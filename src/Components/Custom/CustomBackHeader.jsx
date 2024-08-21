import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5, Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { styles } from "../Styles/CustomHeaderStyles/CustomBackHeader.styles";

const CustomBackHeader = ({ children, coursesData }) => {
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
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="left" size={24} color={"black"} />
      </TouchableOpacity>
      {coursesData ? (
        <Text style={[styles.text, { fontFamily: "Raleway_700Bold" }]}>
          {coursesData.category} {children}
        </Text>
      ) : null}
      {!coursesData && (
        <Text style={[styles.text, { fontFamily: "Raleway_700Bold" }]}>
          {children}
        </Text>
      )}
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

export default CustomBackHeader;
