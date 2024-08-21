import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../Styles/EventScreenStyles/EventScreen.styles";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import { eventData } from "../../Data/EventData";
import { useNavigation } from "@react-navigation/native";
import SearchInput from "../../Shared/SearchInput/SearchInput";
import {
  useFonts,
  Raleway_700Bold,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regula,
  Nunito_700Bold,
  Nunito_500Medium,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import CustomDrawerHeader from "../../Custom/CustomDrawerHeader";
import Colors from "../../Utils/Color";

const slideCategory = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Design",
  },
  {
    id: 3,
    title: "Programming",
  },
  {
    id: 4,
    title: "Graphic",
  },
  {
    id: 5,
    title: "Development",
  },
];

const Event = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredEventData, setFilteredEventData] = useState(eventData);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    setLoading(true);
    setActiveCategory(category);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleEventDetails = (item) => {
    navigation.navigate("Event Details", { eventDetails: item });
  };

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredEventData(eventData);
    } else {
      const filteredData = eventData.filter((item) =>
        item.category.includes(activeCategory)
      );
      setFilteredEventData(filteredData);
    }
  }, [activeCategory]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regula,
    Nunito_700Bold,
    Nunito_500Medium,
    Raleway_600SemiBold,
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
          style={styles.container}
        >
          <CustomDrawerHeader>Events</CustomDrawerHeader>
          <ScrollView>
            <SearchInput />
            <View style={styles.eventBannerBackground}>
              <View style={styles.bannerContainer}>
                <View style={styles.bannerLeft}>
                  <Text
                    style={[
                      styles.bannerText,
                      { fontFamily: "Raleway_700Bold" },
                    ]}
                  >
                    Join Upcoming Design Event
                  </Text>
                  <Text
                    style={[
                      styles.bannerDate,
                      { fontFamily: "Nunito_400Regular" },
                    ]}
                  >
                    Jan 15, 2024
                  </Text>
                  <TouchableOpacity style={styles.bannerButtonContainer}>
                    <Text
                      style={[
                        styles.bannerButtonText,
                        { fontFamily: "Nunito_700Bold" },
                      ]}
                    >
                      Get Ticket
                    </Text>
                  </TouchableOpacity>
                </View>
                <Image
                  style={styles.bannerImage}
                  source={require("../../../../assets/Images/events/event_banner.png")}
                />
              </View>
              <Image
                style={styles.bannerBackground}
                source={require("../../../../assets/Images/events/event_banner_bg.png")}
              />
            </View>
            <View style={styles.categorySlideWrapper}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={slideCategory}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.categorySlideContainer,
                      {
                        backgroundColor:
                          activeCategory === item.title
                            ? "rgba(36, 103, 236, 0.15)"
                            : "white",
                      },
                    ]}
                    onPress={() => handleCategoryPress(item.title)}
                  >
                    <Text
                      style={[
                        styles.categoryText,
                        {
                          color:
                            activeCategory === item.title
                              ? Colors.PRIMARY.PRIMARY_RETRO_BLUE
                              : "black",
                          fontFamily: "Nunito_500Medium",
                        },
                      ]}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            {loading ? (
              <ActivityIndicator
                size="large"
                color={"#2267EC"}
                style={{ marginTop: 50 }}
              />
            ) : (
              <View style={styles.eventMainWrapper}>
                {filteredEventData.map((item) => (
                  <TouchableOpacity
                    onPress={() => handleEventDetails(item)}
                    key={item.id}
                    style={styles.eventItemContainer}
                  >
                    <TouchableOpacity onPress={() => handleEventDetails(item)}>
                      <Image
                        style={styles.eventItemImage}
                        source={item.eventImg}
                      />
                    </TouchableOpacity>
                    <View style={styles.eventRightSection}>
                      <TouchableOpacity
                        onPress={() => handleEventDetails(item)}
                      >
                        <Text
                          style={[
                            styles.eventText,
                            { fontFamily: "Raleway_600SemiBold" },
                          ]}
                        >
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                      <View style={styles.eventRightTextSection}>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <View style={styles.mentorImageContainer}>
                            <View
                              style={{
                                borderColor: "#FFFF",
                                borderWidth: 2,
                              }}
                            >
                              <Image
                                style={{ width: 30, height: 30 }}
                                source={item.mentorImage1}
                              />
                            </View>
                            <View
                              style={{
                                borderColor: "#FFFF",
                                borderWidth: 2,
                                right: 13,
                                borderRadius: 50,
                              }}
                            >
                              <Image
                                style={{
                                  width: 30,
                                  height: 30,
                                }}
                                source={item.mentorImage2}
                              />
                            </View>
                            <View
                              style={{
                                borderColor: "#FFFF",
                                borderWidth: 2,
                                right: 26,
                                borderRadius: 50,
                              }}
                            >
                              <Image
                                style={{ width: 30, height: 30 }}
                                source={item.mentorImage3}
                              />
                            </View>
                          </View>
                          <View style={styles.eventTextWrapper}>
                            <Text
                              style={[
                                styles.eventTextAudience,
                                { fontFamily: "Nunito_500Medium" },
                              ]}
                            >
                              {item.audience}+ Going
                            </Text>
                            <View style={styles.ratingSection}>
                              <FontAwesome
                                name="star"
                                size={16}
                                color={"#FFB800"}
                              />
                              <Text
                                style={[
                                  styles.ratingText,
                                  { fontFamily: "Nunito_700Bold" },
                                ]}
                              >
                                {item.rating}
                              </Text>
                              <Text
                                style={[
                                  styles.eventTextAudiences,
                                  { fontFamily: "Nunito_600SemiBold" },
                                ]}
                              >
                                ({item.seat})
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[styles.locationContainer, { marginTop: 10 }]}
                        >
                          <View style={styles.locationContainer}>
                            <Feather
                              name="calendar"
                              size={18}
                              color={"#8A8A8A"}
                            />
                            <Text
                              style={[
                                styles.data,
                                { fontFamily: "Nunito_500Medium" },
                              ]}
                            >
                              {item.monthAndYear}
                            </Text>
                          </View>
                          <View
                            style={[
                              styles.locationContainer,
                              { marginLeft: 10 },
                            ]}
                          >
                            <Ionicons
                              name="location-outline"
                              size={20}
                              color={"#8A8A8A"}
                            />
                            <Text
                              style={[
                                styles.data,
                                { fontFamily: "Nunito_500Medium" },
                              ]}
                            >
                              {item.location}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </ScrollView>
        </LinearGradient>
      )}
    </>
  );
};

export default Event;
