import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { styles } from "../../Styles/CartScreenStyles/CartScreen.styles";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import {
  Raleway_700Bold,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [cartData, setCartData] = useState([]);
  const navigation = useNavigation();

  const getCartData = async () => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
      return [];
    }
  };

  const saveCartData = async (cart) => {
    try {
      await AsyncStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {}
  };

  useEffect(() => {
    const fetchCartData = async () => {
      const data = await getCartData();
      setCartData(data);
      setIsLoading(false);
    };

    fetchCartData();
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    Nunito_600SemiBold,
    Nunito_400Regular,
    Nunito_700Bold,
    Raleway_700Bold,
    Raleway_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleRemoveItem = (itemId) => {
    const updatedCartData = cartData.filter((item) => item.id !== itemId);
    setCartData(updatedCartData);
    saveCartData(updatedCartData);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartData.reduce((total, item) => total + item.price, 0);
    return totalPrice.toFixed(2);
  };

  const onRefresh = async () => {
    setRefreshing(true);

    const data = await getCartData();
    setCartData(data);

    setRefreshing(false);
  };

  const handleCourseDetails = (courseDetails) => {
    navigation.navigate("Course Details", {
      courseDetails: courseDetails,
    });
  };

  return (
    <>
      {isLoading ? (
        <AnimatedLoading />
      ) : (
        <LinearGradient
          colors={["#E5ECF9", "#F6F7F9"]}
          style={styles.container}
        >
          <FlatList
            data={cartData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.courseContainer}
                onPress={() => handleCourseDetails(item)}
              >
                <TouchableOpacity onPress={() => handleCourseDetails(item)}>
                  <Image source={item.img} style={styles.courseImage} />
                </TouchableOpacity>
                <View style={styles.courseInfo}>
                  <TouchableOpacity onPress={() => handleCourseDetails(item)}>
                    <Text
                      style={[
                        styles.courseTitle,
                        { fontFamily: "Nunito_700Bold" },
                      ]}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.detailsContainer}>
                    <View style={styles.detailWrapper}>
                      <View style={styles.detailItem}>
                        <Entypo name="dot-single" size={24} color={"gray"} />
                        <Text
                          style={[
                            styles.detailText,
                            { fontFamily: "Nunito_400Regular" },
                          ]}
                        >
                          {item.level}
                        </Text>
                      </View>
                      <View style={styles.detailItem}>
                        <FontAwesome
                          name="dollar"
                          size={14}
                          color={"#808080"}
                        />
                        <Text
                          style={[
                            styles.priceText,
                            { fontFamily: "Nunito_600SemiBold" },
                          ]}
                        >
                          {item.price}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => handleRemoveItem(item.id)}
                  >
                    <Text
                      style={[
                        styles.removeButtonText,
                        { fontFamily: "Nunito_600SemiBold" },
                      ]}
                    >
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
            ListEmptyComponent={() => (
              <View style={styles.emptyCartContainer}>
                <Image
                  source={require("../../../../assets/Images/empty_cart.png")}
                  style={styles.emptyCartImage}
                />
                <Text
                  style={[
                    styles.emptyCartText,
                    { fontFamily: "Raleway_600SemiBold" },
                  ]}
                >
                  Your Cart Is Empty
                </Text>
                <Text
                  style={[
                    styles.emptyCartSubText,
                    { fontFamily: "Nunito_400Regular" },
                  ]}
                >
                  Looks like you haven't made any orders yet.
                </Text>
                <TouchableOpacity
                  style={styles.collectCourseButton}
                  onPress={() => navigation.navigate("All Category")}
                >
                  <Text
                    style={[
                      styles.collectCourseButtonText,
                      { fontFamily: "Raleway_600SemiBold" },
                    ]}
                  >
                    Collect Course
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
          <View style={styles.shoppingContainer}>
            {!cartData.length === 0 || cartData.length > 0 ? (
              <Text
                style={[styles.totalPrice, { fontFamily: "Nunito_700Bold" }]}
              >
                Total Price: ${calculateTotalPrice()}
              </Text>
            ) : null}
            {!cartData.length === 0 || cartData.length > 0 ? (
              <TouchableOpacity
                style={styles.continueShoppingButton}
                onPress={() => navigation.navigate("All Category")}
              >
                <Text
                  style={[
                    styles.continueShoppingButtonText,
                    { fontFamily: "Nunito_600SemiBold" },
                  ]}
                >
                  Continue Enrollment
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </LinearGradient>
      )}
    </>
  );
};

export default Cart;
