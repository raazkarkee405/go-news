import { View, Text } from "react-native";
import React from "react";

const HeaderComponent = ({ title, description }) => {
  return (
      <View>
        <Text className="text-[24px] justify-between font-bold">{title}</Text>
        <Text className="text-[16px] text-[#7C82A1] font-semibold ">
          {description}
        </Text>
    </View>
  );
};

export default HeaderComponent;
