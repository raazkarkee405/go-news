import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import SafeViewAndroid from "../AndroidSafeArea";
import { FontAwesome } from "@expo/vector-icons";
import TopStoriesContainer from "../components/TopStoriesContainer";
import ItemsContainer from "../components/ItemsContainer";
import ProfileIconComponent from "../components/ProfileIconComponent";
import WeatherComponent from "../components/WeatherComponent";
import { useNavigation } from "@react-navigation/native";
import { getTopStories } from "../api";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getTopStories().then((data) => {
      setMainData(data.data);
      setInterval(() => {
        setIsLoading(false);
      }, 3000);
    });
  }, []);

  return (
    <SafeAreaView
      style={SafeViewAndroid.AndroidSafeArea}
      className="flex-1 bg-white relative"
    >
      <View className="flex-row items-center justify-between px-8 mt-2">
        {/* weather section */}
        <WeatherComponent />
        {/* profile section */}
        <ProfileIconComponent />
      </View>

      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
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
              <TopStoriesContainer data={mainData} />
          </View>

          {/* Recommended section */}
          <View>
            <View className="flex-row items-center justify-between px-8 mt-8">
              <Text className="text-[18px]  font-extrabold">
                Recommended for you
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("ExploreScreen")}
                className="px-3"
              >
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
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
