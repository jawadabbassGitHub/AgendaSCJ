import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { styles } from "../../Styles/HomeScreenStyles/HomeBannerSliderScreen.styles";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regula, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { useNavigation } from "@react-navigation/native";

const HomeBannerSlider = () => {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regula,
    Nunito_700Bold,
  });

  const navigation = useNavigation();

  if (!fontsLoaded && !fontError) {
    return null;
  }
  const bannerData = [
    {
      id: 1,
      bg_image: require("../../../../assets/Images/carousel/carousel_1.png"),
      bg_image_1: require("../../../../assets/Images/carousel/carousel_image_1.png"),
      title: "Proffesional UI-UX Design Course",
      offer: "30% Off",
      buttonText: "Explore Now",
    },
    {
      id: 2,
      bg_image: require("../../../../assets/Images/carousel/caroules_2.png"),
      bg_image_1: require("../../../../assets/Images/carousel/caroules_image_2.png"),
      title: "Join Upcoming Design Event",
      offer: "Jan 15, 2024",
      buttonText: "Get Ticket",
    },
    {
      id: 3,
      bg_image: require("../../../../assets/Images/carousel/carousel_1.png"),
      bg_image_1: require("../../../../assets/Images/carousel/carousel_image_1.png"),
      title: "Proffesional UI-UX Design Course",
      offer: "30% Off",
      buttonText: "Explore Now",
    },
  ];

  return (
    <View style={styles.container}>
      <Swiper
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        autoplay={true}
        autoplayTimeout={5}
      >
        {bannerData.map((item) => (
          <View key={item.id} style={styles.slide}>
            <View style={styles.backgroundView}>
              <View style={styles.backgroundViewContainer}>
                <Text
                  style={[
                    styles.backgroundViewText,
                    { fontFamily: "Raleway_700Bold" },
                  ]}
                >
                  {item.title}
                </Text>
                <Text
                  style={[
                    styles.backgroundViewOffer,
                    { fontFamily: "Nunito_400Regular" },
                  ]}
                >
                  {item.offer}
                </Text>
                {item.buttonText === "Explore Now" && (
                  <TouchableOpacity
                    style={styles.backgroundViewButtonContainer}
                    onPress={() => navigation.navigate("Course")}
                  >
                    <Text
                      style={[
                        styles.backgroundViewButtonText,
                        { fontFamily: "Nunito_700Bold" },
                      ]}
                    >
                      {item.buttonText}
                    </Text>
                  </TouchableOpacity>
                )}
                {item.buttonText === "Get Ticket" && (
                  <TouchableOpacity
                    style={styles.backgroundViewButtonContainer}
                    onPress={() => navigation.navigate("Events")}
                  >
                    <Text
                      style={[
                        styles.backgroundViewButtonText,
                        { fontFamily: "Nunito_700Bold" },
                      ]}
                    >
                      {item.buttonText}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
              <Image
                style={styles.backgroundViewImage}
                source={item.bg_image_1}
              />
            </View>
            <Image source={item.bg_image} style={styles.background}></Image>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default HomeBannerSlider;
