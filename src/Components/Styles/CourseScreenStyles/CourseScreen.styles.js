import { StyleSheet } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Colors from "../../Utils/Color";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: { flex: 1 },

  bannerContainer: {
    marginTop: 12,
    marginHorizontal: 16,
  },

  background: {
    width: "100%",
    height: 210,
    resizeMode: "stretch",
    zIndex: 1,
  },

  backgroundView: {
    position: "absolute",
    zIndex: 5,
    paddingHorizontal: 18,
    paddingVertical: 30,
    flexDirection: "row",
    alignItems: "center",
  },

  backgroundViewContainer: {
    width: responsiveWidth(45),
    height: responsiveWidth(30),
    marginTop: -20,
  },

  backgroundViewText: {
    color: "white",
    fontSize: wp("5%"),
  },

  backgroundViewOffer: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 14,
    marginTop: 5,
  },

  backgroundViewButtonContainer: {
    borderWidth: 1.1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    width: 109,
    height: 32,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  backgroundViewButtonText: {
    color: "#FFFF",
  },

  backgroundViewImage: {
    width: wp("38%"),
    height: hp("22%"),
    top: -15,
  },

  categorySlideWrapper: { marginHorizontal: 16 },

  categorySlideContainer: {
    marginTop: 16,
    marginHorizontal: 6,
    backgroundColor: "#FFFF",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 50,
  },

  categoryText: { color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN, fontSize: 15 },

  courseItemContainer: { marginVertical: 16, marginHorizontal: 16, gap: 12 },

  itemContainer: {
    backgroundColor: Colors.NEUTRAL.NEUTRAL_WHITE,
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
  },

  itemImage: { width: 100, height: 100, borderRadius: 4 },

  itemRightSection: {
    marginHorizontal: 8,
    flex: 1,
    marginVertical: 4,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  itemTitleText: { fontSize: 16 },

  minitueAndPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  timeSectionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  timeText: { color: "#808080", marginLeft: 2, fontSize: wp("4%") },

  priceText: { color: "#808080", fontSize: wp("4%"), marginLeft: 1 },

  ratingContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    backgroundColor: Colors.NEUTRAL.NEUTRAL_DARK_VOID,
    borderRadius: 3,
    marginLeft: 4,
    marginBottom: 4,
  },

  ratingText: { color: "white", marginLeft: 3 },

  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
  },

  mentorImageContainer: { flexDirection: "row" },

  eventTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -15,
  },

  eventTextAudience: { fontSize: wp("3.8%"), color: "#808080", marginTop: -4 },

  maintorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    justifyContent: "space-between",
  },

  mentorWrap1: { borderColor: "#FFFF", borderWidth: 2 },

  mentorWrapImage: { width: 30, height: 30 },

  mentorWrap2: {
    borderColor: "#FFFF",
    borderWidth: 2,
    right: 13,
    borderRadius: 50,
  },

  mentorWrap3: {
    borderColor: "#FFFF",
    borderWidth: 2,
    right: 26,
    borderRadius: 50,
  },
});
