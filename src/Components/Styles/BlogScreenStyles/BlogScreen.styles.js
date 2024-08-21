import { StyleSheet } from "react-native";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blogContainer: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#FFFF",
    marginHorizontal: 16,
    marginBottom: 12,
  },
  blogImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 4,
  },
  blogCategoryContainer: {
    position: "absolute",
    top: 25,
    left: 30,
    backgroundColor: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  blogCategoryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  infoText: {
    marginLeft: 5,
    color: "gray",
  },
  blogTitle: {
    fontSize: 18,
    marginBottom: 15,
  },
  blogText: {
    fontSize: 14,
    lineHeight: 24,
    color: "#525258",
    marginBottom: 20,
    textAlign: "justify",
  },
  readMoreButton: {
    backgroundColor: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 10,
  },
  readMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
