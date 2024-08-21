import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "../../Styles/SettingsScreenStyles/SettingsScreen.styles";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CustomDrawerHeader from "../../Custom/CustomDrawerHeader";

const Setting = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [profileInfo, setProfileInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");

  const handleProfileInfo = () => {
    const name = profileInfo.name;
    const email = profileInfo.email;
    const phone = profileInfo.phone;
    const address = profileInfo.address;

    if (name && email && phone && address) {
      setError("");
    } else {
      setError("Please fill up all required field");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <AnimatedLoading />
      ) : (
        <LinearGradient
          colors={["#E5ECF9", "#F6F7F9"]}
          style={styles.mainContainer}
        >
          <CustomDrawerHeader>Settings</CustomDrawerHeader>
          <ScrollView>
            <View style={styles.container}>
              <Image
                source={require("../../../../assets/Images/user.png")}
                style={styles.profileImage}
              />
              <Text style={styles.title}>Edit Profile</Text>
              {error && (
                <View style={styles.errorContainer}>
                  <FontAwesome name="close" size={20} color={"red"} />
                  <Text style={styles.errorText}>{error}</Text>
                </View>
              )}
              <TextInput
                style={styles.textInput}
                placeholder="Jawad"
                placeholderTextColor="#888"
                keyboardType="default"
                onChangeText={(value) =>
                  setProfileInfo({ ...profileInfo, name: value })
                }
              />
              <TextInput
                style={styles.textInput}
                placeholder="example@jawad.com"
                placeholderTextColor="#888"
                keyboardType="email-address"
                onChangeText={(value) =>
                  setProfileInfo({ ...profileInfo, email: value })
                }
              />
              <TextInput
                style={styles.textInput}
                placeholder="+453 597 349 998"
                placeholderTextColor="#888"
                keyboardType="phone-pad"
                onChangeText={(value) =>
                  setProfileInfo({ ...profileInfo, phone: value })
                }
              />
              <TextInput
                style={styles.textInput}
                placeholder="Melbon, Australia"
                placeholderTextColor="#888"
                keyboardType="default"
                onChangeText={(value) =>
                  setProfileInfo({ ...profileInfo, address: value })
                }
              />
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleProfileInfo}
              >
                <Text style={styles.saveButtonText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      )}
    </>
  );
};

export default Setting;
