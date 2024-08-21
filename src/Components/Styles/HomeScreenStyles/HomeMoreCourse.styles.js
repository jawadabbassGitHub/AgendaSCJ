import { StyleSheet } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Colors from "../../Utils/Color";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  continer: { flex: 1, marginHorizontal: 16 },

  populerMentorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 16,
  },

  populerCourseText: {
    fontSize: 20,
    color: "#000000",
  },

  seeAllText: { color: Colors.PRIMARY.PRIMARY_RETRO_BLUE, fontSize: 15 },

  eventItemContainer: {
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  eventItemImage: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
    borderRadius: 4,
  },

  eventRightSection: { flex: 1, paddingLeft: 8 },

  eventText: { fontSize: hp("2.5%") },

  eventRightTextSection: { marginTop: 10 },

  mentorImageContainer: { flexDirection: "row" },

  eventTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -15,
  },

  eventTextAudience: { fontSize: wp("3.8%"), color: "#808080", marginTop: -4 },

  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },

  ratingText: {
    marginLeft: 4,
    color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
  },

  eventTextAudiences: { fontSize: wp("3.8%"), color: "#808080" },

  locationContainer: { flexDirection: "row", alignItems: "center" },

  data: {
    marginLeft: 5,
    color: "#808080",
  },

  paginationDot: {
    backgroundColor: Colors.NEUTRAL.NEUTRAL_CENTRE_STAGE,
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },

  activePaginationDot: {
    backgroundColor: "#2267EC",
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },

  mapImage: { width: 18.5, height: 18.5 },
});
