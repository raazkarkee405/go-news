import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SafeViewAndroid from "../AndroidSafeArea";
import { WelcomeImage } from "../assets";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className="flex-1 bg-white relative"
      style={SafeViewAndroid.AndroidSafeArea}
    >
      <View className="flex-column items-center justify-between px-8 mt-12">
        <View className="items-center justify-center mt-20">
          <Image source={WelcomeImage} className="w-72 h-72" />
        </View>
        <View className="flex-row items-center justify-between space-x-1">
          <Text className="text-[80px] font-semibold">Go</Text>
          <Text className="text-[#475AD7] text-[80px] font-semibold">News</Text>
        </View>
      </View>
      <View className="items-center px-6 justify-center">
        <Text className="text-[#7C82A1] text-[25px] ">
          All news in one place, be the
        </Text>
        <Text className="text-[#7C82A1] text-[25px] ">
          first to know last news
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
        <View className="mt-7 py-5 mx-7 rounded-2xl bg-[#475AD7] items-center justify-center">
          <Text className="text-2xl font-semibold uppercase tracking-wider text-gray-100">
            Get Started
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
