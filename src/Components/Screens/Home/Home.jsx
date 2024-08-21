import { ScrollView } from "react-native";
import React, { useState } from "react";
import HomeBannerSlider from "./HomeBannerSlider";
import Header from "../../Shared/Header/Header";
import { styles } from "../../Styles/HomeScreenStyles/HomeMainScreen.styles";
import { LinearGradient } from "expo-linear-gradient";
import HomeTopCategorySection from "./HomeTopCategorySection";
import HomePopulerCourses from "./HomePopulerCourses";
import HomePopulerMentor from "./HomePopulerMentor";
import SearchInput from "../../Shared/SearchInput/SearchInput";
import HomeMoreCourse from "./HomeMoreCourse";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useState(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  if (loading) {
    return <AnimatedLoading />;
  }

  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
      <Header />
      <ScrollView>
        <SearchInput />
        <HomeBannerSlider />
        <HomeTopCategorySection />
        <HomePopulerCourses />
        <HomePopulerMentor />
        <HomeMoreCourse />
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;
