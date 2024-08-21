import { ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import AboutHeroSection from "./AboutHeroSection";
import AboutOnlineCategories from "./AboutOnlineCategories";
import AboutVideoIntro from "./AboutVideoIntro";
import AboutUserCountSection from "./AboutUserCountSection";
import { styles } from "../../Styles/AboutScreenStyles/AboutMain.styles";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import { LinearGradient } from "expo-linear-gradient";
import CustomDrawerHeader from "../../Custom/CustomDrawerHeader";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <AnimatedLoading />
      ) : (
        <LinearGradient
          colors={["#E5ECF9", "#F6F7F9"]}
          style={styles.container}
        >
          <CustomDrawerHeader>About</CustomDrawerHeader>
          <ScrollView>
            <AboutHeroSection />

            <AboutOnlineCategories />

            <AboutVideoIntro />

            <AboutUserCountSection />
          </ScrollView>
        </LinearGradient>
      )}
    </>
  );
};

export default AboutUs;
