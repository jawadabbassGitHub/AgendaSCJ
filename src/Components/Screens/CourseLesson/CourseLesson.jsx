import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo, Feather, SimpleLineIcons } from "@expo/vector-icons";
import {
  useFonts,
  Raleway_600SemiBold,
  Raleway_500Medium,
} from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_500Medium } from "@expo-google-fonts/nunito";
import { styles } from "../../Styles/CourseLessonScreenStyles/CourseLesson.styles";

const Section = ({
  sectionTitle,
  courseDetails,
  isOpen,
  handleCouserLectureVideo,
  toggleSection,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.title} onPress={toggleSection}>
        <View style={styles.introductionContainer}>
          <Text style={[styles.text, { fontFamily: "Raleway_600SemiBold" }]}>
            {sectionTitle}
          </Text>
          {isOpen ? (
            <Entypo name="chevron-up" size={23} color={"#6707FE"} />
          ) : (
            <Entypo name="chevron-down" size={23} color={"#6707FE"} />
          )}
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          {courseDetails.curriculum.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.itemContainerWrapper}>
                <View style={styles.itemTitleWrapper}>
                  <Feather name="video" size={20} color={"#8A8A8A"} />
                  <Text
                    style={[
                      styles.itemTitleText,
                      { fontFamily: "Nunito_500Medium" },
                    ]}
                  >
                    {item.title}
                  </Text>
                </View>
                <View style={styles.itemDataContainer}>
                  {index === 0 && (
                    <Text
                      style={[
                        styles.timeText,
                        { fontFamily: "Nunito_400Regular" },
                      ]}
                    >
                      3.38
                    </Text>
                  )}
                  {index > 0 ? (
                    <View style={styles.prviewButtonContainer}>
                      <TouchableOpacity disabled={true} style={styles.button_1}>
                        <Text
                          style={[
                            styles.previewText_1,
                            { fontFamily: "Nunito_500Medium" },
                          ]}
                        >
                          Preview
                        </Text>
                      </TouchableOpacity>
                      <SimpleLineIcons
                        name="lock"
                        size={20}
                        color={"#818181"}
                      />
                    </View>
                  ) : (
                    <TouchableOpacity
                      onPress={() => handleCouserLectureVideo(item)}
                      disabled={false}
                      style={styles.button_2}
                    >
                      <Text
                        style={[
                          styles.previewText_2,
                          { fontFamily: "Nunito_500Medium" },
                        ]}
                      >
                        Preview
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const Dropdown = ({ courseDetails, handleCouserLectureVideo }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  let [fontsLoaded, fontError] = useFonts({
    Raleway_600SemiBold,
    Raleway_500Medium,
    Nunito_400Regular,
    Nunito_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Section
        sectionTitle="01. Introduction of this Course"
        courseDetails={courseDetails}
        isOpen={isOpen1}
        handleCouserLectureVideo={handleCouserLectureVideo}
        toggleSection={() => setIsOpen1(!isOpen1)}
      />
      <Section
        sectionTitle="02. Principles of animation"
        courseDetails={courseDetails}
        isOpen={isOpen2}
        handleCouserLectureVideo={handleCouserLectureVideo}
        toggleSection={() => setIsOpen2(!isOpen2)}
      />
      <Section
        sectionTitle="03. User experience design"
        courseDetails={courseDetails}
        isOpen={isOpen3}
        handleCouserLectureVideo={handleCouserLectureVideo}
        toggleSection={() => setIsOpen3(!isOpen3)}
      />
    </View>
  );
};

export default Dropdown;
