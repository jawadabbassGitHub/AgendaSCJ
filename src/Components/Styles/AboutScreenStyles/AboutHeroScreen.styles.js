import { StyleSheet } from "react-native";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  container: { marginHorizontal: 16 },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
    borderRadius: 5,
  },
  textContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
    marginTop: 2,
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 22,
    color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
  },
  checkItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkText: {
    marginLeft: 10,
    fontSize: 15,
    color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
  },
});
