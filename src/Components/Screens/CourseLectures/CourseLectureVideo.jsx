import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import WebView from "react-native-webview";
import { styles } from "../../Styles/CoursesScreenStyles/CourseLectureVidoeScreen.styles";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_500Medium, Nunito_400Regular } from "@expo-google-fonts/nunito";

const CourseLectureVideo = () => {
  const route = useRoute();
  const [isLoading, setIsLoading] = useState(true);
  const { couserVideo } = route.params;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_500Medium,
    Nunito_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <AnimatedLoading />
      ) : (
        <LinearGradient
          colors={["#E5ECF9", "#F6F7F9"]}
          style={styles.container}
        >
          <View style={styles.videoContainer}>
            <WebView
              source={{
                uri: `https://www.youtube.com/embed/${couserVideo.videoID}`,
              }}
              allowsFullscreenVideo={true}
              style={styles.video}
            />
          </View>
          <View style={styles.videoInfo}>
            <Text
              style={[styles.videoTitle, { fontFamily: "Raleway_700Bold" }]}
            >
              {couserVideo.title}
            </Text>
            <Text
              style={[
                styles.videoDescription,
                { fontFamily: "Nunito_400Regular" },
              ]}
            >
              {couserVideo.description}
            </Text>
          </View>
        </LinearGradient>
      )}
    </>
  );
};

export default CourseLectureVideo;
