import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SafeViewAndroid from "../AndroidSafeArea";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "../assets";
import TopStoriesContainer from "../components/TopStoriesContainer";
import ItemsContainer from "../components/ItemsContainer";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={SafeViewAndroid.AndroidSafeArea}
      className="flex-1 bg-white relative"
    >
      <View className="flex-row items-center justify-between px-8 mt-1">
        <View>
          {/* weather section */}
          <TouchableOpacity>
            <Text className="text-[16px] text-[#7C82A1] justify-between">
              68°F{" "}
              <MaterialCommunityIcons name="cloud" size={24} color="#22242F" />
            </Text>
            <Text className="text-[16px] ">Tuesday, Apr 11</Text>
          </TouchableOpacity>
        </View>
        {/* profile section */}
        <View className="w-12 h-12">
          <TouchableOpacity>
            <Image
              source={Avatar}
              className="w-full h-full rounded-full object-cover"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* Top Stories section */}
          <View className="flex-row items-center justify-between px-8 mt-8">
            <Text className="text-[16px] text-[#2536A7] font-bold">
              Top Stories
            </Text>
            <TouchableOpacity className="px-3">
              <FontAwesome
                name="chevron-circle-right"
                size={24}
                color={"#2536A7"}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Top Stories items section */}
        <View className="px-8 mt-8 flex-row items-center justify-evenly flex-1">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TopStoriesContainer />
          </ScrollView>
        </View>

        {/* Recommended section */}
        <View>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <Text className="text-[18px]  font-extrabold">
              Recommended for you
            </Text>
            <TouchableOpacity className="px-3">
              <Text className="text-[15px] text-[#7C82A1] font-extrabold">
                See All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Recommended items section */}
        <View className="px-8 mt-8 flex-row items-center justify-evenly flex-1">
          <ItemsContainer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
