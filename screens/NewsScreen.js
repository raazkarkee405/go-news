import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { newZealand } from "../assets";
import { FontAwesome5 } from "@expo/vector-icons";
import BookmarkComponent from "../components/BookmarkComponent";
import { useNavigation } from "@react-navigation/native";
import ProfileIconComponent from "../components/ProfileIconComponent";
import { searchNews } from "../api";

const NewsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { dataItems, prevScreen } = route?.params;
  const [dataById, setDataById] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.log("An error occured", err));
  };

  useEffect(() => {
    setIsLoading(true);
    searchNews(dataItems.uri)
      .then((data) => {
        setDataById(data);
        setIsLoading(false);
      })
      .catch((err) => Alert.alert(err));
  }, [dataItems.uri]);
  return (
    <View className="flex-1 bg-white relative">
      {isLoading ? (
        <View className="flex-1 item-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <>
          <View className="relative bg-white shadow-lg">
            <Image
              source={{
                uri: dataItems?.multimedia[1]?.url
                  ? dataItems?.multimedia[1]?.url
                  : newZealand,
              }}
              className="w-full h-80 object-cover"
            />
          </View>
          <View className="absolute flex-row inset-x-0 top-10 justify-between px-6">
            <TouchableOpacity onPress={() => navigation.navigate(prevScreen)}>
              <FontAwesome5 name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
            <View className="flex- items-center justify-between">
              <BookmarkComponent color="#fff" />
              <TouchableOpacity className="top-3">
                <FontAwesome5 name="share" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <View className=" absolute flex inset-x-0 px-5 top-[90px] ">
            <View className="w-[100px] h-10 rounded-full border-2 border-[#475AD7] items-center justify-center inline-block bg-[#475AD7]  ">
              <Text className=" text-[15px] font-bold text-[#fff] px-1 py-1">
                {dataItems?.section}
              </Text>
            </View>
            <View className="mt-4">
              <Text className="text-[20px] font-bold text-[#fff] ">
                {dataItems?.title}
              </Text>
            </View>
            <View className="mt-3 flex flex-row items-center space-x-2">
              <ProfileIconComponent />
              <Text className="text-[15px] font-bold text-[#fff]">
                {dataItems?.byline}
              </Text>
            </View>
          </View>
          <View className="relative bottom-7 h-full bg-[#fff] rounded-t-3xl">
            <View className=" inset-x-0 top-4 px-6">
              <Text className="text-[15px]">
                {new Date(dataItems?.created_date).toDateString()}
              </Text>
            </View>
            <ScrollView>
              <View className=" flex-col inset-x-0 top-5 px-6 gap-2">
                <Text className="text-[20px] font-bold text-[#666C8E]">
                  {dataItems?.abstract}
                </Text>
                <Text className="text-[16px] text-[#666C8E]">
                  {dataById?.response?.docs[0].lead_paragraph}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  openURL(dataItems.url);
                }}
                className="mt-4 px-4 py-4 items-center justify-center mb-12"
              >
                <Text className="text-[14px] font-semibold tracking-wider underline underline-offset-auto">
                  Continue Reading
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </>
      )}
    </View>
  );
};

export default NewsScreen;
