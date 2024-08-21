import { StyleSheet } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },

  populerMentorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },

  populerCourseText: {
    fontSize: 20,
    color: "#000000",
  },

  seeAllText: { color: Colors.PRIMARY.PRIMARY_RETRO_BLUE, fontSize: 15 },

  mentorItemContainer: {
    width: responsiveWidth(27.6),
    height: 150,
    backgroundColor: Colors.NEUTRAL.NEUTRAL_WHITE,
    marginHorizontal: 6,
    borderRadius: 10,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  mentorImage: { width: responsiveWidth(16), height: responsiveWidth(16) },

  mentorName: {
    marginTop: 9,
    fontSize: 16,
    textAlign: "center",
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
    marginTop: 8,
  },

  ratingText: { color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN },

  studentCountText: { color: "#8A8A8A" },

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
