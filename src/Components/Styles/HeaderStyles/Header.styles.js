import { StyleSheet } from "react-native";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 16,
  },

  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 45,
    height: 45,
    marginRight: 8,
  },

  text: {
    fontSize: 16,
  },

  bellButton: {
    borderWidth: 1,
    borderColor: "#E1E2E5",
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  bellIcon: {
    alignSelf: "center",
  },

  bellContainer: {
    width: 10,
    height: 10,
    backgroundColor: "#FF6464",
    position: "absolute",
    borderRadius: 50,
    right: 0,
    top: 0,
  },

  helloText: { color: "#7C7C80", fontSize: 14 },

  userActive: {
    width: 14,
    height: 14,
    backgroundColor: Colors.SUCCESS,
    borderRadius: 50,
    position: "absolute",
    right: 5,
    zIndex: 1,
    borderWidth: 1.5,
    borderColor: "#fff",
  },
});
