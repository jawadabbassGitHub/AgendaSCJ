import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1 },

  mentorContainer: { marginHorizontal: 16, flex: 1 },

  itemContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    width: 180,
    marginHorizontal: 5,
  },

  mentorImage: { width: 100, height: 100, alignSelf: "center" },

  mentorName: { textAlign: "center", fontSize: 18 },

  mentorPosition: {
    textAlign: "center",
    color: "gray",
    marginTop: 5,
    marginBottom: 10,
  },

  mentorWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 0.2,
    borderTopColor: "gray",
    paddingVertical: 10,
  },

  ratingContainer: { flexDirection: "row", alignItems: "center" },

  text: {
    marginLeft: 2,
    color: "gray",
    fontSize: 16,
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
