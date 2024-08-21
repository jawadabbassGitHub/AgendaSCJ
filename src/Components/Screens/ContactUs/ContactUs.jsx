import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import SupportContact from "./SupportContact";
import ContactForm from "./ContactForm";
import { styles } from "../../Styles/ContactScreenStyles/ContactMain.styles";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import { LinearGradient } from "expo-linear-gradient";
import CustomDrawerHeader from "../../Custom/CustomDrawerHeader";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);

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
          style={styles.container}
        >
          <CustomDrawerHeader>Contact</CustomDrawerHeader>
          <ScrollView>
            <SupportContact />

            <ContactForm />
          </ScrollView>
        </LinearGradient>
      )}
    </>
  );
};

export default ContactUs;
