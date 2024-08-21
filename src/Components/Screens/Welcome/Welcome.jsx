import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import styles from "../../Styles/WelcomeScreenStyles/WelcomeScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";

const Welcome = () => {
  const navigation = useNavigation();

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
      <View style={styles.firstContainer}>
        <View>
          <Image
            style={styles.logo}
            source={require("../../../../assets/Images/Welcome/eduman-logo.png")}
          />
          <Image
            source={require("../../../../assets/Images/Welcome/shape_9.png")}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Image
            style={styles.titleTextShape1}
            source={require("../../../../assets/Images/Welcome/shape_3.png")}
          />
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Start Learning with
          </Text>

          <Image
            style={styles.titleTextShape2}
            source={require("../../../../assets/Images/Welcome/shape_2.png")}
          />
        </View>
        <View>
          <Image
            style={styles.titleShape3}
            source={require("../../../../assets/Images/Welcome/shape_6.png")}
          />
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Jawad
          </Text>
        </View>
        <View style={styles.dscpWrapper}>
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
            Explore a variety of interactive lesson,
          </Text>
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
            video, quizze & assignment.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => navigation.navigate("Welcome Intro")}
        >
          <Text style={[styles.buttonText, { fontFamily: "Nunito_700Bold" }]}>
            Getting Started
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.backgroundImageWrapper}>
        <Image
          style={styles.bachgroundShape1}
          source={require("../../../../assets/Images/Welcome/shape_4.png")}
        />
        <Image
          style={styles.bachgroundShape5}
          source={require("../../../../assets/Images/Welcome/shape_8.png")}
        />
        <Image
          style={styles.backgroundImage}
          source={require("../../../../assets/Images/Welcome/welcome_background.png")}
        />
        <Image
          style={styles.bachgroundShape2}
          source={require("../../../../assets/Images/Welcome/shape_5.png")}
        />
        <Image
          style={styles.bachgroundShape3}
          source={require("../../../../assets/Images/Welcome/shape.png")}
        />
        <Image
          style={styles.bachgroundShape4}
          source={require("../../../../assets/Images/Welcome/circule.png")}
        />
      </View>
    </LinearGradient>
  );
};

export default Welcome;
