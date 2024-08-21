import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    textAlign: "center",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginHorizontal: 16,
  },
  categoryItem: {
    width: "48%",
    marginTop: 14,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 25,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 16,
    textAlign: "center",
  },
});
