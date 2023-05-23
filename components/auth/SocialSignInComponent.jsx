import { View, Text } from "react-native";
import React from "react";
import CustomButtonComponent from "./CustomButtonComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SocialSignInComponent = ({ social, text, onPress, bgColor, fgColor }) => {
  return (
    <>
      <View className="flex-row flex-1">
        <CustomButtonComponent
          text={text}
          onPress={onPress}
          bgColor={bgColor}
          fgColor={fgColor}
        />
        <View className="mt-12 absolute left-6">
          <MaterialCommunityIcons name={social} size={24} color="#475AD7" />
        </View>
      </View>
    </>
  );
};
export default SocialSignInComponent;
