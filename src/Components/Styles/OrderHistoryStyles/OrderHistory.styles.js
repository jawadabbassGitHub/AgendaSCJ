import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1 },

  couserItemContainer: { marginHorizontal: 16 },

  courseItemWrap: {
    marginBottom: 10,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
  },

  courseImage: { width: 130, height: 100, borderRadius: 5 },

  itemWrapper: { flexDirection: "row" },

  itemRightSection: { marginHorizontal: 8, flex: 1 },

  titleText: { fontSize: 18 },

  instructiorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  ratingWrap: { flexDirection: "row", alignItems: "center" },

  tutorImage: { width: 40, height: 40 },

  ratingText: { fontSize: 16, marginLeft: 2 },

  authorWrap: { flexDirection: "row", alignItems: "center" },

  authorName: { marginLeft: 5 },
});
