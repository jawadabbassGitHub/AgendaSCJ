import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  textContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  button: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    marginTop: 20,
    width: "70%",
    paddingVertical: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
