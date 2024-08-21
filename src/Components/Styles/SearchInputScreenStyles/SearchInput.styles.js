import { StyleSheet } from "react-native";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  filteringContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },

  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },

  searchIconContainer: {
    width: 36,
    height: 36,
    backgroundColor: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "black",
    paddingVertical: 10,
    width: 271,
    height: 48,
  },

  filterButton: {
    padding: 10,
    backgroundColor: Colors.NEUTRAL.NEUTRAL_WHITE,
    borderRadius: 4,
  },
});
