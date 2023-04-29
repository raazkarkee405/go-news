import {
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import SafeViewAndroid from "../AndroidSafeArea";
import ProfileIconComponent from "../components/ProfileIconComponent";
import HeaderComponent from "../components/HeaderComponent";
import CategoryComponent from "../components/CategoryComponent";
import ItemsContainer from "../components/ItemsContainer";

const ExploreScreen = ({ route }) => {
  const data  = route.params;
  if(data) {
    console.log('categoy', data.category)
  }
  const [byCategoryData, setByCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        <CategoryComponent
          category={data?.category}
          setByCategoryData={setByCategoryData}
          setIsLoading={setIsLoading}
        />
      </View>
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-evenly p-8">
            <ItemsContainer data={byCategoryData?.results} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ExploreScreen;
