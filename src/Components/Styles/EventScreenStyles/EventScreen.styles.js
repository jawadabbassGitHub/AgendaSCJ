import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  eventBannerBackground: {
    marginHorizontal: 16,
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  bannerBackground: {
    width: "100%",
    height: 210,
    resizeMode: "stretch",
    zIndex: 1,
  },

  bannerContainer: {
    position: "absolute",
    zIndex: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  bannerImage: { width: 144, height: 174, top: -6 },

  bannerText: {
    color: "#FFF",
    fontSize: 20.8,
  },
  bannerLeft: {
    width: 200,
    height: 150,
    paddingLeft: 10,
    justifyContent: "space-between",
  },

  bannerDate: {
    color: "rgba(255, 255, 255, 0.7)",
    marginTop: 5,
    fontSize: 14,
  },

  bannerButtonContainer: {
    marginTop: 25,
    borderWidth: 1.1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 5,
    alignItems: "center",
    width: 109,
    height: 32,
    justifyContent: "center",
  },
  bannerButtonText: { color: "#FFF", fontWeight: "bold" },

  categorySlideContainer: {
    marginTop: 16,
    marginHorizontal: 6,
    backgroundColor: "#FFFF",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 50,
  },

  categorySlideWrapper: { marginHorizontal: 16 },

  categoryText: { color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN, fontSize: 15 },

  eventMainWrapper: { marginHorizontal: 16, marginTop: 16 },

  eventItemContainer: {
    backgroundColor: "#FFF",
    width: "100%",

    marginBottom: 12,
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
  },

  eventItemImage: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
    borderRadius: 4,
  },

  eventRightSection: { flex: 1, paddingLeft: 8 },

  eventText: { fontSize: responsiveFontSize(2) },

  mentorImage: { width: 30, height: 30, flexDirection: "row" },

  mentorImageContainer: { flexDirection: "row" },

  eventRightTextSection: { marginTop: 10 },

  eventTextAudience: { fontSize: 15, color: "#808080", marginTop: -4 },

  eventTextAudiences: { fontSize: 15, color: "#808080" },

  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },

  eventTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -15,
  },

  ratingText: {
    marginLeft: 4,
    color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
  },

  locationContainer: { flexDirection: "row", alignItems: "center" },

  data: {
    marginLeft: 1,
    color: "#808080",
    fontSize: 16,
  },
  loading: {},
});
