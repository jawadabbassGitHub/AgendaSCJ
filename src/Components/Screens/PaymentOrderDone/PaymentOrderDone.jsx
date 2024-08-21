import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../Styles/PaymentSeceenStyles/PaymentOrderDone.styles";
import {
  useFonts,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

const PaymentOrderDone = () => {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
      <Image
        source={require("../../../../assets/Images/account_confirmation.png")}
        style={styles.image}
      />
      <View style={styles.messageContainer}>
        <Text style={[styles.successText, { fontFamily: "Raleway_700Bold" }]}>
          Payment Successful!
        </Text>
        <Text
          style={[styles.thankYouText, { fontFamily: "Nunito_400Regular" }]}
        >
          Thank you for your purchase!
        </Text>
      </View>
      <View style={styles.orderInfoContainer}>
        <Text style={[styles.infoText, { fontFamily: "Nunito_500Medium" }]}>
          Your order will be delivered on time
        </Text>
        <Text style={[styles.orderIdText, { fontFamily: "Nunito_700Bold" }]}>
          ID #123456
        </Text>
      </View>
    </LinearGradient>
  );
};

export default PaymentOrderDone;
