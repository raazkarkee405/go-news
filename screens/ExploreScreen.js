import {
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import SafeViewAndroid from "../AndroidSafeArea";
import HeaderComponent from "../components/HeaderComponent";
import CategoryComponent from "../components/CategoryComponent";
import ItemsContainer from "../components/ItemsContainer";
import InputComponent from "../components/InputComponent";
import filter from "lodash.filter";

const ExploreScreen = ({ route }) => {
  const params = route.params;

  const [byCategoryData, setByCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updatedCategory, setUpdatedCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [fullDataToFilter, setFullDataToFilter] = useState([]);
  const handleSearch = (query) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullDataToFilter, (data) => {
      return contains(data, formattedQuery);
    });
    setByCategoryData(filteredData);
  };

  const contains = ({ title }, query) => {
    if (title.toLowerCase().includes(query)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (params) {
      setUpdatedCategory(params.category);
      if (!updatedCategory.includes("latest")) {
        setUpdatedCategory("latest", ...params.category);
      }
    }
  }, [params?.category]);

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
      </View>
      <InputComponent
        placeholder="Search"
        clearButtonMode="always"
        iconName="search"
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />
      {/* Category Section */}
      <View className="px-8 mt-8 flex-row">
        <CategoryComponent
          setByCategoryData={setByCategoryData}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          updatedCategory={updatedCategory}
          setFullDataToFilter={setFullDataToFilter}
          setSearchQuery={setSearchQuery}
        />
      </View>
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-evenly p-8">
            <ItemsContainer data={byCategoryData} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ExploreScreen;
