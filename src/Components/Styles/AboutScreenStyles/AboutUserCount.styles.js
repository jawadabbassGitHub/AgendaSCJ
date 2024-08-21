import { StyleSheet } from "react-native";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    paddingVertical: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  count: {
    fontSize: 20,
  },
  enroll: {
    color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
    fontSize: 16,
  },

  headerText: { textAlign: "center", fontSize: 22, marginBottom: 16 },
});
