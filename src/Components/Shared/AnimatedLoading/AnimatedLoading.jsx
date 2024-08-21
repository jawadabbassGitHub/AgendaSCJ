import React from "react";
import AnimatedLoader from "react-native-animated-loader";
import { LinearGradient } from "expo-linear-gradient";

const AnimatedLoading = () => {
  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("../../../../assets/animation_loading_3.json")}
        animationStyle={{ width: 200, height: 200 }}
        speed={1.5}
      />
    </LinearGradient>
  );
};

export default AnimatedLoading;
