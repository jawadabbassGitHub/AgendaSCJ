import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../Styles/ContactScreenStyles/ContactFormScreen.stylex";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";

const ContactForm = () => {
  const [selectedOption, setSelectedOption] = useState("Course");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    email: "",
    selectedOptions: selectedOption,
    message: "",
  });
  const [error, setError] = useState("");

  const handleContactSubmit = () => {
    const name = contactInfo.name;
    const phone = contactInfo.phone;
    const email = contactInfo.email;
    const selected = contactInfo.selectedOptions;
    const message = contactInfo.message;

    if (name && phone && email && selected && message && selected) {
      console.log(name, phone, email, selected, message);
      setError("");
    } else {
      setError("Please fill up all required field");
    }
  };

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: "Raleway_700Bold" }]}>
        Get in Touch
      </Text>

      {error && (
        <View style={styles.errorContainer}>
          <FontAwesome name="close" size={18} color={"red"} />
          <Text style={[styles.errorText, { fontFamily: "Nunito_400Regula" }]}>
            {error}
          </Text>
        </View>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#888"
          onChangeText={(value) =>
            setContactInfo({ ...contactInfo, name: value })
          }
        />
        <TextInput
          style={styles.inputPhone}
          placeholder="Phone"
          placeholderTextColor="#888"
          onChangeText={(value) =>
            setContactInfo({ ...contactInfo, phone: value })
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          onChangeText={(value) =>
            setContactInfo({ ...contactInfo, email: value })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Courses"
          placeholderTextColor="#888"
          onChangeText={(value) =>
            setContactInfo({ ...contactInfo, email: value })
          }
        />
      </View>
      <TextInput
        style={styles.textArea}
        placeholder="Message"
        placeholderTextColor="#888"
        multiline={true}
        numberOfLines={4}
        fontSize={16}
        onChangeText={(value) =>
          setContactInfo({ ...contactInfo, message: value })
        }
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleContactSubmit}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactForm;
