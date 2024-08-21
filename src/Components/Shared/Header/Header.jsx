import { View, Text, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../Styles/HeaderStyles/Header.styles";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";

const Header = () => {
  const navigation = useNavigation();

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={styles.userActive}></View>
          <Image
            source={require("../../../../assets/Images/user.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <View>
          <Text style={[styles.helloText, { fontFamily: "Raleway_700Bold" }]}>
            Hello
          </Text>
          <Text style={[styles.text, { fontFamily: "Raleway_700Bold" }]}>
            Enita Bulligan
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.bellButton}
        onPress={() => navigation.navigate("Cart")}
      >
        <View>
          <Feather name="shopping-bag" size={26} color={"black"} />
          <View style={styles.bellContainer}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
