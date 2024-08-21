import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  videoContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
  },

  section: {
    paddingVertical: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  curriculumTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10,
  },

  curriculumInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },

  infoText: {
    color: "#5C5757",
    fontSize: 15,
    marginRight: 8,
  },

  courseInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 8,
  },

  courseImage: {
    width: 100,
    height: 80,
    marginRight: 10,
    borderRadius: 15,
  },

  courseDetails: {
    flex: 1,
  },

  courseName: {
    fontSize: 16,
  },

  courseDuration: {
    flexDirection: "row",
    alignItems: "center",
  },

  courseDurationText: {
    color: "green",
    marginLeft: 5,
  },

  courseModuleContainer: { marginHorizontal: 10, marginTop: 20 },

  lessonText: { color: "#B9B9B9" },

  playIcon: { marginRight: 10 },
  disableButton: {
    backgroundColor: "#EBEBEB",
  },
  lockIcon: {
    marginRight: 10,
    backgroundColor: "#F5F3F6",
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  relatedCoursesContainer: {
    margin: 10,
  },
  relatedText: {
    fontWeight: "bold",
    fontSize: responsiveFontSize(2.5),
    marginBottom: 20,
    marginTop: 20,
  },
  relatedCourseItem: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
  },
  relatedCourseWrapper: {
    rowGap: 10,
  },
  relatedCoursesWrapperImage: {
    width: responsiveWidth(30),
    height: responsiveHeight(16),
    borderRadius: 5,
  },
  relatedCourseRightWrapper: {
    marginHorizontal: 10,
    width: responsiveWidth(60),
  },
  relatedCourseText: { fontSize: responsiveFontSize(2), fontWeight: "bold" },
  itemLesson: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    marginVertical: 5,
  },
  durationText: { color: "gray" },
  durationAndRatingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingText: {
    color: "orange",
    fontWeight: "bold",
    marginRight: 10,
    fontSize: responsiveFontSize(2),
  },
  tutorContainer: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  tutorImage: { width: responsiveWidth(8), height: responsiveWidth(8) },
  tutorText: { fontSize: responsiveFontSize(1.7), fontWeight: "bold" },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginVertical: 5,
  },
  labelText: { color: "gray" },
});
