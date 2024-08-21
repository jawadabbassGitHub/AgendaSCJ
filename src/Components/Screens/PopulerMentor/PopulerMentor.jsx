import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../Styles/HomeScreenStyles/PopulerMentor.styles";
import CustomBackHeader from "../../Custom/CustomBackHeader";
import { FlatList } from "react-native";
import { useFonts, Raleway_600SemiBold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { mentorData } from "../../Data/MentorData";

const MentorCard = ({ item, navigation }) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate("Populer Mentor Details", {
        mentorDetails: item,
      })
    }
    style={styles.itemContainer}
  >
    <Image style={styles.mentorImage} source={item.image} />
    <Text style={[styles.mentorName, { fontFamily: "Raleway_600SemiBold" }]}>
      {item.mentorName}
    </Text>
    <Text style={[styles.mentorPosition, { fontFamily: "Nunito_400Regular" }]}>
      {item.position}
    </Text>
  </TouchableOpacity>
);

const PopulerMentor = () => {
  const navigation = useNavigation();

  let [fontsLoaded, fontError] = useFonts({
    Raleway_600SemiBold,
    Nunito_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
      <CustomBackHeader>Mentors</CustomBackHeader>
      <View style={styles.mentorContainer}>
        <FlatList
          data={mentorData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            if (index % 2 === 0) {
              return (
                <View style={styles.rowContainer}>
                  <MentorCard item={item} navigation={navigation} />
                  {mentorData[index + 1] && (
                    <MentorCard
                      navigation={navigation}
                      item={mentorData[index + 1]}
                    />
                  )}
                </View>
              );
            }
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default PopulerMentor;
