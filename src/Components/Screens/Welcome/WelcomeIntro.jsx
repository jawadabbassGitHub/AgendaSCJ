import { View, Text, Image } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { onboardingSwiperData } from "../../Data/OnboardingSwiperData";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../Styles/WelcomeScreenStyles/WelcomeIntroScreen.styles";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";

const WelcomeIntro = () => {
  const navigation = useNavigation();

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const renderItem = ({ item }) => (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9", "#E8EEF9"]}
      style={styles.container}
    >
      <View style={styles.wrapper}>
        <Image source={item.image} style={styles.slideImage} />
        <Text style={[styles.title, { fontFamily: "Raleway_700Bold" }]}>
          {item.title}
        </Text>
        <View style={styles.descriptionContainer}>
          <Text
            style={[styles.description, { fontFamily: "Nunito_400Regular" }]}
          >
            {item.description}
          </Text>
          <Text
            style={[styles.description, { fontFamily: "Nunito_400Regular" }]}
          >
            {item.sortDescrition}
          </Text>
          <Text
            style={[styles.description, { fontFamily: "Nunito_400Regular" }]}
          >
            {item.sortDescrition2}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={onboardingSwiperData}
      onDone={() => {
        navigation.navigate("Login");
      }}
      onSkip={() => {
        navigation.navigate("Login");
      }}
      renderNextButton={() => (
        <View style={styles.buttonContainer}>
          <Text
            style={[styles.buttonText, { fontFamily: "Nunito_600SemiBold" }]}
          >
            Next
          </Text>
        </View>
      )}
      renderDoneButton={() => (
        <View style={styles.buttonContainer}>
          <Text
            style={[styles.buttonText, { fontFamily: "Nunito_600SemiBold" }]}
          >
            Done
          </Text>
        </View>
      )}
      showSkipButton={false}
      dotStyle={styles.dotStyle}
      bottomButton={true}
      activeDotStyle={styles.activeDotStyle}
    />
  );
};

export default WelcomeIntro;
