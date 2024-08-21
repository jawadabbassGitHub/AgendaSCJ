import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Colors from "../../Utils/Color";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  populerCourseContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 30,
  },

  populerCourseWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  populerCourseText: {
    fontSize: 20,
    color: "#000000",
  },

  seeAllText: { color: Colors.PRIMARY.PRIMARY_RETRO_BLUE, fontSize: 15 },

  populerItemContainer: {
    backgroundColor: "#FFFF",
    marginHorizontal: 6,
    borderRadius: 12,
    marginTop: 16,
    width: responsiveWidth(43),
    padding: 8,
  },

  populerItemImage: {
    width: responsiveWidth(39),
    height: responsiveHeight(15),
    borderRadius: 5,
    alignSelf: "center",
  },

  populerItemTitle: {
    fontSize: hp("2.5%"),
    textAlign: "left",
    marginTop: 10,
  },

  durationText: { color: "#808080", fontSize: hp("2.1%") },

  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.NEUTRAL.NEUTRAL_DARK_VOID,
    padding: 4,
    borderRadius: 5,
    gap: 4,
    width: 55,
    height: 28,
    justifyContent: "center",
    position: "absolute",
    bottom: 7,
    left: 7,
    zIndex: 5,
  },

  ratingText: { color: "white", fontSize: 14 },

  paginationDots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.NEUTRAL.NEUTRAL_CENTRE_STAGE,
    margin: 5,
  },
  activeDot: {
    backgroundColor: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
  },
});
