import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButtonComponent = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  const container = {
    PRIMARY: "bg-[#475AD7] rounded-xl py-4",
    // SECONDARY: "bg-[#475AD7] border-2",
    TERTIARY: "",
  };
  const textStyle = {
    PRIMARY: "text-xl text-gray-100 font-semibold ",
    TERTIARY: "text-[#7C82A1]",
    // SECONDARY: "",
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full items-center mt-7 ${container[type]} `}
      style={bgColor ? { backgroundColor: bgColor } : {}}
    >
      <Text
        className={`font-bold ${textStyle[type]}`}
        style={fgColor ? { color: fgColor } : {}}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButtonComponent;
