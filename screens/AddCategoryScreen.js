import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SafeViewAndroid from "../AndroidSafeArea";
import HeaderComponent from "../components/HeaderComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CategoriesItemContainer from "../components/CategoriesItemContainer";

const AddCategoryScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState([]);
  return (
    <SafeAreaView
      style={SafeViewAndroid.AndroidSafeArea}
      className="flex-1 bg-white relative"
    >
      <View className="px-8 bottom-4 flex-row">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Explore", {
              screen: "ExploreScreen",
              params: { category: selectedCategory },
            })
          }
          className="rounded-md items-center justify-center bg-white"
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#475AD7" />
        </TouchableOpacity>
        <View className="left-3 top-2">
          <HeaderComponent
            title="Categories"
            description="Thousands of articles in each category"
          />
        </View>
      </View>
      <View className="px-6 mt-6 flex-row">
        <CategoriesItemContainer
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddCategoryScreen;
