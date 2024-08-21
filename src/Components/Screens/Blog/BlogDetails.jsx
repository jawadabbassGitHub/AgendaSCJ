import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Fontisto, Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../../Styles/BlogScreenStyles/BlogDetailsScreen.styles";
import AnimatedLoading from "../../Shared/AnimatedLoading/AnimatedLoading";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import CustomBackHeader from "../../Custom/CustomBackHeader";

const BlogDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const navigation = useNavigation();
  const { blogDetails } = route.params;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_500Medium,
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
          <CustomBackHeader>Blog Details</CustomBackHeader>

          <ScrollView>
            <View style={styles.container}>
              <Image source={blogDetails.image} style={styles.image} />

              <Text style={[styles.title, { fontFamily: "Raleway_700Bold" }]}>
                {blogDetails.title}
              </Text>
              <View style={styles.meta}>
                <View style={styles.metaText}>
                  <Fontisto
                    name="date"
                    size={15}
                    color={"gray"}
                    style={styles.metaIcon}
                  />
                  <Text
                    style={[
                      styles.metaInfo,
                      { fontFamily: "Nunito_600SemiBold" },
                    ]}
                  >
                    {blogDetails.blog_post_date}
                  </Text>
                </View>
                <View style={styles.metaText}>
                  <Feather
                    name="user"
                    size={18}
                    color={"gray"}
                    style={styles.metaIcon}
                  />
                  <Text
                    style={[
                      styles.metaInfo,
                      { fontFamily: "Nunito_600SemiBold" },
                    ]}
                  >
                    {blogDetails.blogger_name}
                  </Text>
                </View>
              </View>

              <Text
                style={[styles.content, { fontFamily: "Nunito_400Regular" }]}
              >
                {blogDetails.description}
              </Text>

              <View style={styles.postTagContainer}>
                <Text
                  style={[
                    styles.postTagText,
                    { fontFamily: "Nunito_600SemiBold" },
                  ]}
                >
                  Post Tags :{" "}
                </Text>
                <View style={styles.postTagWrapper}>
                  {blogDetails?.postTag.map((item, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Blog Page")}
                        key={index}
                        style={styles.postTagButton}
                      >
                        <Text style={{ fontFamily: "Nunito_500Medium" }}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      )}
    </>
  );
};

export default BlogDetails;
