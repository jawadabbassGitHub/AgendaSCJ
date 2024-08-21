import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { categoriesData } from "../../Data/CategoriesData";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../Styles/AboutScreenStyles/AboutOnlineCategoriesScreen.styles";
import {
  useFonts,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";

const AboutOnlineCategories = () => {
  const navigation = useNavigation();

  const handleCourses = (category) => {
    navigation.navigate("All Courses", {
      categoryID: category.id,
    });
  };

  let [fontsLoaded, fontError] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { fontFamily: "Raleway_700Bold" }]}>
          Education Categories
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        {categoriesData?.slice(0, 4).map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.categoryItem}
              onPress={() => handleCourses(item)}
            >
              <Image source={item.icon} style={styles.categoryIcon} />
              <Text
                style={[
                  styles.categoryText,
                  { fontFamily: "Raleway_600SemiBold" },
                ]}
              >
                {item.category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default AboutOnlineCategories;
