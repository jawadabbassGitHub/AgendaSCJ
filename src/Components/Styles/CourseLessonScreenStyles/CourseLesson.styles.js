import { StyleSheet } from "react-native";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 10,
  },

  title: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#E1E2E5",
    borderRadius: 8,
  },

  dropdown: {
    borderWidth: 1,
    borderColor: "#E1E2E5",
    borderRadius: 8,
  },

  text: { fontSize: 18 },

  introductionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#E1E2E5",
    marginHorizontal: 10,
    paddingVertical: 12,
  },

  itemContainerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemTitleWrapper: { flexDirection: "row", alignItems: "center" },

  itemTitleText: { marginLeft: 8, color: "#525258", fontSize: 16 },

  itemDataContainer: { flexDirection: "row", alignItems: "center" },

  timeText: { marginRight: 6, color: "#818181" },

  prviewButtonContainer: { flexDirection: "row", alignItems: "center" },

  button_1: {
    backgroundColor: "#E8E9EB",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 50,
    marginRight: 6,
  },

  previewText_1: { color: "#616264" },

  button_2: {
    backgroundColor: "#E1E9F8",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 50,
  },

  previewText_2: { color: Colors.PRIMARY.PRIMARY_RETRO_BLUE },
});
