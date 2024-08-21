import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  specialization: {
    fontSize: 18,
    textAlign: "center",
    color: "gray",
    marginBottom: 16,
  },
  contactInfo: {
    marginBottom: 16,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  contactText: {
    marginLeft: 8,
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  skillItem: {
    backgroundColor: "#e0e0e0",
    borderRadius: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    fontSize: 16,
  },
  experience: {
    fontSize: 16,
  },
  instructorContainer: { marginBottom: 27, marginTop: 40 },
  instructorCoursesText: {
    fontWeight: "bold",
    fontSize: responsiveFontSize(2.5),
  },
  courseContainer: {
    gap: 10,
    marginTop: 20,
  },
  courseImage: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    borderRadius: 5,
  },
  courseWrapper: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
  },

  courseRightSection: { paddingHorizontal: 10, width: responsiveWidth(60) },

  courseTitle: { fontSize: responsiveFontSize(2), fontWeight: "bold" },

  courseRightWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  courseLevelText: { color: "gray" },

  sectionWrapper: {
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 5,
  },
  priceSection: { flexDirection: "row", alignItems: "center" },
  priceText: { fontSize: responsiveFontSize(2.2), fontWeight: "bold" },
  priceText2: { fontSize: responsiveFontSize(2.2), fontWeight: "bold" },
  subjectSection: { paddingVertical: 5 },
  subjectText: { color: "gray" },
});
