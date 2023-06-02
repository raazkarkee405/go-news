import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { newZealand } from "../assets";

import BookmarkComponent from "./BookmarkComponent";
import { useNavigation } from "@react-navigation/native";

const ItemsContainer = ({ data, screen }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 flex-col justify-between gap-5">
      {data?.length > 0 ? (
        data.map((item) => (
          <>
            <TouchableOpacity
              key={item.key}
              className="ml-4 mb-4 mt-4"
              onPress={() =>
                navigation.navigate("NewsScreen", {
                  dataItems: item,
                  prevScreen: screen,
                })
              }
            >
              <View>
                <Image
                  source={
                    item.multimedia
                      ? { uri: item.multimedia[1].url }
                      : newZealand
                  }
                  className="w-[100px] h-[100px] object-cover rounded-2xl"
                />
              </View>
              <View className="absolute justify-between left-[115px] top-[18px] w-[210px] gap-2">
                <Text className="text-[14px] text-[#7C82A1] font-bold ">
                  {new Date(item.published_date).toLocaleDateString()}
                </Text>
                <Text className="text-[16px] font-medium truncate...">
                  {item.title?.length > 50
                    ? `${item.title.slice(0, 50)}..`
                    : item.title}
                </Text>
              </View>
              <View className="absolute top-0 right-1">
                <BookmarkComponent color="#475AD7" />
              </View>
            </TouchableOpacity>
          </>
        ))
      ) : (
        <>
          <View className="items-center space-y-8 justify-center">
            <Text className="text-xl text-[#2536A7] font-semibold">
              Oops...No Data Found
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ItemsContainer;
