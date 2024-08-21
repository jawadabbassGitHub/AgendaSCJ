import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  FontAwesome,
  Entypo,
  Fontisto,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import { styles } from "../../Styles/CoursesScreenStyles/CourseDetailsScreen.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-notifications";
import { LinearGradient } from "expo-linear-gradient";
import CourseLesson from "../CourseLesson/CourseLesson";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import {
  useFonts,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import CustomBackHeader from "../../Custom/CustomBackHeader";

const CourseDetails = () => {
  const [activeButton, setActiveButton] = useState("About");
  const [isExpanded, setIsExpanded] = useState(false);
  const [checkPurchased, setCheckPurchased] = useState(null);
  const router = useRoute();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const { courseDetails } = router.params;

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
  };

  const reviewData = [
    {
      id: 1,
      name: "David Warner",
      date: "Aug 11, 2023",
      comment:
        "Lorem ipsum dolor sittin amet consectetur adipiscing elit on massa mistake. Aliquam in hendrerit urna pellentes.",
      image: require("../../../../assets/Images/review/review_1.png"),
    },
    {
      id: 2,
      name: "David Warner",
      date: "Aug 11, 2023",
      comment:
        "Lorem ipsum dolor sittin amet consectetur adipiscing elit on massa mistake. Aliquam in hendrerit urna pellentes.",
      image: require("../../../../assets/Images/review/review_2.png"),
    },
  ];
  const handleCouserLectureVideo = (item, index) => {
    navigation.navigate("Course Lecture Video", {
      couserVideo: item,
    });
  };

  const handleAddToCart = async () => {
    try {
      const existingCart = await AsyncStorage.getItem("cart");
      const cart = existingCart ? JSON.parse(existingCart) : [];

      const isCourseAlreadyInCart = cart.some(
        (item) => item.id === courseDetails.id
      );

      if (isCourseAlreadyInCart) {
        Toast.show("Course already added to cart", {
          type: "warning",
          placement: "bottom",
          duration: 2000,
          animationType: "zoom-in",
          warningColor: "#FFC107",
        });
      } else {
        cart.push(courseDetails);
        await AsyncStorage.setItem("cart", JSON.stringify(cart));

        Toast.show("Course added to cart successfully", {
          type: "success",
          placement: "bottom",
          duration: 2000,
          animationType: "zoom-in",
          successColor: "#1988FF",
        });
      }
    } catch (error) {}
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const fetchdataCheck = async () => {
      try {
        const existingPurchaseCourse = await AsyncStorage.getItem(
          "purchaseCourses"
        );
        const purchase = existingPurchaseCourse
          ? JSON.parse(existingPurchaseCourse)
          : [];

        const isCourseAlreadyInStore = purchase.some(
          (item) => item.id === courseDetails.id
        );

        setCheckPurchased(isCourseAlreadyInStore);
      } catch (error) {}
    };
    fetchdataCheck();
  });

  let [fontsLoaded, fontError] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
    Nunito_600SemiBold,
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
          style={styles.mainContainer}
        >
          <CustomBackHeader>Course</CustomBackHeader>
          <ScrollView>
            <View style={styles.courseImageContainer}>
              <View style={styles.bestSellerContainer}>
                <Text
                  style={[
                    styles.bestSellerText,
                    { fontFamily: "Nunito_600SemiBold" },
                  ]}
                >
                  Best Seller
                </Text>
              </View>
              <View style={styles.ratingContainer}>
                <View style={styles.ratingWrapper}>
                  <FontAwesome name="star" size={14} color={"#FFB800"} />
                  <Text
                    style={[
                      styles.ratingText,
                      { fontFamily: "Nunito_600SemiBold" },
                    ]}
                  >
                    {courseDetails.ratingAve}
                  </Text>
                </View>
              </View>
              <Image source={courseDetails.img} style={styles.courseImage} />
            </View>
            <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
              {courseDetails.title}
            </Text>
            <View style={styles.instructorContainer}>
              <View style={styles.instructorNameWrap}>
                <Feather name="user" size={20} color={"#8A8A8A"} />
                <Text
                  style={[
                    styles.instructorNameText,
                    { fontFamily: "Nunito_500Medium" },
                  ]}
                >
                  {courseDetails.authorName}
                </Text>
              </View>
              <View style={styles.lessonContainer}>
                <AntDesign name="playcircleo" size={19} color={"#8A8A8A"} />
                <Text
                  style={[
                    styles.lessonText,
                    { fontFamily: "Nunito_500Medium" },
                  ]}
                >
                  {courseDetails.lessons}
                </Text>
              </View>
              <View style={styles.certificateContainer}>
                <Image
                  style={styles.certificateImage}
                  source={require("../../../../assets/Images/icon/certificate.png")}
                />
                <Text
                  style={[
                    styles.certificateText,
                    { fontFamily: "Nunito_500Medium" },
                  ]}
                >
                  Certificate
                </Text>
              </View>
            </View>
            <View style={styles.studentCountAndPriceWrapper}>
              <View style={styles.studentImageAndPriceContainer}>
                <Image
                  style={styles.mentorImage}
                  source={require("../../../../assets/Images/mentor/mentor_1.png")}
                />
                <View style={[styles.imageWrap, styles.positionImage1]}>
                  <Image
                    style={styles.mentorImage}
                    source={require("../../../../assets/Images/mentor/mentor_2.png")}
                  />
                </View>
                <View style={[styles.imageWrap, styles.positionImage2]}>
                  <Image
                    style={styles.mentorImage}
                    source={require("../../../../assets/Images/mentor/mentor_3.png")}
                  />
                </View>
                <View style={[styles.imageWrap, styles.positionImage3]}>
                  <View style={styles.studentCountContainer}>
                    <Text
                      style={[
                        styles.studentCountText,
                        { fontFamily: "Nunito_700Bold" },
                      ]}
                    >
                      {courseDetails.studentCount}+
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.priceContainer}>
                <FontAwesome name="dollar" size={19} color={"#808080"} />
                <Text
                  style={[styles.priceText, { fontFamily: "Nunito_700Bold" }]}
                >
                  {courseDetails.price}
                </Text>
              </View>
            </View>
            <View style={styles.buttonGroupContainer}>
              <TouchableOpacity
                style={[
                  styles.buttonContainer,
                  activeButton === "About" && styles.activeButton,
                  activeButton === "About" && styles.activeButtonWrap,
                ]}
                onPress={() => handleButtonPress("About")}
              >
                <Text
                  style={[
                    activeButton === "About" && [
                      styles.activeText,
                      { fontFamily: "Nunito_600SemiBold" },
                    ],
                    { fontFamily: "Nunito_600SemiBold" },
                  ]}
                >
                  About
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonContainer,
                  activeButton === "Lesson" && styles.activeButton,
                  activeButton === "Lesson" && styles.activeButtonWrap,
                ]}
                onPress={() => handleButtonPress("Lesson")}
              >
                <Text
                  style={[
                    activeButton === "Lesson" && [
                      styles.activeText,
                      { fontFamily: "Nunito_600SemiBold" },
                    ],
                    { fontFamily: "Nunito_600SemiBold" },
                  ]}
                >
                  Lesson
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonContainer,
                  activeButton === "Review" && styles.activeButton,
                  activeButton === "Review" && styles.activeButtonWrap,
                ]}
                onPress={() => handleButtonPress("Review")}
              >
                <Text
                  style={[
                    activeButton === "Review" && [
                      styles.activeText,
                      { fontFamily: "Nunito_600SemiBold" },
                    ],
                    { fontFamily: "Nunito_600SemiBold" },
                  ]}
                >
                  Review
                </Text>
              </TouchableOpacity>
            </View>
            {activeButton === "About" && (
              <View style={styles.buttonPressedContainer}>
                <Text
                  style={[
                    styles.aboutCourseText,
                    { fontFamily: "Raleway_700Bold" },
                  ]}
                >
                  About Course
                </Text>
                <Text
                  style={[
                    styles.aboutDescriptionText,
                    { fontFamily: "Nunito_500Medium" },
                  ]}
                >
                  {isExpanded
                    ? courseDetails.description
                    : courseDetails.description.slice(0, 302)}
                </Text>
                {courseDetails.description.length > 302 && (
                  <TouchableOpacity
                    style={styles.showMoreButton}
                    onPress={() => setIsExpanded(!isExpanded)}
                  >
                    <Text
                      style={[
                        styles.showMoreButtonText,
                        { fontFamily: "Nunito_700Bold" },
                      ]}
                    >
                      {isExpanded ? "Show Less" : "Show More"}{" "}
                      {isExpanded ? "-" : "+"}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
            {activeButton === "Lesson" && (
              <View style={styles.buttonPressedContainer}>
                <CourseLesson
                  courseDetails={courseDetails}
                  handleCouserLectureVideo={handleCouserLectureVideo}
                />
              </View>
            )}
            {activeButton === "Review" && (
              <View style={styles.buttonPressedContainer}>
                <View style={styles.reviewTopWrap}>
                  {reviewData.map((item) => (
                    <View key={item.id} style={styles.reviewTopContainer}>
                      <Image style={styles.reviewImage} source={item.image} />
                      <View style={styles.reviewRightSection}>
                        <View style={styles.reviewRightNameSection}>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Text
                              style={[
                                styles.reviewNameText,
                                { fontFamily: "Raleway_700Bold" },
                              ]}
                            >
                              {item.name}
                            </Text>
                            <AntDesign
                              name="like1"
                              size={22}
                              color={"#818181"}
                            />
                          </View>
                          <View style={styles.reviewDateWrapper}>
                            <View style={styles.reviewDateBorder}>
                              <Text
                                style={[
                                  styles.reviewDateText,
                                  { fontFamily: "Nunito_400Regular" },
                                ]}
                              >
                                On: {item.date}
                              </Text>
                              <View style={styles.reviewBorder}></View>
                            </View>
                            <View style={styles.reviewStarWrapper}>
                              <FontAwesome
                                name="star"
                                size={16}
                                color={"#FF8D07"}
                              />
                              <FontAwesome
                                name="star"
                                size={16}
                                color={"#FF8D07"}
                              />
                              <FontAwesome
                                name="star"
                                size={16}
                                color={"#FF8D07"}
                              />
                              <FontAwesome
                                name="star"
                                size={16}
                                color={"#FF8D07"}
                              />
                              <FontAwesome
                                name="star"
                                size={16}
                                color={"#FF8D07"}
                              />
                            </View>
                          </View>
                        </View>
                        <Text
                          style={[
                            styles.commentText,
                            { fontFamily: "Nunito_400Regular" },
                          ]}
                        >
                          {item.comment}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {activeButton === "About" && (
              <TouchableOpacity
                style={styles.addToCartContainer}
                onPress={handleAddToCart}
              >
                <Text
                  style={[
                    styles.AddToCartText,
                    { fontFamily: "Nunito_600SemiBold" },
                  ]}
                >
                  Add To Cart
                </Text>
              </TouchableOpacity>
            )}
          </ScrollView>
          <View style={styles.enrollContainer}>
            {checkPurchased === true ? (
              <TouchableOpacity
                disabled
                style={[
                  styles.enrollButtonWrap,
                  { backgroundColor: "#808080" },
                ]}
                onPress={() =>
                  navigation.navigate("Payment Method", {
                    courseDetails: courseDetails,
                  })
                }
              >
                <Text
                  style={[
                    styles.enrollText,
                    { fontFamily: "Nunito_600SemiBold" },
                  ]}
                >
                  Already Purchased
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.enrollButtonWrap}
                onPress={() =>
                  navigation.navigate("Payment Method", {
                    courseDetails: courseDetails,
                  })
                }
              >
                <Text
                  style={[
                    styles.enrollText,
                    { fontFamily: "Nunito_600SemiBold" },
                  ]}
                >
                  Enroll Now
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </LinearGradient>
      )}
    </>
  );
};

export default CourseDetails;
