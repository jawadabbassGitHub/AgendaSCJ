import { View, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import Colors from "../../Utils/Color";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { styles } from "../../Styles/SearchInputScreenStyles/SearchInput.styles";
import { useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";

const SearchInput = () => {
  let [fontsLoaded, fontError] = useFonts({
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
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
          placeholderTextColor="#C6C7CC"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Ionicons
          name="options-outline"
          size={26}
          color={Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
