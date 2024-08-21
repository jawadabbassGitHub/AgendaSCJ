import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { populerCoursesData } from "../../Data/PopulerCoursesData";
import { styles } from "../../Styles/HomeScreenStyles/HomePopulerCoursesScreen.styles";
import { Ionicons, Fontisto, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Raleway_700Bold,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_600SemiBold,
  Nunito_500Medium,
} from "@expo-google-fonts/nunito";

const HomePopulerCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation();

  const flatListRef = useRef(null);

  const handleCourseDetails = (courseDetails) => {
    navigation.navigate("Course Details", {
      courseDetails: courseDetails,
    });
  };

  useEffect(() => {
    const handleAutoSlide = () => {
      const nextIndex = (currentIndex + 1) % populerCoursesData.length;
      setCurrentIndex(nextIndex);
    };

    const interval = setInterval(handleAutoSlide, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_600SemiBold,
    Raleway_600SemiBold,
    Nunito_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.populerCourseContainer}>
      <View style={styles.populerCourseWrapper}>
        <Text
          style={[styles.populerCourseText, { fontFamily: "Raleway_700Bold" }]}
        >
          Popular Courses
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Populer Courses")}
        >
          <Text
            style={[styles.seeAllText, { fontFamily: "Nunito_600SemiBold" }]}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        ref={flatListRef}
        data={populerCoursesData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.floor(
            event.nativeEvent.contentOffset.x / Dimensions.get("window").width
          );
          setCurrentIndex(newIndex);
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.populerItemContainer}
            onPress={() => handleCourseDetails(item)}
          >
            <View>
              <Image style={styles.populerItemImage} source={item.img} />
              <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={14} color={"#FFB800"} />
                <Text
                  style={[
                    styles.ratingText,
                    { fontFamily: "Nunito_600SemiBold" },
                  ]}
                >
                  {item.ratingAve}
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={[
                  styles.populerItemTitle,
                  { fontFamily: "Raleway_600SemiBold" },
                ]}
              >
                {item.title}
              </Text>
            </View>
            <View style={styles.durationContainer}>
              <View style={styles.durationContainer}>
                <Ionicons name="time-outline" size={17} color={"#8A8A8A"} />
                <Text
                  style={[
                    styles.durationText,
                    { marginLeft: 4, fontFamily: "Nunito_500Medium" },
                  ]}
                >
                  20 Hours
                </Text>
              </View>
              <View style={styles.durationContainer}>
                <Fontisto name="dollar" color={"#808080"} size={14} />
                <Text
                  style={[
                    styles.durationText,
                    { fontFamily: "Nunito_600SemiBold", marginLeft: 0.5 },
                  ]}
                >
                  {item.price}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={styles.paginationDots}>
        {populerCoursesData.slice(0, 3).map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dot, index === currentIndex && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default HomePopulerCourses;
