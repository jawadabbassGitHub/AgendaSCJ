import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../Styles/CourseScreenStyles/CourseScreen.styles";
import { LinearGradient } from "expo-linear-gradient";
import SearchInput from "../../Shared/SearchInput/SearchInput";
import { searchAndFilteringData } from "../../Data/SearchAndFilteringData";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import {
  useFonts,
  Raleway_700Bold,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_500Medium,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import CustomDrawerHeader from "../../Custom/CustomDrawerHeader";
import Colors from "../../Utils/Color";

const Course = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredEventData, setFilteredEventData] = useState(
    searchAndFilteringData
  );
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    setLoading(true);
    setActiveCategory(category);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleCourseDetails = (courseDetails) => {
    navigation.navigate("Course Details", {
      courseDetails: courseDetails,
    });
  };

  const slideCategory = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Business",
    },
    {
      id: 3,
      title: "Development",
    },
    {
      id: 4,
      title: "Data Science",
    },
    {
      id: 5,
      title: "Arts and Design",
    },
    {
      id: 6,
      title: "Finance",
    },
    {
      id: 7,
      title: "Marketing",
    },
    {
      id: 8,
      title: "Management",
    },
    {
      id: 9,
      title: "Health",
    },
    {
      id: 10,
      title: "Photography",
    },
    {
      id: 11,
      title: "Music",
    },
  ];

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredEventData(searchAndFilteringData);
    } else {
      const filteredData = searchAndFilteringData.filter((item) =>
        item.category.includes(activeCategory)
      );
      setFilteredEventData(filteredData);
    }
  }, [activeCategory]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Raleway_600SemiBold,
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
          <CustomDrawerHeader>Course</CustomDrawerHeader>
          <ScrollView>
            <SearchInput />
            <View style={styles.bannerContainer}>
              <View style={styles.backgroundView}>
                <View style={styles.backgroundViewContainer}>
                  <Text
                    style={[
                      styles.backgroundViewText,
                      { fontFamily: "Raleway_700Bold" },
                    ]}
                  >
                    Proffesional UI-UX Design Course
                  </Text>
                  <Text
                    style={[
                      styles.backgroundViewOffer,
                      { fontFamily: "Nunito_400Regular" },
                    ]}
                  >
                    30% Off
                  </Text>
                  <TouchableOpacity
                    style={styles.backgroundViewButtonContainer}
                  >
                    <Text
                      style={[
                        styles.backgroundViewButtonText,
                        { fontFamily: "Nunito_700Bold" },
                      ]}
                    >
                      Explore Now
                    </Text>
                  </TouchableOpacity>
                </View>
                <Image
                  style={styles.backgroundViewImage}
                  source={require("../../../../assets/Images/carousel/carousel_image_1.png")}
                />
              </View>
              <Image
                source={require("../../../../assets/Images/carousel/carousel_1.png")}
                style={styles.background}
              ></Image>
            </View>
            <View style={styles.categorySlideWrapper}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={slideCategory}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.categorySlideContainer,
                      {
                        backgroundColor:
                          activeCategory === item.title
                            ? "rgba(36, 103, 236, 0.15)"
                            : "white",
                      },
                    ]}
                    onPress={() => handleCategoryPress(item.title)}
                  >
                    <Text
                      style={[
                        styles.categoryText,
                        {
                          color:
                            activeCategory === item.title
                              ? Colors.PRIMARY.PRIMARY_RETRO_BLUE
                              : "black",
                          fontFamily: "Nunito_500Medium",
                        },
                      ]}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            {loading ? (
              <ActivityIndicator
                size="large"
                color={"#2267EC"}
                style={{ marginTop: 50 }}
              />
            ) : (
              <View style={styles.courseItemContainer}>
                {filteredEventData.map((item) => (
                  <TouchableOpacity
                    onPress={() => handleCourseDetails(item)}
                    key={item.id}
                    style={styles.itemContainer}
                  >
                    <TouchableOpacity onPress={() => handleCourseDetails(item)}>
                      <Image style={styles.itemImage} source={item.img} />
                      <View style={styles.ratingContainer}>
                        <View style={styles.ratingWrapper}>
                          <FontAwesome
                            name="star"
                            size={13}
                            color={"#FFB800"}
                          />
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
                    </TouchableOpacity>
                    <View style={styles.itemRightSection}>
                      <TouchableOpacity
                        onPress={() => handleCourseDetails(item)}
                      >
                        <Text
                          style={[
                            styles.itemTitleText,
                            { fontFamily: "Raleway_600SemiBold" },
                          ]}
                        >
                          {item.title}
                        </Text>
                      </TouchableOpacity>

                      <View style={styles.maintorContainer}>
                        <View style={styles.mentorImageContainer}>
                          <View style={styles.mentorWrap1}>
                            <Image
                              style={styles.mentorWrapImage}
                              source={require("../../../../assets/Images/mentor/mentor_1.png")}
                            />
                          </View>
                          <View style={styles.mentorWrap2}>
                            <Image
                              style={styles.mentorWrapImage}
                              source={require("../../../../assets/Images/mentor/mentor_2.png")}
                            />
                          </View>
                          <View style={styles.mentorWrap3}>
                            <Image
                              style={styles.mentorWrapImage}
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
                            {item.studentCount}+ Student
                          </Text>
                        </View>
                      </View>

                      <View style={styles.minitueAndPriceContainer}>
                        <View style={styles.timeSectionContainer}>
                          <Ionicons
                            name="time-outline"
                            size={16}
                            color={"#8A8A8A"}
                          />
                          <Text
                            style={[
                              styles.timeText,
                              { fontFamily: "Nunito_500Medium" },
                            ]}
                          >
                            {item.time}
                          </Text>
                        </View>
                        <View style={styles.timeSectionContainer}>
                          <FontAwesome
                            name="dollar"
                            size={13}
                            color={"#8A8A8A"}
                          />
                          <Text
                            style={[
                              styles.priceText,
                              { fontFamily: "Nunito_600SemiBold" },
                            ]}
                          >
                            {item.price}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </ScrollView>
        </LinearGradient>
      )}
    </>
  );
};

export default Course;
