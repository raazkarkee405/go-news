import { View, Image, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { newZealand } from "../assets";
import { useNavigation } from "@react-navigation/native";
import BookmarkComponent from "./BookmarkComponent";

const TopStoriesContainer = () => {
  const navigation = useNavigation();

  const [bookmarked, setBookMarked] = useState(false);
  return (
    <View className="flex-row items-center flex-1 flex-nowrap gap-4">
      <TouchableOpacity
        className="relative bg-white shadow-lg"
        onPress={() => navigation.navigate("BookmarkScreen")}
      >
        <Image
          source={newZealand}
          className="w-[190px] h-[250px] object-cover rounded-2xl"
        />

        <View className="absolute top-4 right-3">
          <BookmarkComponent color="#F3F4F6" />
        </View>

        <View className="absolute bottom-8 left-4 justify-between gap-1">
          <Text className="text-[#F3F4F6] text-[16px] font-extrabold">
            POLITICS
          </Text>
          <Text className="text-[#F3F4F6] font-semi-bold text-[18px]">
            The latest situation in the presidential election
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TopStoriesContainer;
