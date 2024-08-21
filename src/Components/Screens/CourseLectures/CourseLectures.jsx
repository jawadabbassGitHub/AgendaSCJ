import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Entypo,
  Ionicons,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import { relatedCoursesData } from "../../Data/RelatedCoursesData";
import { styles } from "../../Styles/CoursesScreenStyles/CourseLecturesScreen.style";

const CourseLectures = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const { courseModule } = route.params;

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  const calculateTotalVideoDuration = (curriculum) => {
    let totalMinutes = 0;
    for (const item of curriculum) {
      const [hours, minutes] = item.videoDuration.split(" ");
      const hoursInMinutes = parseInt(hours) * 60;
      const minutesInt = parseInt(minutes);

      totalMinutes += hoursInMinutes + minutesInt;
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { hours, minutes };
  };

  const totalVideoDuration = calculateTotalVideoDuration(
    courseModule.curriculum
  );

  const formattedTotalDuration = `${totalVideoDuration.hours} hours ${totalVideoDuration.minutes} minutes`;

  const handleCouserLectureVideo = (item, index) => {
    navigation.navigate("Course Lecture Video", {
      couserVideo: item,
    });
  };

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
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
          <View style={styles.videoContainer}>
            <WebView
              source={{
                uri: `https://www.youtube.com/embed/${courseModule.videoUrl}`,
              }}
              allowsFullscreenVideo={true}
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Course Instruction Demo</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.curriculumTitle}>Curriculum</Text>
            <View style={styles.curriculumInfo}>
              <Text style={styles.infoText}>
                {courseModule.curriculum.length} lectures
              </Text>
              <Entypo name="dot-single" size={24} color={"black"} />
              <Text style={styles.infoText}>{formattedTotalDuration}</Text>
            </View>
            <View style={styles.courseModuleContainer}>
              {courseModule.curriculum.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.courseInfo,
                      index > 0 ? styles.disableButton : styles.courseInfo,
                    ]}
                    onPress={() => handleCouserLectureVideo(item, index)}
                    disabled={index > 0}
                  >
                    <Image
                      source={require("../../../../assets/Images/Course/course_video.jpg")}
                      style={styles.courseImage}
                    />
                    <View style={styles.courseDetails}>
                      <Text style={styles.courseName}>{item.title}</Text>
                      <Text style={styles.lessonText}>{item.lesson}</Text>
                      <View style={styles.courseDuration}>
                        <Ionicons
                          name="time-outline"
                          size={18}
                          color={"green"}
                        />
                        <Text style={styles.courseDurationText}>
                          {item.videoDuration}
                        </Text>
                      </View>
                    </View>
                    {index > 0 ? (
                      <View style={styles.lockIcon}>
                        <Feather name="lock" size={22} color={"#D9D8E2"} />
                      </View>
                    ) : (
                      <AntDesign
                        name="play"
                        color={"black"}
                        size={28}
                        style={styles.playIcon}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={styles.relatedCoursesContainer}>
            <Text style={styles.relatedText}>Related Courses</Text>

            <View style={styles.relatedCourseWrapper}>
              {shuffleArray(relatedCoursesData)
                .slice(0, 3)
                .map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.relatedCourseItem}
                    onPress={() => handleCourseDetails(item)}
                  >
                    <TouchableOpacity onPress={() => handleCourseDetails(item)}>
                      <Image
                        source={item.img}
                        style={styles.relatedCoursesWrapperImage}
                      />
                    </TouchableOpacity>
                    <View style={styles.relatedCourseRightWrapper}>
                      <TouchableOpacity
                        onPress={() => handleCourseDetails(item)}
                      >
                        <Text style={styles.relatedCourseText}>
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                      <View style={styles.durationAndRatingWrapper}>
                        <View style={styles.itemLesson}>
                          <AntDesign name="book" size={18} color={"black"} />
                          <Text style={styles.durationText}>
                            {item.duration}
                          </Text>
                        </View>
                        <View style={styles.itemLesson}>
                          <AntDesign name="star" size={22} color={"orange"} />
                          <Text style={styles.ratingText}>
                            {item.ratingAve}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.labelContainer}>
                        <MaterialCommunityIcons
                          name="label-multiple-outline"
                          size={22}
                          color={"gray"}
                        />
                        <Text style={styles.labelText}>{item.level}</Text>
                      </View>
                      <View style={styles.tutorContainer}>
                        <Image
                          source={item.tutorImg}
                          style={styles.tutorImage}
                        />
                        <Text style={styles.tutorText}>{item.authorName}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default CourseLectures;
