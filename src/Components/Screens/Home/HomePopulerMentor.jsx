import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { styles } from "../../Styles/HomeScreenStyles/HomePopulerMentor.styles";
import { populerMentorData } from "../../Data/PopulerMentorData";
import { FontAwesome } from "@expo/vector-icons";
import {
  useFonts,
  Raleway_700Bold,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import { Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import { useNavigation } from "@react-navigation/native";
import { mentorData } from "../../Data/MentorData";

const HomePopulerMentor = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const handleMentorDetail = (id) => {
    const filterData = mentorData.find((data) => data.id === id);
    navigation.navigate("Populer Mentor Details", {
      mentorDetails: filterData,
    });
  };

  let [fontsLoaded, fontError] = useFonts({
    Nunito_600SemiBold,
    Raleway_700Bold,
    Raleway_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.populerMentorContainer}>
        <Text
          style={[styles.populerCourseText, { fontFamily: "Raleway_700Bold" }]}
        >
          Populer Mentor
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Populer Mentor")}>
          <Text
            style={[styles.seeAllText, { fontFamily: "Nunito_600SemiBold" }]}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={populerMentorData}
        keyExtractor={(item) => item.id.toString()}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.floor(event.nativeEvent.contentOffset.x);
          setCurrentIndex(newIndex);
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleMentorDetail(item.id)}
            style={styles.mentorItemContainer}
          >
            <Image style={styles.mentorImage} source={item.image_url} />
            <Text
              style={[styles.mentorName, { fontFamily: "Raleway_600SemiBold" }]}
            >
              {item.name}
            </Text>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={17} color={"#FFB800"} />
              <Text
                style={[
                  styles.ratingText,
                  { fontFamily: "Nunito_600SemiBold" },
                ]}
              >
                {item.rating}
              </Text>
              <Text
                style={[
                  styles.studentCountText,
                  { fontFamily: "Nunito_600SemiBold" },
                ]}
              >
                ({item.students})
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={styles.paginationDots}>
        {populerMentorData.slice(0, 3).map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default HomePopulerMentor;
