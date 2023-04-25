import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { Newspaper, newZealand } from "../assets";
import { useNavigation } from "@react-navigation/native";
import BookmarkComponent from "./BookmarkComponent";

const TopStoriesContainer = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center flex-1 flex-nowrap gap-4">
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index: fIndex }) => {
          return (
            <TouchableOpacity
              key={item.key}
              className="relative bg-white shadow-lg mr-4"
              onPress={() => navigation.navigate("BookmarkScreen")}
            >
              <Image
                source={
                  item.multimedia ? { uri: item.multimedia[1].url } : newZealand
                }
                className=" w-[190px] h-[250px] object-cover rounded-2xl bg-blend-soft-light"
              />

              <View className="absolute top-4 right-3">
                <BookmarkComponent color="#F3F4F6" />
              </View>

              <View className="absolute bottom-8 left-4 pr-4 justify-between gap-1">
                <Text className="text-[#F3F4F6] text-[16px] font-black uppercase">
                  {item.section ? item.section : item.subsection}
                </Text>
                <Text className="text-[#F3F4F6] font-black text-[18px]">
                  {item.title?.length > 20
                    ? `${item.title.slice(0, 40)}..`
                    : item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default TopStoriesContainer;
