import { View, SafeAreaView, ScrollView } from "react-native";
import React, { useRef } from "react";
import SafeViewAndroid from "../AndroidSafeArea";
import ProfileIconComponent from "../components/ProfileIconComponent";
import HeaderComponent from "../components/HeaderComponent";
import CategoryComponent from "../components/CategoryComponent";
import ItemsContainer from "../components/ItemsContainer";

const ExploreScreen = () => {
  return (
    <SafeAreaView
      style={SafeViewAndroid.AndroidSafeArea}
      className="flex-1 bg-white relative"
    >
      <View className="flex-row items-center justify-between px-8 mt-2">
        {/* Header section */}
        <HeaderComponent
          title="Browse"
          description="Discover things of this world"
        />
        {/* profile section */}
        <ProfileIconComponent />
      </View>
      {/* Category Section */}
      <View className="px-8 mt-8 flex-row">
        <CategoryComponent />
      </View>
      <ScrollView>
        <View className="flex-row items-center justify-evenly p-8">
          <ItemsContainer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;
