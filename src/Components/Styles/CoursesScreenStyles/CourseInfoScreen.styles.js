import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontWeight: "800",
    fontSize: 24,
    marginBottom: 10,
  },
  description: {
    textAlign: "justify",
    fontSize: 17,
    lineHeight: 25,
  },
  infoContainer: {
    backgroundColor: "#F5F8FF",
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
  },
  infoTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 18,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
  courseImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});
