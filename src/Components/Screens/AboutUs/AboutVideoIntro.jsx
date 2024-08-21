import { View, Text } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { styles } from "../../Styles/AboutScreenStyles/AboutVideoIntro.styles";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";

const AboutVideoIntro = () => {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.introText, { fontFamily: "Raleway_700Bold" }]}>
        Online Course Intro Video
      </Text>
      <View style={styles.videoContainer}>
        <View style={styles.videoWrapper}>
          <WebView
            source={{ uri: `https://www.youtube.com/embed/ieCsbaqbpgk` }}
            allowsFullscreenVideo={true}
          />
        </View>
      </View>
    </View>
  );
};

export default AboutVideoIntro;
