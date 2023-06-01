import { View, TextInput } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const InputComponent = ({
  placeholder,
  iconName,
  clearButtonMode,
  searchQuery,
  handleSearch,
}) => {
  return (
    <View className="relative flex-row bg-[#F3F4F6] py-3 rounded-xl px-12 w-[90%] border-2 mt-4 ml-6 border-[#F3F4F6]">
      <View className="right-5 top-1">
        <FontAwesome5 name={iconName} size={20} />
      </View>
      <TextInput
        placeholder={placeholder}
        clearButtonMode={clearButtonMode}
        value={searchQuery}
        onChangeText={(query) => handleSearch(query)}
        className="text-[15px] w-[80%]"
      />
    </View>
  );
};

export default InputComponent;
