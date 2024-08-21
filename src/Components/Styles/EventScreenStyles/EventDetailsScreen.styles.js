import { StyleSheet } from "react-native";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  container: { flex: 1 },

  eventImage: { width: "100%", height: 238, borderRadius: 8 },

  eventImageWrapper: { marginHorizontal: 16 },

  eventTitle: {
    fontSize: 22,
    marginHorizontal: 16,
    marginTop: 15,
  },

  mentorImageWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  eventContainer: {
    marginHorizontal: 16,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  mentorImage1: { width: 38, height: 38 },

  mentorImage2: { width: 38, height: 38 },

  mentorImage3: { width: 38, height: 38 },

  mentorImageWrap1: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    right: 15,
  },

  mentorImageWrap2: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    right: 30,
  },

  audienceText: { fontSize: 17, color: "#808080", marginLeft: -12 },

  mentorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  priceText: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
    paddingVertical: 8,
    borderRadius: 100,
    paddingHorizontal: 20,
  },

  priceTexts: { fontSize: 15, color: "white", marginLeft: 3 },

  eventSheduleContainer: {
    backgroundColor: Colors.NEUTRAL.NEUTRAL_WHITE,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 8,
  },

  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E1E2E5",
    borderStyle: "dashed",
    paddingBottom: 10,
  },

  dateWrapper: { flexDirection: "row", alignItems: "center" },

  dateText: { fontSize: 17, color: "#8A8A8A", marginLeft: 8 },

  dateWrapper2: { flexDirection: "row", alignItems: "center" },

  dateText2: { fontSize: 17, color: "#808080" },

  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E1E2E5",
    borderStyle: "dashed",
    paddingBottom: 10,
    marginTop: 20,
  },

  timeWrapper: { flexDirection: "row", alignItems: "center" },

  timeText: { fontSize: 17, color: "#8A8A8A", marginLeft: 5 },

  totalWrapper2: { flexDirection: "row", alignItems: "center" },

  timeText2: { fontSize: 17, color: "#808080" },

  categoryText: { fontSize: 17, color: "#8A8A8A", marginLeft: 8 },

  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },

  totalWrapper: { flexDirection: "row", alignItems: "center" },

  totalText: { fontSize: 17, color: "#8A8A8A", marginLeft: 3 },

  totalText2: { fontSize: 17, color: "#808080" },

  aboutContainer: { marginHorizontal: 16, marginVertical: 30 },

  aboutText: { fontSize: 18 },

  introductionText: {
    textAlign: "justify",
    color: "#525258",
    fontSize: 16,
    lineHeight: 23,
    marginTop: 15,
  },

  showMoreButton: {
    marginTop: 3,
  },

  showMoreButtonText: {
    color: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
    fontSize: 14,
  },

  joinEventContainer: {
    backgroundColor: Colors.NEUTRAL.NEUTRAL_WHITE,
    paddingVertical: 12,
    marginHorizontal: 16,
  },

  joinEventButton: {
    backgroundColor: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
    borderRadius: 4,
  },

  joinEventButtonText: {
    color: "#FFFF",
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 13,
  },
});
