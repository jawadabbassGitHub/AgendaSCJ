import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { categoriesData } from "../../Data/CategoriesData";
import { styles } from "../../Styles/CoursesScreenStyles/AllCoursesScreen.styles";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import CustomBackHeader from "../../Custom/CustomBackHeader";

const AllCourses = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const { categoryID } = route.params;

  const coursesData = categoriesData.find((item) => categoryID === item.id);

  const handleCourseDetails = (courseDetails) => {
    navigation.navigate("Course Details", {
      courseDetails: courseDetails,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
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
          <CustomBackHeader coursesData={coursesData}>Courses</CustomBackHeader>

          <View style={{ marginHorizontal: 16 }}>
            <FlatList
              data={coursesData.categoryData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
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
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
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
                            {item.studentCount}+ Student
                          </Text>
                        </View>
                      </View>
                      <View
                        style={[styles.locationContainer, { marginTop: 10 }]}
                      >
                        <View style={styles.locationContainer}>
                          <AntDesign name="book" size={18} color={"#8A8A8A"} />
                          <Text
                            style={[
                              styles.data,
                              { fontFamily: "Nunito_500Medium" },
                            ]}
                          >
                            {item.lessons}
                          </Text>
                        </View>
                        <View
                          style={[styles.locationContainer, { marginLeft: 10 }]}
                        >
                          <AntDesign name="user" size={18} color={"#8A8A8A"} />
                          <Text
                            style={[
                              styles.data,
                              { fontFamily: "Nunito_500Medium" },
                            ]}
                          >
                            {item.authorName}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </LinearGradient>
      )}
    </>
  );
};

export default AllCourses;
