import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getNews } from "../api";

const _colors = {
  active: `#475AD7`,
  inactive: `#FCD25900`,
};

const CategoryComponent = ({ category, setByCategoryData, setIsLoading }) => {
  const cate = ["latest"] 
  console.log(category, "jk");
  const data = cate?.map((item, index) => {
    return {
      key: index,
      category: item,
    };
  });
  const navigation = useNavigation();
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const [type, setType] = useState("home");
  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
    });
  }, [index]);

  useEffect(() => {
    setIsLoading(() => true);
    Promise.all([getNews(type)])
      .then(([resCategoryList]) => Promise.all([resCategoryList]))
      .then(([dataCategory]) => {
        setByCategoryData(() => dataCategory);
        setIsLoading(() => false);
      });
  }, [type]);

  return (
    <>
      <View className="relative flex-row items-center flex-1 flex-nowrap">
        <TouchableOpacity
          onPress={() => navigation.navigate("AddCategoryScreen")}
        >
          <MaterialCommunityIcons name="plus" size={24} color={"#2536A7"} />
        </TouchableOpacity>
        <FlatList
          ref={ref}
          data={data}
          initialScrollIndex={index}
          initialNumToRender={5}
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ paddingLeft: 15 }}
          renderItem={({ item, index: fIndex }) => {
            return (
              <TouchableOpacity
                key={item.key}
                onPress={() => {
                  setIndex(fIndex);
                  if (item.category === "latest") {
                    setType("home");
                  } else {
                    setType(item.category);
                  }
                }}
                className={`rounded-xl mr-3 border-2 border-[${
                  _colors.active
                }] bg-[${
                  fIndex === index ? _colors.active : _colors.inactive
                }] items-center justify-center inline-block`}
              >
                <Text
                  className={`m-1 font-bold text-[${
                    fIndex === index ? "#F3F4F6" : _colors.inactive
                  }] px-3 py-1 text-[15px]`}
                >
                  {item.category}
                </Text>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      </View>
    </>
  );
};

export default CategoryComponent;
