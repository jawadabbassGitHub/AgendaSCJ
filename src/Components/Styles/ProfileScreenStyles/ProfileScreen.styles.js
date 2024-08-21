import { StyleSheet } from "react-native";
import Colors from "../../Utils/Color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainBannerContainer: {
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 20,
  },

  bannerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  userImage: { width: 60, height: 60 },

  userNameSection: { marginLeft: 20 },

  userNameText: { color: "white", fontSize: 20 },

  userNameBottomText: { color: "#abccec", fontSize: 15 },

  userImageBorder: { borderWidth: 3, borderColor: "white", borderRadius: 50 },

  achiveContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    columnGap: 8,
    marginTop: 20,
  },

  achiveWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1153B4",
    borderRadius: 15,
    padding: 15,
    height: 80,
    flex: 1,
  },

  achiveText: {
    color: "white",
    marginTop: 5,
    textAlign: "center",
  },

  refferContainer: {
    backgroundColor: "white",
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
  },

  referralText: { fontSize: 16, marginBottom: 10 },

  invititionText: { color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN },

  accountDetailsContainer: { marginHorizontal: 16, marginTop: 30 },

  accountText: { fontSize: 20, marginBottom: 16 },

  detailWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  detailUserIcon: {
    borderWidth: 2,
    borderColor: "#dde2ec",
    padding: 15,
    borderRadius: 100,
    width: 55,
    height: 55,
  },

  detailLeftSection: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 30,
  },

  boldText: { fontSize: 16 },

  regularText: { color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN },

  iconCenter: { alignSelf: "center" },
});
