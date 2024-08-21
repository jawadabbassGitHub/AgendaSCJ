import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../Styles/AccountConfirmationScreenStyles/AccountConfirmation.styles";
import { LinearGradient } from "expo-linear-gradient";

const AccountConfirmation = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
      <Image
        source={require("../../../../assets/Images/account_confirmation.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Account Created</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Your account has been created</Text>
        <Text style={styles.text}>successfully</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Explore Educal</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default AccountConfirmation;
