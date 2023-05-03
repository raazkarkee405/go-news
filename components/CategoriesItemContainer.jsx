import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { listOfCategory } from "../data";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const saveData = (updatedCategory) => {
    AsyncStorage.getItem("@MyCategoryStore:key")
      .then((value) => {
        AsyncStorage.setItem(
          "@MyCategoryStore:key",
          JSON.stringify(updatedCategory)
        );
        setSelectedCategory(updatedCategory);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    AsyncStorage.getItem("@MyCategoryStore:key")
      .then((value) => {
        const cate = JSON.parse(value);
        setSelectedCategory(cate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onPress = (title) => {
    let updatedCategory = [];
    if (selectedCategory.includes(title)) {
      updatedCategory = selectedCategory.filter((item) => item !== title);
    } else {
      updatedCategory = [...selectedCategory, title];
    }
    if (updatedCategory.includes("latest")) {
      const index = updatedCategory.findIndex((el) => el === "latest");
      updatedCategory.splice(index, 1);
      updatedCategory.unshift("latest");
    }
    saveData(updatedCategory);
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
        contentContainerStyle={{ paddingBottom: 50 }}
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
