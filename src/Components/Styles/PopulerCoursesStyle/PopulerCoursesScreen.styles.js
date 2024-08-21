import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  container: { flex: 1 },

  eventMainWrapper: { marginHorizontal: 16, marginTop: 16 },

  eventItemContainer: {
    backgroundColor: "#FFF",
    marginBottom: 12,
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    marginHorizontal: 16,
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
});
