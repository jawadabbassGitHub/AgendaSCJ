import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
    justifyContent: "center",
  },
  categoryItem: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 8,
    margin: 8,
    padding: 16,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginTop: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
});
