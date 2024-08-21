import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../Styles/PaymentSeceenStyles/PaymentMethoed.styles";
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import CustomBackHeader from "../../Custom/CustomBackHeader";

const PaymentMethod = () => {
  const [checked, setChecked] = useState("visa");
  const navigation = useNavigation();
  const route = useRoute();
  const { courseDetails } = route.params;

  const handlePaymentOptionPress = (value) => {
    setChecked(value);
  };

  let [fontsLoaded, fontError] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={styles.mainContainer}
    >
      <CustomBackHeader>Payment</CustomBackHeader>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => handlePaymentOptionPress("visa")}
        >
          <View style={styles.paymentOption}>
            <Image
              source={require("../../../../assets/Images/payment/visa.png")}
              style={styles.paymentIcon}
            />
            <Text
              style={[styles.paymentText, { fontFamily: "Nunito_600SemiBold" }]}
            >
              Credit Card
            </Text>
          </View>

          <RadioButton
            onPress={() => handlePaymentOptionPress("visa")}
            value="visa"
            status={checked === "visa" ? "checked" : "unchecked"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() => handlePaymentOptionPress("paypal")}
        >
          <View style={styles.paymentOption}>
            <Image
              source={require("../../../../assets/Images/payment/paypal.png")}
              style={styles.paymentIcon}
            />
            <Text
              style={[styles.paymentText, { fontFamily: "Nunito_600SemiBold" }]}
            >
              Crediit Card
            </Text>
          </View>

          <RadioButton
            onPress={() => handlePaymentOptionPress("paypal")}
            value="paypal"
            status={checked === "paypal" ? "checked" : "unchecked"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() => handlePaymentOptionPress("americanExpress")}
        >
          <View style={styles.paymentOption}>
            <Image
              source={require("../../../../assets/Images/payment/american_express.png")}
              style={styles.paymentIcon}
            />
            <Text
              style={[styles.paymentText, { fontFamily: "Nunito_600SemiBold" }]}
            >
              Crediit Card
            </Text>
          </View>

          <RadioButton
            onPress={() => handlePaymentOptionPress("americanExpress")}
            value="paypal"
            status={checked === "americanExpress" ? "checked" : "unchecked"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() => handlePaymentOptionPress("disCover")}
        >
          <View style={styles.paymentOption}>
            <Image
              source={require("../../../../assets/Images/payment/discover.png")}
              style={styles.paymentIcon}
            />
            <Text
              style={[styles.paymentText, { fontFamily: "Nunito_600SemiBold" }]}
            >
              Crediit Card
            </Text>
          </View>

          <RadioButton
            onPress={() => handlePaymentOptionPress("disCover")}
            value="paypal"
            status={checked === "disCover" ? "checked" : "unchecked"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Payment Info", { purchaseItem: courseDetails })
          }
          style={styles.paymentButtonContainer}
        >
          <Text
            style={[styles.paymentButtonText, { fontFamily: "Nunito_700Bold" }]}
          >
            Payment Now
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default PaymentMethod;
