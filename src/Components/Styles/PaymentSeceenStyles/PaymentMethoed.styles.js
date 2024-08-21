import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: { flex: 1 },

  wrapper: { borderRadius: 15, marginHorizontal: 10, marginVertical: 150 },

  paymentButtonContainer: {
    backgroundColor: "#2B4FFF",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 5,
    marginHorizontal: 10,
  },

  paymentButtonText: { textAlign: "center", fontWeight: "600", color: "white" },

  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#F5F6FA",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  paymentText: {
    fontSize: 16,
  },
});
