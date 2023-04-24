import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WeatherComponent = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text className="text-[16px] text-[#7C82A1] justify-between">
          68°F <MaterialCommunityIcons name="cloud" size={24} color="#22242F" />
        </Text>
        <Text className="text-[16px] ">Tuesday, Apr 11</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WeatherComponent;
