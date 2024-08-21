import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { populerCoursesData } from "../../Data/PopulerCoursesData";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../Styles/PopulerCoursesStyle/PopulerCoursesScreen.styles";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import CustomBackHeader from "../../Custom/CustomBackHeader";

const PopulerCourses = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  const handleCourseDetails = (course) => {
    navigation.navigate("Course Details", {
      courseDetails: course,
    });
  };

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
          <CustomBackHeader>Populer Courses</CustomBackHeader>
          <FlatList
            data={populerCoursesData}
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
                    <View style={[styles.locationContainer, { marginTop: 10 }]}>
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
        </LinearGradient>
      )}
    </>
  );
};
export default PopulerCourses;
