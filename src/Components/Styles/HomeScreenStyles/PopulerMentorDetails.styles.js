import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1 },

  mainWrapper: { marginHorizontal: 16 },

  image: { width: "100%", height: 210, alignSelf: "center", borderRadius: 8 },

  nameText: { fontSize: 20, marginTop: 10 },

  postionText: { fontSize: 15, color: "gray", marginTop: 2, marginBottom: 10 },

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

  biographyText: { marginTop: 40, fontSize: 16 },

  dscText: {
    marginTop: 10,
    color: "#606067",
    fontSize: 15,
    lineHeight: 23,
    textAlign: "justify",
  },

  skillContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    alignSelf: "center",
  },

  skillWrapper: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
});
