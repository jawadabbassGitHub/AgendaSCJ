import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import styles from "../../Styles/SigninScreenStyles/SigninScreen.styles";
import axios from "axios";
import { Toast } from "react-native-toast-notifications";
import { AuthContext } from "../../../Context/AuthProvider";
import {
  Entypo,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Raleway_700Bold,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { BASE_URL } from "../../Utils/BASE_URL";

const Login = ({ navigation }) => {
  const { login, isLoading } = useContext(AuthContext);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    emailOrUserName: "jawad@gmail.com",
    password: "jawad@123",
  });
  const [error, setError] = useState({
    password: "",
  });
  const [required, setRequired] = useState("");

  const handleSignIn = async () => {
    if (userInfo.emailOrUserName && userInfo.password) {
      setButtonSpinner(true);
      setRequired("");
      const userData = {
        emailOrUserName: userInfo.emailOrUserName,
        password: userInfo.password,
      };
      try {
        console.log(`Contacting ${BASE_URL}/auth/login`, userData)
        const response = await axios.post(`${BASE_URL}/auth/login`, userData);
        const data = response.data;
        console.log(`Got From ${BASE_URL}/auth/login`, data)
        
        if (data?.message === "Login Successful") {
          Toast.show(data.message, {
            type: "success",
            placement: "bottom",
            duration: 2000,
            animationType: "zoom-in",
            successColor: "green",
          });

          login(data.token);
          setButtonSpinner(false);
        } else if (data?.message === "Password Not Match") {
          Toast.show(data.message, {
            type: "danger",
            placement: "bottom",
            duration: 2000,
            animationType: "zoom-in",
            successColor: "red",
          });
        } else {
          Toast.show(data.message, {
            type: "warning",
            placement: "bottom",
            duration: 2000,
            animationType: "zoom-in",
            successColor: "red",
          });
        }
        setRequired("");
        setButtonSpinner(false);
      } catch (e) {
        console.log(e);
      }
    } else {
      setRequired("Fill Up The All Required Field");
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

  let [fontsLoaded, fontError] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (isLoading) {
    return <AnimatedLoading />;
  }

  if (isLoading) {
    return <AnimatedLoading />;
  }

  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
      <ScrollView>
        <Image
          style={styles.signInImage}
          source={require("../../../../assets/Images/Sign_in/sign_in.png")}
        />
        <Text style={[styles.welcomeText, { fontFamily: "Raleway_700Bold" }]}>
          Welcome Back!
        </Text>
        <Text
          style={[styles.learningText, { fontFamily: "Nunito_400Regular" }]}
        >
          Login to your existing account of online-learning
        </Text>
        <View style={styles.inputContainer}>
          <View>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              value={userInfo.emailOrUserName}
              onChangeText={(value) =>
                setUserInfo({ ...userInfo, emailOrUserName: value })
              }
            />
            <Fontisto
              style={styles.icon1}
              name="email"
              size={20}
              color={"#A1A1A1"}
            />
          </View>

          {required && (
            <View style={styles.errorContainer}>
              <Entypo name="cross" size={18} color={"red"} />
              <Text style={styles.errorText}>{required}</Text>
            </View>
          )}

          <View>
            <TextInput
              style={styles.input}
              keyboardType="default"
              secureTextEntry={!isPasswordVisible}
              defaultValue="jawad@123"
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
          </View>

          {error.password && (
            <View style={styles.errorContainer2}>
              <Entypo name="cross" size={18} color={"red"} />
              <Text style={styles.errorText2}>{error.password}</Text>
            </View>
          )}

          <TouchableOpacity
            onPress={() => navigation.navigate("Forgot Password")}
          >
            <Text
              style={[
                styles.forgotSection,
                { fontFamily: "Nunito_600SemiBold" },
              ]}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSignIn}
          >
            {buttonSpinner ? (
              <ActivityIndicator size={"small"} color={"white"} />
            ) : (
              <Text
                style={[styles.buttonText, { fontFamily: "Raleway_700Bold" }]}
              >
                Sign In
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
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={[
                  styles.signupTextStyle,
                  { fontFamily: "Raleway_600SemiBold" },
                  styles.signupText,
                ]}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Login;
