import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ItemsContainer from "./ItemsContainer";
const data = [
  {
    key: 1,
    category: "politics",
  },
  {
    key: 2,
    category: "technology",
  },
  {
    key: 3,
    category: "history",
  },
];

const _colors = {
  active: `#475AD7`,
  inactive: `#FCD25900`,
};
const CategoryComponent = () => {
  const navigation = useNavigation();
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  // const [viewPosition, setViewPosition] = useState(0);
  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      // viewOffSet: viewPosition === 0.5 || viewPosition === 1 ? 0 : "10",
      // viewPosition,
    });
  }, [index]);
  return (
    <View className="flex-row items-center flex-1 flex-nowrap">
      <TouchableOpacity onPress={() => navigation.navigate("CategoryScreen")}>
        <MaterialCommunityIcons name="plus" size={24} color={"#2536A7"} />
      </TouchableOpacity>
      <FlatList
        ref={ref}
        data={data}
        initialScrollIndex={index}
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
  );
};

export default CategoryComponent;
