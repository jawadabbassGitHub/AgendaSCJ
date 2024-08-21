import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Feather,
  Ionicons,
  Entypo,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { populerMentorData } from "../../Data/PopulerMentorData";
import { categoriesData } from "../../Data/CategoriesData";
import { styles } from "../../Styles/HomeScreenStyles/HomeTopInstructorDetails.styles";

const TopInstractorDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { instructorID, instructorCategory } = route.params;

  const instructorData = populerMentorData.find(
    (item) => instructorID === item.id
  );
  const instructorCourse = categoriesData.find(
    (item) => instructorCategory === item.category
  );

  const handleCourseDetails = (courseDetails) => {
    navigation.navigate("Course Details", {
      courseDetails: courseDetails,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: instructorData.image_url }} style={styles.image} />
      <Text style={styles.name}>{instructorData.name}</Text>
      <Text style={styles.specialization}>{instructorData.specialization}</Text>

      <View style={styles.contactInfo}>
        <View style={styles.contactItem}>
          <Feather name="mail" size={22} color={"blue"} />
          <Text style={styles.contactText}>{instructorData.email}</Text>
        </View>
        <View style={styles.contactItem}>
          <Feather name="phone" size={22} color={"blue"} />
          <Text style={styles.contactText}>{instructorData.phone}</Text>
        </View>
        <View style={styles.contactItem}>
          <Ionicons name="location-outline" size={22} color={"blue"} />
          <Text style={styles.contactText}>{instructorData.address}</Text>
        </View>
      </View>

      <Text style={styles.description}>{instructorData.description}</Text>

      <Text style={styles.skillsTitle}>Skills:</Text>
      <View style={styles.skillsList}>
        {instructorData.skill.map((text, index) => (
          <View key={index} style={styles.skillItem}>
            <Text style={styles.skillText}>{text}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.experience}>
        Experience: {instructorData.experience_years} years
      </Text>
      <View style={styles.instructorContainer}>
        <Text style={styles.instructorCoursesText}>Instructor Courses</Text>
        <View style={styles.courseContainer}>
          {instructorCourse.categoryData.map((item) => {
            return (
              <View style={styles.courseWrapper} key={item.id}>
                <TouchableOpacity onPress={() => handleCourseDetails(item)}>
                  <Image source={item.img} style={styles.courseImage} />
                </TouchableOpacity>
                <View style={styles.courseRightSection}>
                  <TouchableOpacity onPress={() => handleCourseDetails(item)}>
                    <Text style={styles.courseTitle}>{item.title}</Text>
                  </TouchableOpacity>
                  <View style={styles.courseRightWrapper}>
                    <View style={styles.sectionWrapper}>
                      <Entypo name="dot-single" size={28} color={"gray"} />
                      <Text
                        style={[
                          styles.courseLevelText,
                          { marginTop: 3, marginLeft: -5 },
                        ]}
                      >
                        {item.level}
                      </Text>
                    </View>
                    <View style={[styles.sectionWrapper, { columnGap: 2 }]}>
                      <AntDesign name="star" size={18} color={"orange"} />
                      <Text style={styles.courseLevelText}>
                        {item.ratingAve}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.priceSection}>
                    <Text style={styles.priceText2}>Price: </Text>
                    <Text style={styles.priceText}>
                      <FontAwesome name="dollar" size={18} color={"black"} />
                      {item.price}
                    </Text>
                  </View>
                  <View style={styles.subjectSection}>
                    <Text style={styles.subjectText}>
                      Subject: {item.subject}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default TopInstractorDetails;
