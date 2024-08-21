import { StyleSheet } from "react-native";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  mainContainer: { flex: 1 },

  courseImageContainer: { marginHorizontal: 16 },

  courseImage: { width: "100%", height: 230, borderRadius: 6 },

  bestSellerContainer: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: Colors.SECONDARY.SECONDARY_LEMON_WHISPER,
    borderRadius: 54,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 8,
    marginLeft: 8,
    top: 0,
  },

  bestSellerText: { color: "black", fontSize: 14 },

  ratingContainer: { position: "absolute", zIndex: 14, right: 0 },

  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.NEUTRAL.NEUTRAL_DARK_VOID,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 3,
    marginTop: 8,
    marginRight: 8,
  },

  ratingText: {
    color: "white",
    marginLeft: 4,
  },

  titleText: {
    marginHorizontal: 16,
    marginTop: 15,
    fontSize: 22,
  },

  instructorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    marginHorizontal: 16,
  },

  instructorNameWrap: { flexDirection: "row", alignItems: "center" },

  instructorNameText: {
    marginLeft: 3,
    color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
  },

  lessonContainer: { flexDirection: "row", alignItems: "center" },

  lessonText: { marginLeft: 3, color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN },

  certificateContainer: { flexDirection: "row", alignItems: "center" },

  certificateText: {
    marginLeft: 3,
    color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
  },

  certificateImage: { width: 13, height: 17 },

  studentImageAndPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  mentorImage: { width: 35, height: 35 },

  imageWrap: { borderWidth: 2, borderColor: "white", borderRadius: 50 },

  studentCountContainer: {
    backgroundColor: "black",
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  studentCountText: { color: "white" },

  positionImage1: { right: 13 },
  positionImage2: { right: 29 },
  positionImage3: { right: 45 },

  studentCountAndPriceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    marginHorizontal: 16,
  },

  priceContainer: { flexDirection: "row", alignItems: "center" },

  priceText: {
    color: "#808080",
    fontSize: 22,
    marginLeft: 1,
  },

  buttonGroupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    marginHorizontal: 16,
    backgroundColor: "#E1E9F8",
    borderRadius: 50,
  },

  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 42,
  },

  activeButton: { backgroundColor: Colors.PRIMARY.PRIMARY_RETRO_BLUE },

  activeText: { color: "white" },

  activeButtonWrap: {
    borderRadius: 50,
  },

  buttonPressedContainer: { marginHorizontal: 16, marginVertical: 25 },

  aboutCourseText: { fontSize: 18 },

  aboutDescriptionText: {
    color: "#525258",
    fontSize: 16,
    marginTop: 20,
    textAlign: "justify",
    lineHeight: 25,
  },

  showMoreButton: {
    marginTop: 3,
  },

  showMoreButtonText: {
    color: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
    fontSize: 14,
  },

  reviewTopContainer: { flexDirection: "row" },

  reviewImage: { width: 50, height: 50 },

  reviewTopWrap: { rowGap: 25 },

  reviewRightSection: { marginHorizontal: 8, flex: 1 },

  reviewRightNameSection: { flex: 1, justifyContent: "space-around" },

  reviewNameText: { fontSize: 18 },

  reviewDateText: {
    color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
    marginRight: 10,
  },

  reviewBorder: {
    borderRightWidth: 2,
    borderRightColor: "#E1E2E5",
    height: 12,
    marginRight: 8,
  },

  reviewDateWrapper: { flexDirection: "row", alignItems: "center" },

  reviewDateBorder: { flexDirection: "row", alignItems: "center" },

  reviewStarWrapper: { flexDirection: "row", alignItems: "center" },

  commentText: {
    marginTop: 8,
    color: "#525258",
    fontSize: 16,
    lineHeight: 24,
  },

  enrollContainer: {
    backgroundColor: "#FFFF",
    marginHorizontal: 16,
    paddingVertical: 11,
  },

  enrollButtonWrap: {
    backgroundColor: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
    paddingVertical: 16,
    borderRadius: 4,
  },

  enrollText: { textAlign: "center", color: "#FFFF", fontSize: 16 },

  addToCartContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2267EC",
    marginHorizontal: 16,
    borderRadius: 4,
    paddingVertical: 16,
  },

  AddToCartText: { color: "#FFFF", fontSize: 16 },
});
