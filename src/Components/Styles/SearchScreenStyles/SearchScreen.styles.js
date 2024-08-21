import { StyleSheet } from "react-native";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  container: {
    flex: 1,
  },
  filteringContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },

  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },

  searchIconContainer: {
    width: 36,
    height: 36,
    backgroundColor: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "black",
    paddingVertical: 10,
    width: 271,
    height: 48,
  },

  filterButton: {
    padding: 10,
    backgroundColor: Colors.NEUTRAL.NEUTRAL_WHITE,
    borderRadius: 4,
  },
  courseItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: Colors.NEUTRAL.NEUTRAL_WHITE,
    marginHorizontal: 16,
    marginBottom: 10,
  },
  courseImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  courseDetails: {
    flex: 1,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 16,
  },
  courseLabel: {
    color: "#808080",
    marginBottom: 5,
  },
  courseMetadata: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  metadataItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  metadataText: { color: "#808080", fontSize: 15, marginLeft: 1 },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    rowGap: 10,
  },
  metaDataText2: {
    color: "#808080",
    fontSize: 13,
    marginTop: 3,
    marginLeft: 1,
  },
  modalContentButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F8F9FC",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  modalClose: { position: "relative", alignSelf: "center", marginVertical: 50 },
});
