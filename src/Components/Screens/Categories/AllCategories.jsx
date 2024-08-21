import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { categoriesData } from "../../Data/CategoriesData";
import { styles } from "../../Styles/CategoriesScreenStyles/AllCategoriesScreen.styles";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import CustomBackHeader from "../../Custom/CustomBackHeader";

const AllCategories = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderCategories = () => {
    return categoriesData.map((item) => (
      <TouchableNativeFeedback
        key={item.id}
        onPress={() =>
          navigation.navigate("All Courses", { categoryID: item.id })
        }
      >
        <View style={styles.categoryItem}>
          <Image source={item.icon} style={styles.image} />
          <Text style={[styles.categoryText, { fontFamily: "Nunito_700Bold" }]}>
            {item.category}
          </Text>
        </View>
      </TouchableNativeFeedback>
    ));
  };

  let [fontsLoaded, fontError] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <AnimatedLoading />
      ) : (
        <LinearGradient
          colors={["#E5ECF9", "#F6F7F9"]}
          style={styles.container}
        >
          <CustomBackHeader>Categories</CustomBackHeader>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.categoryContainer}>{renderCategories()}</View>
          </ScrollView>
        </LinearGradient>
      )}
    </>
  );
};

export default AllCategories;
