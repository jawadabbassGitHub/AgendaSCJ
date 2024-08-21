import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { EvilIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../../Styles/PaymentSeceenStyles/PaymentInfoScreen.styles";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Raleway_600SemiBold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import CustomBackHeader from "../../Custom/CustomBackHeader";
import { Toast } from "react-native-toast-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PaymentInfo = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { purchaseItem } = route.params;

  const [paymentInfo, setPaymentInfo] = useState({
    accountHolderName: "",
    cardNumber: "",
    MMYYNumber: "",
    CCVNumber: "",
    zipCodeNumber: "",
  });
  const [error, setError] = useState("");

  const handleConfirmPayment = async () => {
    const accountHolderNumber = paymentInfo.accountHolderName;
    const cardNumber = paymentInfo.cardNumber;
    const MMYYNumber = paymentInfo.MMYYNumber;
    const CCVNumber = paymentInfo.CCVNumber;
    const zipCodeNumber = paymentInfo.zipCodeNumber;

    if (
      accountHolderNumber &&
      cardNumber &&
      MMYYNumber &&
      CCVNumber &&
      zipCodeNumber
    ) {
      try {
        const existingPurchaseCourse = await AsyncStorage.getItem(
          "purchaseCourses"
        );
        const purchase = existingPurchaseCourse
          ? JSON.parse(existingPurchaseCourse)
          : [];

        const isCourseAlreadyInStore = purchase.some(
          (item) => item.id === purchaseItem.id
        );

        if (isCourseAlreadyInStore) {
          Toast.show("This course already purchased", {
            type: "warning",
            placement: "bottom",
            duration: 2000,
            animationType: "zoom-in",
            warningColor: "#FFC107",
          });
        } else {
          purchase.push(purchaseItem);
          await AsyncStorage.setItem(
            "purchaseCourses",
            JSON.stringify(purchase)
          );

          Toast.show("Course purchased complete", {
            type: "success",
            placement: "bottom",
            duration: 2000,
            animationType: "zoom-in",
            successColor: "#1988FF",
          });

          setError("");
          navigation.navigate("Payment Order Done");
        }
      } catch (error) {}
    } else {
      setError("Please fill up all required field");
    }
  };

  let [fontsLoaded, fontError] = useFonts({
    Raleway_600SemiBold,
    Nunito_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={styles.mainContainer}
    >
      <CustomBackHeader>Payment Information</CustomBackHeader>

      <ScrollView>
        <View style={styles.containerWrapper}>
          {error && (
            <View style={styles.errorContainer}>
              <FontAwesome name="close" size={16} color={"red"} />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}
          <View style={styles.AccountHolder}>
            <FontAwesome
              name="user-o"
              size={24}
              color={"gray"}
              style={styles.usericon}
            />
            <TextInput
              placeholder="Account Holder Name"
              keyboardType="default"
              placeholderTextColor={"#929397"}
              onChangeText={(value) =>
                setPaymentInfo({ ...paymentInfo, accountHolderName: value })
              }
              style={[styles.allInput, { fontFamily: "Nunito_400Regular" }]}
            />
          </View>
          <View style={styles.cardNumber}>
            <AntDesign
              name="creditcard"
              size={22}
              color={"gray"}
              style={styles.cardIcon}
            />
            <TextInput
              placeholder="Card Number"
              keyboardType="number-pad"
              placeholderTextColor={"#929397"}
              onChangeText={(value) =>
                setPaymentInfo({ ...paymentInfo, cardNumber: value })
              }
              style={[styles.allInput, { fontFamily: "Nunito_400Regular" }]}
            />
          </View>

          <View style={styles.inputWrapper}>
            <View style={styles.MMNumber}>
              <EvilIcons
                name="pencil"
                size={28}
                color={"gray"}
                style={styles.MMIcon}
              />
              <TextInput
                placeholder="MM/YY"
                keyboardType="number-pad"
                placeholderTextColor={"#929397"}
                onChangeText={(value) =>
                  setPaymentInfo({ ...paymentInfo, MMYYNumber: value })
                }
                style={[styles.allInput, { fontFamily: "Nunito_400Regular" }]}
              />
            </View>
            <View style={styles.CCVNumber}>
              <TextInput
                placeholder="CCV"
                keyboardType="phone-pad"
                placeholderTextColor={"#929397"}
                onChangeText={(value) =>
                  setPaymentInfo({ ...paymentInfo, CCVNumber: value })
                }
                style={[styles.allInput, { fontFamily: "Nunito_400Regular" }]}
              />
            </View>
          </View>
          <View style={styles.zipCodeContainer}>
            <EvilIcons
              name="pencil"
              size={28}
              color={"gray"}
              style={styles.penIcon}
            />
            <TextInput
              placeholder="Zip Code"
              keyboardType="number-pad"
              placeholderTextColor={"#929397"}
              onChangeText={(value) =>
                setPaymentInfo({ ...paymentInfo, zipCodeNumber: value })
              }
              style={[styles.allInput, { fontFamily: "Nunito_400Regular" }]}
            />
          </View>
          <TouchableOpacity
            onPress={handleConfirmPayment}
            style={styles.paymentButton}
          >
            <Text
              style={[
                styles.paymentText,
                { fontFamily: "Raleway_600SemiBold" },
              ]}
            >
              Confirm Payment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Add New Card")}
            style={styles.newCardButton}
          >
            <Text
              style={[
                styles.newCardText,
                { fontFamily: "Raleway_600SemiBold" },
              ]}
            >
              Add a New Card
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default PaymentInfo;
