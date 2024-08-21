import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  videoContainer: {
    aspectRatio: 16 / 9,
  },
  video: {
    flex: 1,
  },
  videoInfo: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  videoTitle: {
    fontSize: 20,
  },
  videoDescription: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 22,
  },
});
