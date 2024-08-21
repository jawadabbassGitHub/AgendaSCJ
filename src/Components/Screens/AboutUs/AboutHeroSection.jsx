import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../../Styles/AboutScreenStyles/AboutHeroScreen.styles";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";

const AboutHeroSection = () => {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/Images/About/About_Hero.jpg")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.title, { fontFamily: "Raleway_700Bold" }]}>
          Why Choose Us?
        </Text>
        <Text style={[styles.subtitle, { fontFamily: "Nunito_600SemiBold" }]}>
          For Your Knowledge Growth
        </Text>
      </View>
      <Text style={[styles.description, { fontFamily: "Nunito_400Regular" }]}>
        Elevate your skills and advance your career. Don't miss out on this
        opportunity to excel. Join us today and unlock your potential!
      </Text>
      <View>
        <View style={styles.checkItem}>
          <AntDesign name="checkcircle" size={20} color={"#0090B8"} />
          <Text style={[styles.checkText, { fontFamily: "Nunito_400Regular" }]}>
            Free access to handcrafted courses
          </Text>
        </View>
        <View style={styles.checkItem}>
          <AntDesign name="checkcircle" size={20} color={"#0090B8"} />
          <Text style={[styles.checkText, { fontFamily: "Nunito_400Regular" }]}>
            Easy enrollment process
          </Text>
        </View>
        <View style={styles.checkItem}>
          <AntDesign name="checkcircle" size={20} color={"#0090B8"} />
          <Text style={[styles.checkText, { fontFamily: "Nunito_400Regular" }]}>
            Earn certificates for each course
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AboutHeroSection;
