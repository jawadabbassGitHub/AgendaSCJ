import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import styles from "../../Styles/RegisterScreenStyles/RegisterScreen.styles";
import axios from "axios";
import { Toast } from "react-native-toast-notifications";
import {
  Entypo,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { BASE_URL } from "../../Utils/BASE_URL";

const SignupScreen = ({ navigation }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isButtonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const [required, setRequired] = useState("");

  const handleRegister = async () => {
    setButtonSpinner(true);
    if (
      userInfo.email &&
      userInfo.password &&
      userInfo.email &&
      userInfo.userName &&
      userInfo.password
    ) {
      setRequired("");

      const userData = {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        userName: userInfo.userName,
        password: userInfo.password,
      };

      try {
        console.log(userData);
        const response = await axios.post(
          `${BASE_URL}/auth/register`,
          userData
        );
        console.log(response.data);
        const data = response.data;
        if (data.message === "Registration Successful") {
          setButtonSpinner(false);
          Toast.show(data.message, {
            type: "success",
            placement: "bottom",
            duration: 2000,
            animationType: "zoom-in",
            successColor: "#1988FF",
          });
          navigation.navigate("Account Confirmation");
        } else {
          Toast.show(data.message, {
            type: "success",
            placement: "bottom",
            duration: 2000,
            animationType: "zoom-in",
            successColor: "#1988FF",
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setRequired("Fill Up The All Required Field");
    }
  };

  const handleEmailValidation = (value) => {
    const email = value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
      setError({ ...error, email: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setError({ ...error, email: "" });
      setUserInfo({ ...userInfo, email: value });
    }
  };

  const handlePasswordValidation = (value) => {
    const password = value;

    const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;

    if (!passwordSpecialCharacter.test(password)) {
      setError({
        ...error,
        password: "Write at least one special character",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordOneNumber.test(password)) {
      setError({
        ...error,
        password: "Write at least one number",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordSixValue.test(password)) {
      setError({
        ...error,
        password: "Write at least 6 characters",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setError({
        ...error,
        password: "",
      });
      setUserInfo({ ...userInfo, password: value });
    }
  };

  const handleUserNameValidatio = (value) => {
    const userName = value;

    const userNameRegex = /^[a-zA-Z0-9]{3,20}$/;

    if (!userNameRegex.test(userName)) {
      setError({ ...error, userName: "Invalid User Name" });
      setUserInfo({ ...userInfo, userName: "" });
    } else {
      setError({ ...error, userName: "" });
      setUserInfo({ ...userInfo, userName: value });
    }
  };

  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
      <ScrollView>
        <Image
          style={styles.signupImage}
          source={require("../../../../assets/Images/Sign_in/signup.png")}
        />
        <Text
          style={[styles.getStartedText, { fontFamily: "Raleway_700Bold" }]}
        >
          Let's get started!
        </Text>

        <View>
          <Text
            style={[
              styles.accountCreateText,
              { fontFamily: "Nunito_400Regular" },
            ]}
          >
            Create an account to online-learning to get all features
          </Text>
          {required && (
            <View style={styles.errorContainer}>
              <Entypo name="cross" size={24} color={"red"} />
              <Text style={styles.errorText}>{required}</Text>
            </View>
          )}
        </View>
        <View style={styles.inputContainer}>
          <View>
            <TextInput
              style={styles.input}
              keyboardType="name-phone-pad"
              placeholder="John Wick"
              onChangeText={(value) =>
                setUserInfo({ ...userInfo, firstName: value })
              }
            />
            <FontAwesome
              style={styles.icon1}
              name="user-o"
              size={20}
              color={"#A1A1A1"}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Username@gmail.com"
              onChangeText={handleEmailValidation}
            />
            <Fontisto
              style={styles.icon1}
              name="email"
              size={20}
              color={"#A1A1A1"}
            />
            {error.email && (
              <View style={styles.errorContainer1}>
                <Entypo name="cross" size={24} color={"red"} />
                <Text style={styles.errorText1}>{error.email}</Text>
              </View>
            )}
          </View>

          <View>
            <TextInput
              style={styles.input}
              keyboardType="name-phone-pad"
              placeholder="Username123"
              onChangeText={handleUserNameValidatio}
            />
            <AntDesign
              style={styles.icon1}
              name="idcard"
              size={20}
              color={"#A1A1A1"}
            />
            {error.userName && (
              <View style={styles.errorContainer1}>
                <Entypo name="cross" size={24} color={"red"} />
                <Text style={styles.errorText1}>{error.userName}</Text>
              </View>
            )}
          </View>

          <View>
            <TextInput
              style={styles.input}
              keyboardType="default"
              secureTextEntry={!isPasswordVisible}
              defaultValue="user&123"
              onChangeText={handlePasswordValidation}
            />
            <TouchableOpacity
              style={styles.visibleIcon}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <Ionicons name="eye-off-outline" size={23} color={"#747474"} />
              ) : (
                <Ionicons name="eye-outline" size={23} color={"#747474"} />
              )}
            </TouchableOpacity>
            <SimpleLineIcons
              style={styles.icon2}
              name="lock"
              size={20}
              color={"#A1A1A1"}
            />
            {error.password && (
              <View style={styles.errorContainer1}>
                <Entypo name="cross" size={24} color={"red"} />
                <Text style={styles.errorText1}>{error.password}</Text>
              </View>
            )}
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleRegister}
          >
            {isButtonSpinner ? (
              <ActivityIndicator size={"small"} color={"white"} />
            ) : (
              <Text
                style={[styles.buttonText, { fontFamily: "Raleway_700Bold" }]}
              >
                Sign up
              </Text>
            )}
          </TouchableOpacity>

          <View style={styles.signupRedirect}>
            <Text
              style={[
                styles.signupTextStyle,
                { fontFamily: "Raleway_600SemiBold" },
              ]}
            >
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={[
                  styles.signupTextStyle,
                  { fontFamily: "Raleway_600SemiBold" },
                  styles.signupText,
                ]}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SignupScreen;
