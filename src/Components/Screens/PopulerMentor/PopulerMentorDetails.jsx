import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../Styles/HomeScreenStyles/PopulerMentorDetails.styles";
import CustomBackHeader from "../../Custom/CustomBackHeader";
import {
  useFonts,
  Raleway_600SemiBold,
  Raleway_500Medium,
} from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const PopulerMentorDetails = () => {
  const route = useRoute();
  const { mentorDetails } = route.params;

  let [fontsLoaded, fontError] = useFonts({
    Raleway_600SemiBold,
    Nunito_400Regular,
    Raleway_500Medium,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
      <CustomBackHeader>Mentor Details</CustomBackHeader>
      <ScrollView style={styles.mainWrapper}>
        <Image style={styles.image} source={mentorDetails.courseMentorImage} />
        <Text style={[styles.nameText, { fontFamily: "Raleway_600SemiBold" }]}>
          {mentorDetails.mentorName}
        </Text>
        <Text style={[styles.postionText, { fontFamily: "Nunito_400Regular" }]}>
          {mentorDetails.position}
        </Text>
        <View style={styles.mentorWrapper}>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={16} color={"orange"} />
            <Text style={styles.text}>
              {mentorDetails.rating} ({mentorDetails.student})
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <AntDesign name="book" size={16} color={"gray"} />
            <Text style={styles.text}>{mentorDetails.courses} Courses</Text>
          </View>
        </View>
        <Text
          style={[styles.biographyText, { fontFamily: "Raleway_600SemiBold" }]}
        >
          Biography
        </Text>
        <Text style={[styles.dscText, { fontFamily: "Nunito_400Regular" }]}>
          {mentorDetails.biography}
        </Text>
        <View style={styles.skillContainer}>
          {mentorDetails.skills.slice(0, 3).map((item, index) => (
            <View style={styles.skillWrapper} key={index}>
              <Text style={{ fontFamily: "Nunito_700Bold" }}>{item}</Text>
            </View>
          ))}
        </View>
        <View style={[styles.skillContainer, { marginVertical: 20 }]}>
          {mentorDetails.skills.slice(0, 2).map((item, index) => (
            <View style={styles.skillWrapper} key={index}>
              <Text style={{ fontFamily: "Nunito_700Bold" }}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default PopulerMentorDetails;
