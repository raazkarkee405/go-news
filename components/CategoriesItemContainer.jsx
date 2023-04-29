import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { listOfCategory } from "../data";

// const listOfCategory = [
//   "latest",
//   "arts",
//   "automobiles",
//   "books",
//   "business",
//   "climate",
//   "education",
//   "fashion",
//   "food",
//   "health",
//   "magazine",
//   "movies",
//   "parenting",
//   "politics",
//   "science",
//   "sports",
//   "technology",
//   "theater",
//   "travel",
//   "us",
//   "universe",
//   "world",
// ];

const data = listOfCategory.map((item, index) => {
  return {
    key: index,
    category: item,
  };
});
const _colors = {
  active: `#475AD7`,
  inactive: `#FCD25900`,
};

const Item = ({ title, key, selectedCategory, setSelectedCategory }) => {
  const onPress = (title) => {
    if (selectedCategory.includes(title)) {
      const updatedCategory = selectedCategory.filter((item) => item !== title);
      setSelectedCategory(updatedCategory);
    } else {
      const updatedCategory = [...selectedCategory, title];
      setSelectedCategory(updatedCategory);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(title);
      }}
      key={key}
      className={`bg-[${
        selectedCategory.includes(title) ? _colors.active : _colors.inactive
      }] m-4  items-center justify-center inline-block rounded-xl border-2 border-[${
        _colors.active
      }] p-6 basis-5/12 `}
    >
      <Text
        className={` font-bold text-[${
          selectedCategory.includes(title) ? "#F3F4F6" : _colors.inactive
        }] text-[14px]`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const CategoriesItemContainer = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <View className="relative flex-row items-center flex-1 flex-wrap ">
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Item
            title={item.category}
            key={item.key}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        )}
      />
    </View>
  );
};

export default CategoriesItemContainer;
