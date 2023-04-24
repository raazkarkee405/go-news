import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const HeaderComponent = ({ title, description }) => {
  return (
    <View>
      <TouchableOpacity>
        <Text className="text-[24px] justify-between font-bold">{title}</Text>
        <Text className="text-[16px] text-[#7C82A1] font-semibold ">
          {description}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;
