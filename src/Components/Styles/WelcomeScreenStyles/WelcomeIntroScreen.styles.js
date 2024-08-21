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

export const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, flex: 1 },

  wrapper: {
    marginTop: 50,
  },

  slideImage: { alignSelf: "center", marginBottom: 30 },
  dotStyle: {
    backgroundColor: Colors.NEUTRAL.NEUTRAL_CENTRE_STAGE,
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: 5,
    marginHorizontal: 5,
  },

  activeDotStyle: {
    backgroundColor: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: 5,
    marginHorizontal: 5,
  },

  title: {
    fontSize: hp("3.5%"),
    textAlign: "center",
  },

  description: {
    fontSize: hp("2.5%"),
    color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
    textAlign: "center",
  },

  descriptionContainer: {
    marginTop: 15,
  },

  buttonContainer: {
    backgroundColor: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
    width: responsiveWidth(88),
    height: responsiveHeight(5.5),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.NEUTRAL.NEUTRAL_WHITE,
    fontSize: 16,
  },
});
