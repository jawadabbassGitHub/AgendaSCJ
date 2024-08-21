import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Fontisto,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { styles } from "../../Styles/EventScreenStyles/EventDetailsScreen.styles";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import {
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import CustomBackHeader from "../../Custom/CustomBackHeader";

const EventDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { eventDetails } = route.params;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      {loading ? (
        <AnimatedLoading />
      ) : (
        <LinearGradient
          colors={["#E5ECF9", "#F6F7F9"]}
          style={styles.container}
        >
          <CustomBackHeader>Event</CustomBackHeader>
          <ScrollView>
            <View>
              <View style={styles.eventImageWrapper}>
                <Image
                  style={styles.eventImage}
                  source={eventDetails.eventImg}
                />
              </View>
              <Text
                style={[styles.eventTitle, { fontFamily: "Raleway_700Bold" }]}
              >
                {eventDetails.title}
              </Text>
              <View style={styles.eventContainer}>
                <View style={styles.mentorContainer}>
                  <View style={styles.mentorImageWrapper}>
                    <Image
                      style={styles.mentorImage1}
                      source={eventDetails.mentorImage1}
                    />
                    <View style={styles.mentorImageWrap1}>
                      <Image
                        style={styles.mentorImage2}
                        source={eventDetails.mentorImage2}
                      />
                    </View>
                    <View style={styles.mentorImageWrap2}>
                      <Image
                        style={styles.mentorImage3}
                        source={eventDetails.mentorImage3}
                      />
                    </View>
                  </View>
                  <Text
                    style={[
                      styles.audienceText,
                      { fontFamily: "Nunito_500Medium" },
                    ]}
                  >
                    {eventDetails.audience}+ Going
                  </Text>
                </View>
                <View style={styles.priceText}>
                  <Fontisto name="dollar" size={16} color={"white"} />
                  <Text
                    style={[
                      styles.priceTexts,
                      { fontFamily: "Nunito_600SemiBold" },
                    ]}
                  >
                    {eventDetails.price}
                  </Text>
                </View>
              </View>
              <View style={styles.eventSheduleContainer}>
                <View style={styles.dateContainer}>
                  <View style={styles.dateWrapper}>
                    <Feather name="calendar" size={19} color={"#8A8A8A"} />
                    <Text
                      style={[
                        styles.dateText,
                        { fontFamily: "Nunito_500Medium" },
                      ]}
                    >
                      Date
                    </Text>
                  </View>
                  <View style={styles.dateWrapper2}>
                    <Text
                      style={[
                        styles.dateText2,
                        { fontFamily: "Nunito_500Medium" },
                      ]}
                    >
                      {eventDetails.monthAndYear} {eventDetails.year}
                    </Text>
                  </View>
                </View>
                <View style={styles.timeContainer}>
                  <View style={styles.timeWrapper}>
                    <Ionicons name="time-outline" size={22} color={"#8A8A8A"} />
                    <Text
                      style={[
                        styles.timeText,
                        { fontFamily: "Nunito_500Medium" },
                      ]}
                    >
                      Time
                    </Text>
                  </View>
                  <View style={{ fontFamily: "Nunito_500Medium" }}>
                    <Text style={styles.timeText2}>
                      {eventDetails.schedule}
                    </Text>
                  </View>
                </View>
                <View style={styles.timeContainer}>
                  <View style={styles.timeWrapper}>
                    <Ionicons
                      style={{ marginLeft: -1.5 }}
                      name="location-outline"
                      size={24}
                      color={"#8A8A8A"}
                    />
                    <Text
                      style={[
                        styles.timeText,
                        { fontFamily: "Nunito_500Medium" },
                      ]}
                    >
                      Location
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.timeText2,
                        { fontFamily: "Nunito_500Medium" },
                      ]}
                    >
                      {eventDetails.location}
                    </Text>
                  </View>
                </View>
                <View style={styles.timeContainer}>
                  <View style={styles.timeWrapper}>
                    <FontAwesome
                      style={{ marginLeft: 4 }}
                      name="bookmark-o"
                      size={20}
                      color={"#8A8A8A"}
                    />
                    <Text
                      style={[
                        styles.categoryText,
                        { fontFamily: "Nunito_500Medium" },
                      ]}
                    >
                      Category
                    </Text>
                  </View>
                  <View style={styles.totalWrapper2}>
                    <Text
                      style={[
                        styles.timeText2,
                        { fontFamily: "Nunito_500Medium" },
                      ]}
                    >
                      {eventDetails.category}
                    </Text>
                  </View>
                </View>
                <View style={styles.totalContainer}>
                  <View style={styles.totalWrapper}>
                    <MaterialCommunityIcons
                      style={{ marginLeft: 1 }}
                      name="sofa-single-outline"
                      size={23}
                      color={"#8A8A8A"}
                    />
                    <Text
                      style={[
                        styles.totalText,
                        { fontFamily: "Nunito_500Medium" },
                      ]}
                    >
                      Total Seat
                    </Text>
                  </View>
                  <View style={styles.totalWrapper2}>
                    <Text
                      style={[
                        styles.totalText2,
                        { fontFamily: "Nunito_500Medium" },
                      ]}
                    >
                      {eventDetails.seat}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.aboutContainer}>
                <Text
                  style={[styles.aboutText, { fontFamily: "Raleway_700Bold" }]}
                >
                  About Event
                </Text>
                <Text
                  style={[
                    styles.introductionText,
                    { fontFamily: "Nunito_400Regular" },
                  ]}
                >
                  {isExpanded
                    ? eventDetails.introduction
                    : eventDetails.introduction.slice(0, 220)}
                </Text>
                {eventDetails.introduction.length > 220 && (
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
                      {isExpanded ? "Show Less" : "Show More"} +
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </ScrollView>
          <View style={styles.joinEventContainer}>
            <TouchableOpacity style={styles.joinEventButton}>
              <Text
                style={[
                  styles.joinEventButtonText,
                  { fontFamily: "Nunito_500Medium" },
                ]}
              >
                Join this Event
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      )}
    </>
  );
};
export default EventDetails;
