import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { categoriesData } from "../../Data/CategoriesData";
import { styles } from "../../Styles/HomeScreenStyles/HomeCategoryScreen.styles";
import {
  useFonts,
  Raleway_700Bold,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import { Nunito_600SemiBold } from "@expo-google-fonts/nunito";

const HomeTopCategorySection = () => {
  const navigation = useNavigation();
  const flatListRef = React.useRef(null);

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_600SemiBold,
    Raleway_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleScrollToIndexFailed = (info) => {
    // Handle the failure, possibly by manually scrolling to the index
    const { index } = info;
    flatListRef.current.scrollToIndex({
      index,
      animated: true, // You can adjust this based on your preference
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topCategoryWrapper}>
        <Text
          style={[styles.topCategoryText, { fontFamily: "Raleway_700Bold" }]}
        >
          Top Categories
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("All Category")}>
          <Text
            style={[
              styles.seeAllButtonText,
              { fontFamily: "Nunito_600SemiBold" },
            ]}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        ref={flatListRef}
        data={categoriesData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.touchableContainer}
            onPress={() =>
              navigation.navigate("All Courses", { categoryID: item.id })
            }
          >
            <View
              style={[
                styles.touchableImageWrapper,
                { backgroundColor: item.color },
              ]}
            >
              <Image style={styles.touchableImage} source={item.icon} />
            </View>
            <Text
              style={[
                styles.touchableCategory,
                { fontFamily: "Raleway_600SemiBold" },
              ]}
            >
              {item.category}
            </Text>
            <Text
              style={[
                styles.touchableCourses,
                { fontFamily: "Nunito_600SemiBold" },
              ]}
            >
              {item.courses} Courses
            </Text>
          </TouchableOpacity>
        )}
        onScrollToIndexFailed={handleScrollToIndexFailed}
      />
    </View>
  );
};

export default HomeTopCategorySection;
