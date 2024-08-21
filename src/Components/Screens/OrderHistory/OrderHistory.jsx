import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { styles } from "../../Styles/OrderHistoryStyles/OrderHistory.styles";
import CustomBackHeader from "../../Custom/CustomBackHeader";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts, Raleway_600SemiBold } from "@expo-google-fonts/raleway";
import { FontAwesome } from "@expo/vector-icons";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { useNavigation } from "@react-navigation/native";

const OrderHistory = () => {
  const [courses, setCourses] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const navigation = useNavigation();

  const handleLongPress = async (course) => {
    const updatedCourses = courses.filter((c) => c.id !== course.id);
    setCourses(updatedCourses);

    try {
      const purchaseItemJson = await AsyncStorage.getItem("purchaseCourses");
      if (purchaseItemJson !== null) {
        const purchaseItem = JSON.parse(purchaseItemJson);
        const updatedPurchaseItem = purchaseItem.filter(
          (c) => c.id !== course.id
        );
        await AsyncStorage.setItem(
          "purchaseCourses",
          JSON.stringify(updatedPurchaseItem)
        );
      }
    } catch (error) {
      console.error("Error deleting course from AsyncStorage", error);
    }
  };

  const handleCourseDetails = (course) => {
    navigation.navigate("Course Details", {
      courseDetails: course,
    });
  };

  const handleRefresh = async () => {
    try {
      setIsRefreshing(true);
      const purchaseItemJson = await AsyncStorage.getItem("purchaseCourses");
      if (purchaseItemJson !== null) {
        const purchaseItem = JSON.parse(purchaseItemJson);
        setCourses(purchaseItem);
      }
    } catch (error) {
      console.error("Error Retrieving Data", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    Raleway_600SemiBold,
    Nunito_400Regular,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
      <CustomBackHeader>Order History</CustomBackHeader>
      <View style={styles.couserItemContainer}>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onLongPress={() => handleLongPress(item)}
              onPress={() => handleCourseDetails(item)}
              style={styles.courseItemWrap}
            >
              <View style={styles.itemWrapper}>
                <TouchableOpacity onPress={() => handleCourseDetails(item)}>
                  <Image style={styles.courseImage} source={item.img} />
                </TouchableOpacity>
                <View style={styles.itemRightSection}>
                  <TouchableOpacity onPress={() => handleCourseDetails(item)}>
                    <Text
                      style={[
                        styles.titleText,
                        { fontFamily: "Raleway_600SemiBold" },
                      ]}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.instructiorContainer}>
                    <View style={styles.authorWrap}>
                      <Image style={styles.tutorImage} source={item.tutorImg} />
                      <Text
                        style={[
                          styles.authorName,
                          { fontFamily: "Nunito_600SemiBold" },
                        ]}
                      >
                        {item.authorName}
                      </Text>
                    </View>
                    <View style={styles.ratingWrap}>
                      <FontAwesome name="star" size={17} color={"#F8AA00"} />
                      <Text
                        style={[
                          styles.ratingText,
                          { fontFamily: "Nunito_700Bold" },
                        ]}
                      >
                        {item.ratingAve}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
        />
      </View>
    </LinearGradient>
  );
};

export default OrderHistory;
