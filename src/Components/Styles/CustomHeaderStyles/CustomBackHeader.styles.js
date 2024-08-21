import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    paddingBottom: 16,
  },

  backIconWrapper: {
    borderWidth: 1,
    borderColor: "#E1E2E5",
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  text: { fontSize: 20 },

  cartRed: {
    width: 10,
    height: 10,
    backgroundColor: "#FF6464",
    position: "absolute",
    borderRadius: 50,
    right: 0,
    top: 0,
    zIndex: 5,
  },
});
