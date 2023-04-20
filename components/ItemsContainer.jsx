import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Belgium } from "../assets";
import BookmarkComponent from "./BookmarkComponent";

const ItemsContainer = () => {
  return (
    <View className="flex-1 flex-col justify-between gap-5 ">
      <TouchableOpacity>
        <View>
          <Image
            source={Belgium}
            className="w-[100px] h-[100px] object-cover rounded-2xl"
          />
        </View>
        <View className="absolute justify-between left-[115px] top-[18px] w-[210px] gap-2">
          <Text className="text-[14px] text-[#7C82A1] font-bold ">
            14 hours ago
          </Text>
          <Text className="text-[16px] font-medium truncate...">
            A Simple Trick For Creating Color Palettes Quickly
          </Text>
        </View>
        <View className="absolute top-0 right-3">
          <BookmarkComponent />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemsContainer;
