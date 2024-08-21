import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { EvilIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { styles } from "../../Styles/PaymentSeceenStyles/AddNewCardScreen.styles";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import CustomBackHeader from "../../Custom/CustomBackHeader";

const AddNewCard = () => {
  const [addCard, setAddCard] = useState({
    accountHolderName: "",
    cardNumber: "",
    MMYYNumber: "",
    CCVNumber: "",
  });
  const [error, setError] = useState("");

  const handleCardSave = () => {
    const accountHolderName = addCard.accountHolderName;
    const cardNumber = addCard.cardNumber;
    const MMYYNumber = addCard.MMYYNumber;
    const CCVNumber = addCard.CCVNumber;

    if (accountHolderName && cardNumber && MMYYNumber && CCVNumber) {
      setError("");
    } else {
      setError("Please fill up all required field");
    }
  };

  let [fontsLoaded, fontError] = useFonts({
    Nunito_400Regular,
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
      <CustomBackHeader>Add New Card</CustomBackHeader>
      <View style={styles.containerWrapper}>
        {error && (
          <View style={styles.errorContainer}>
            <FontAwesome name="close" size={17} color={"red"} />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        <View style={styles.AccountHolder}>
          <EvilIcons
            name="pencil"
            size={28}
            color={"gray"}
            style={styles.penIcon}
          />
          <TextInput
            placeholder="Account Holder Name"
            keyboardType="default"
            placeholderTextColor={"#929397"}
            onChangeText={(value) =>
              setAddCard({ ...addCard, accountHolderName: value })
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
              setAddCard({ ...addCard, cardNumber: value })
            }
            style={[styles.allInput, { fontFamily: "Nunito_400Regular" }]}
          />
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.MMInput}>
            <EvilIcons
              name="pencil"
              size={28}
              color={"gray"}
              style={styles.penIcon2}
            />
            <TextInput
              placeholder="MM/YY"
              keyboardType="default"
              placeholderTextColor={"#929397"}
              onChangeText={(value) =>
                setAddCard({ ...addCard, MMYYNumber: value })
              }
              style={[styles.allInput, { fontFamily: "Nunito_400Regular" }]}
            />
          </View>
          <View style={styles.CCVInput}>
            <TextInput
              placeholder="CCV"
              keyboardType="default"
              placeholderTextColor={"#929397"}
              onChangeText={(value) =>
                setAddCard({ ...addCard, CCVNumber: value })
              }
              style={[styles.allInput, { fontFamily: "Nunito_400Regular" }]}
            />
          </View>
        </View>
        <TouchableOpacity onPress={handleCardSave} style={styles.saveButton}>
          <Text style={[styles.buttonText, { fontFamily: "Nunito_700Bold" }]}>
            Save Now
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default AddNewCard;
