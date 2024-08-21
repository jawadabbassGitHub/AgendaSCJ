import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    marginTop: 50,
  },
  videoContainer: {
    width: "92%",
    aspectRatio: 16 / 9,
  },
  videoWrapper: {
    flex: 1,
    borderRadius: 5,
    overflow: "hidden",
  },
  introText: {
    textAlign: "center",
    fontSize: 22,
    marginBottom: 15,
  },
});
