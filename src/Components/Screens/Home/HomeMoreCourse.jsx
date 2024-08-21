import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../../Styles/HomeScreenStyles/HomeMoreCourse.styles";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import {
  useFonts,
  Raleway_700Bold,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_600SemiBold,
  Nunito_500Medium,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { useNavigation } from "@react-navigation/native";
import { moreCoursesData } from "../../Data/MoreCoursesData";

const HomeMoreCourse = () => {
  const navigation = useNavigation();

  const handleCourseDetails = (courseDetails) => {
    navigation.navigate("Course Details", {
      courseDetails: courseDetails,
    });
  };

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_600SemiBold,
    Raleway_600SemiBold,
    Nunito_500Medium,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.continer}>
      <View style={styles.populerMentorContainer}>
        <Text
          style={[styles.populerCourseText, { fontFamily: "Raleway_700Bold" }]}
        >
          More Course
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("More Courses")}>
          <Text
            style={[styles.seeAllText, { fontFamily: "Nunito_600SemiBold" }]}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <Swiper
        style={{ height: 180 }}
        showsButtons={false}
        dotStyle={styles.paginationDot}
        activeDotStyle={styles.activePaginationDot}
        autoplay={true}
        autoplayTimeout={5}
      >
        {moreCoursesData.map((item) => (
          <TouchableOpacity
            onPress={() => handleCourseDetails(item)}
            key={item.id}
            style={styles.eventItemContainer}
          >
            <TouchableOpacity onPress={() => handleCourseDetails(item)}>
              <Image style={styles.eventItemImage} source={item.img} />
            </TouchableOpacity>
            <View style={styles.eventRightSection}>
              <TouchableOpacity onPress={() => handleCourseDetails(item)}>
                <Text
                  style={[
                    styles.eventText,
                    { fontFamily: "Raleway_600SemiBold" },
                  ]}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
              <View style={styles.eventRightTextSection}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={styles.mentorImageContainer}>
                    <View
                      style={{
                        borderColor: "#FFFF",
                        borderWidth: 2,
                      }}
                    >
                      <Image
                        style={{ width: 30, height: 30 }}
                        source={require("../../../../assets/Images/mentor/mentor_1.png")}
                      />
                    </View>
                    <View
                      style={{
                        borderColor: "#FFFF",
                        borderWidth: 2,
                        right: 13,
                        borderRadius: 50,
                      }}
                    >
                      <Image
                        style={{
                          width: 30,
                          height: 30,
                        }}
                        source={require("../../../../assets/Images/mentor/mentor_2.png")}
                      />
                    </View>
                    <View
                      style={{
                        borderColor: "#FFFF",
                        borderWidth: 2,
                        right: 26,
                        borderRadius: 50,
                      }}
                    >
                      <Image
                        style={{ width: 30, height: 30 }}
                        source={require("../../../../assets/Images/mentor/mentor_3.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.eventTextWrapper}>
                    <Text
                      style={[
                        styles.eventTextAudience,
                        { fontFamily: "Nunito_500Medium" },
                      ]}
                    >
                      {item.studentCount}+ Going
                    </Text>
                    <View style={styles.ratingSection}>
                      <FontAwesome name="star" size={16} color={"#FFB800"} />
                      <Text
                        style={[
                          styles.ratingText,
                          { fontFamily: "Nunito_700Bold" },
                        ]}
                      >
                        4.6
                      </Text>
                      <Text
                        style={[
                          styles.eventTextAudiences,
                          { fontFamily: "Nunito_600SemiBold" },
                        ]}
                      >
                        ({item.seat})
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.locationContainer, { marginTop: 10 }]}>
                  <View style={styles.locationContainer}>
                    <Feather name="calendar" size={18} color={"#8A8A8A"} />
                    <Text
                      style={[styles.data, { fontFamily: "Nunito_500Medium" }]}
                    >
                      {item.date}
                    </Text>
                  </View>
                  <View style={[styles.locationContainer, { marginLeft: 10 }]}>
                    <Image
                      style={styles.mapImage}
                      source={require("../../../../assets/Images/icon/MapPin.png")}
                    />
                    <Text
                      style={[
                        styles.data,
                        { fontFamily: "Nunito_500Medium", marginLeft: 2 },
                      ]}
                    >
                      {item.location}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};

export default HomeMoreCourse;
