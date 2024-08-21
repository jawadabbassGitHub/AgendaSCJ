import { StyleSheet } from "react-native";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
  },

  topCategoryWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },

  topCategoryText: {
    fontSize: 20,
    color: "#000000",
  },

  seeAllButtonText: {
    color: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
    fontSize: 15,
    paddingRight: 16,
  },

  touchableContainer: {
    width: 140,
    height: 146,
    backgroundColor: Colors.NEUTRAL.NEUTRAL_WHITE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 16,
  },

  touchableImage: {
    width: 36,
    height: 36,
  },

  touchableCategory: {
    fontSize: 17,
    marginTop: 10,
    color: Colors.NEUTRAL.NEUTRAL_DARK_VOID,
    textAlign: "center",
  },

  touchableCourses: {
    color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
    fontSize: 13,
    marginTop: 5,
  },

  touchableImageWrapper: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
