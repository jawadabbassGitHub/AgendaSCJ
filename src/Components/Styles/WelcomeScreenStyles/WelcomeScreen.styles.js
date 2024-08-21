import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Colors from "../../Utils/Color";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  firstContainer: { alignItems: "center", marginTop: 50 },

  logo: {
    width: wp("23%"),
    height: hp("10%"),
  },

  titleText: {
    fontSize: hp("4%"),
    textAlign: "center",
  },

  titleTextShape1: {
    position: "absolute",
    left: -28,
    top: -20,
  },

  titleWrapper: { flexDirection: "row" },

  titleTextShape2: {
    position: "absolute",
    right: -40,
    top: -20,
  },

  dscpText: { textAlign: "center", color: "#575757", fontSize: hp("2%") },

  dscpWrapper: { marginTop: 30 },

  buttonWrapper: {
    backgroundColor: "#2467EC",
    width: wp("92%"),
    paddingVertical: 18,
    borderRadius: 4,
    marginTop: 40,
  },

  buttonText: { color: "white", textAlign: "center" },

  backgroundImage: { width: wp("70%"), height: hp("40%") },

  backgroundImageWrapper: {
    alignSelf: "center",
    marginTop: 10,
  },

  titleShape3: { position: "absolute", left: 60 },

  bachgroundShape1: { position: "absolute", top: 35, left: -20 },

  bachgroundShape2: { position: "absolute", right: 0, top: 35, right: -20 },

  bachgroundShape3: { position: "absolute", left: -32, top: 20 },

  bachgroundShape4: { position: "absolute", left: 32, top: 30 },

  bachgroundShape5: { position: "absolute", left: 100 },
});

export default styles;
