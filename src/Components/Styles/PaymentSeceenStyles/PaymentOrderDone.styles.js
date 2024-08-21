import { StyleSheet } from "react-native";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  messageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  successText: {
    fontSize: 22,
  },
  thankYouText: {
    fontSize: 15,
    marginTop: 5,
    color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
  },
  orderInfoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
  },
  orderIdText: {
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    paddingVertical: 15,
  },
  buttonText: {
    color: Colors.NEUTRAL.NEUTRAL_WHITE,
    fontSize: 16,
  },
});
