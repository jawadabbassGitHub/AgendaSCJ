import React, { memo, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import { searchAndFilteringData } from "../../Data/SearchAndFilteringData";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { RadioButton } from "react-native-paper";
import { styles } from "../../Styles/SearchScreenStyles/SearchScreen.styles";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import Colors from "../../Utils/Color";
import CustomDrawerHeader from "../../Custom/CustomDrawerHeader";

const CourseItem = memo(({ item, handleCourseDetails }) => (
  <TouchableOpacity
    style={styles.courseItem}
    onPress={() => handleCourseDetails(item)}
  >
    <Image source={item.img} style={styles.courseImage} />
    <View style={styles.courseDetails}>
      <Text style={[styles.title, { fontFamily: "Raleway_700Bold" }]}>
        {item.title}
      </Text>
      <Text style={[styles.courseLabel, { fontFamily: "Nunito_600SemiBold" }]}>
        {item.category}
      </Text>
      <View style={styles.courseMetadata}>
        <View style={styles.metadataItem}>
          {item.price === 0 ? null : (
            <FontAwesome name="dollar" size={14} color={"#808080"} />
          )}
          <Text style={[styles.metadataText, { fontFamily: "Nunito_700Bold" }]}>
            {item.price === 0 ? "Free" : item.price}
          </Text>
        </View>
        <View style={styles.metadataItem}>
          <Text style={[{ fontFamily: "Nunito_600SemiBold" }]}>Rating:</Text>
          <Text
            style={[styles.metaDataText2, { fontFamily: "Nunito_700Bold" }]}
          >
            {item.ratingAve}
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
));

const Search = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checked, setChecked] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  const handlePaymentOptionPress = (value) => {
    setChecked(value);
  };

  const searchFilter = (text) => {
    let searchList = searchAndFilteringData.filter((item) => {
      const matchTitle =
        item.title && item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      const matchCategory =
        item.category &&
        item.category.toLowerCase().indexOf(text.toLowerCase()) > -1;
      return matchTitle || matchCategory;
    });
    setFilteredData(searchList);
  };

  const handleCourseDetails = (courseDetails) => {
    navigation.navigate("Course Details", {
      courseDetails: courseDetails,
    });
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setFilteredData(searchAndFilteringData);
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
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
          style={styles.mainContainer}
        >
          <SafeAreaView style={styles.container}>
            <CustomDrawerHeader>Search</CustomDrawerHeader>
            <View style={styles.filteringContainer}>
              <TouchableOpacity style={styles.searchContainer}>
                <View style={styles.searchIconContainer}>
                  <AntDesign
                    name="search1"
                    size={20}
                    color={Colors.NEUTRAL.NEUTRAL_WHITE}
                  />
                </View>
                <TextInput
                  style={[styles.input, { fontFamily: "Nunito_700Bold" }]}
                  placeholder="Search"
                  placeholderTextColor={Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN}
                  onChangeText={(text) => searchFilter(text)}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.filterButton}
                onPress={toggleModal}
              >
                <Ionicons
                  name="options-outline"
                  size={26}
                  color={Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 16, paddingBottom: 110 }}>
              <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <CourseItem
                    item={item}
                    handleCourseDetails={handleCourseDetails}
                  />
                )}
              />
            </View>
          </SafeAreaView>

          <Modal isVisible={isModalVisible} backdropOpacity={0.7}>
            <View style={styles.modalClose}>
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() => setIsModalVisible(false)}
              >
                <AntDesign name="closecircleo" size={30} color={"gray"} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={styles.modalContentButton}
                onPress={() => {
                  let tempList = searchAndFilteringData.sort((a, b) =>
                    a.title > b.title ? 1 : -1
                  );
                  setFilteredData(tempList);
                  handlePaymentOptionPress("Sort By Name"), toggleModal();
                }}
              >
                <Text>Sort By Name</Text>
                <RadioButton
                  onPress={() => {
                    let tempList = searchAndFilteringData.sort((a, b) =>
                      a.title > b.title ? 1 : -1
                    );
                    setFilteredData(tempList);
                    handlePaymentOptionPress("Sort By Name"), toggleModal();
                  }}
                  value="Sort By Name"
                  status={checked === "Sort By Name" ? "checked" : "unchecked"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalContentButton}
                onPress={() => {
                  let temtList = searchAndFilteringData.sort(
                    (a, b) => a.price - b.price
                  );
                  setFilteredData(temtList);
                  handlePaymentOptionPress("Low To High Price"), toggleModal();
                }}
              >
                <Text>Low To High Price</Text>
                <RadioButton
                  onPress={() => {
                    let temtList = searchAndFilteringData.sort(
                      (a, b) => a.price - b.price
                    );
                    setFilteredData(temtList);
                    handlePaymentOptionPress("Low To High Price"),
                      toggleModal();
                  }}
                  value="Low To High Price"
                  status={
                    checked === "Low To High Price" ? "checked" : "unchecked"
                  }
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalContentButton}
                onPress={() => {
                  let temtList = searchAndFilteringData.sort(
                    (a, b) => b.price - a.price
                  );
                  setFilteredData(temtList);
                  handlePaymentOptionPress("High To Low Price"), toggleModal();
                }}
              >
                <Text>High To Low Price</Text>
                <RadioButton
                  onPress={() => {
                    let temtList = searchAndFilteringData.sort(
                      (a, b) => b.price - a.price
                    );
                    setFilteredData(temtList);
                    handlePaymentOptionPress("High To Low Price"),
                      toggleModal();
                  }}
                  value="High To Low Price"
                  status={
                    checked === "High To Low Price" ? "checked" : "unchecked"
                  }
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalContentButton}
                onPress={() => {
                  let temtList = searchAndFilteringData.sort(
                    (a, b) => b.ratingAve - a.ratingAve
                  );
                  setFilteredData(temtList);
                  handlePaymentOptionPress("Sort By Rating"), toggleModal();
                }}
              >
                <Text>Sort By Rating</Text>
                <RadioButton
                  onPress={() => {
                    let temtList = searchAndFilteringData.sort(
                      (a, b) => b.ratingAve - a.ratingAve
                    );
                    setFilteredData(temtList);
                    handlePaymentOptionPress("Sort By Rating"), toggleModal();
                  }}
                  value="Sort By Rating"
                  status={
                    checked === "Sort By Rating" ? "checked" : "unchecked"
                  }
                />
              </TouchableOpacity>
            </View>
          </Modal>
        </LinearGradient>
      )}
    </>
  );
};

export default Search;
