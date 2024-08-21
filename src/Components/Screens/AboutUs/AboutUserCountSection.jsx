import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../Styles/AboutScreenStyles/AboutUserCount.styles";
import {
  useFonts,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import { Nunito_500Medium } from "@expo-google-fonts/nunito";

const AboutUserCountSection = () => {
  const AboutUserCountData = [
    {
      id: 1,
      image: require("../../../../assets/Images/About/About_Student.png"),
      count: "68,806",
      enroll: "Students Enrolled",
    },
    {
      id: 2,
      image: require("../../../../assets/Images/About/About_Computer.png"),
      count: "5,740",
      enroll: "Class Completed",
    },
    {
      id: 3,
      image: require("../../../../assets/Images/About/About_Student_Book.png"),
      count: "470+",
      enroll: "Premium Courses",
    },
    {
      id: 4,
      image: require("../../../../assets/Images/About/About_book.png"),
      count: "6,548",
      enroll: "Premium Courses",
    },
  ];

  let [fontsLoaded, fontError] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
    Nunito_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.headerText, { fontFamily: "Raleway_700Bold" }]}>
        Our Achievement
      </Text>
      <View style={styles.row}>
        {AboutUserCountData?.slice(0, 2).map((item) => (
          <View style={styles.card} key={item.id}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.count, { fontFamily: "Raleway_600SemiBold" }]}>
              {item.count}
            </Text>
            <Text style={[styles.enroll, { fontFamily: "Nunito_500Medium" }]}>
              {item.enroll}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.row}>
        {AboutUserCountData?.slice(2, 4).map((item) => (
          <View style={styles.card} key={item.id}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.count, { fontFamily: "Raleway_600SemiBold" }]}>
              {item.count}
            </Text>
            <Text style={[styles.enroll, { fontFamily: "Nunito_500Medium" }]}>
              {item.enroll}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default AboutUserCountSection;
