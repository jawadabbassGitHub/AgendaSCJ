import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
    marginTop: 30,
  },
  courseContainer: {
    flexDirection: "row",
    marginVertical: 8,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "white",
  },
  courseImage: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
  },
  courseInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailText: {
    fontSize: 16,
    color: "#808080",
  },
  removeButton: {
    backgroundColor: "#FF6347",
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
    width: 100,
    alignSelf: "flex-start",
  },
  removeButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  totalPrice: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  continueShoppingButton: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: "80%",
    alignSelf: "center",
  },
  continueShoppingButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  emptyCartContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  emptyCartImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  emptyCartText: {
    fontSize: 24,
    marginTop: 20,
    color: "#333",
  },
  emptyCartSubText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: "#666",
  },
  collectCourseButton: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: "80%",
  },
  collectCourseButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  priceText: {
    marginLeft: 3,
    fontSize: 16,
    color: "#808080",
  },

  shoppingContainer: { marginBottom: 10 },
});
