import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../../Styles/CoursesScreenStyles/CourseInfoScreen.styles";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";

const CourseInfo = () => {
  const route = useRoute();
  const [isLoading, setIsLoading] = useState(true);
  const { courseInfo } = route.params;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <AnimatedLoading />
      ) : (
        <ScrollView style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.description}>{courseInfo.description}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>What you'll learn</Text>
            {courseInfo?.chackInformation.map((item) => (
              <View key={item.id} style={styles.infoItem}>
                <AntDesign name="check" size={24} color={"green"} />
                <Text style={styles.infoText}>{item.checkInfo}</Text>
              </View>
            ))}
          </View>

          <Image source={courseInfo.img} style={styles.courseImage} />
        </ScrollView>
      )}
    </>
  );
};

export default CourseInfo;
