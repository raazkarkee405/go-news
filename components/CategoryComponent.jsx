import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getNews } from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const _colors = {
  active: `#475AD7`,
  inactive: `#FCD25900`,
};

const CategoryComponent = ({ setByCategoryData, setIsLoading, updatedCategory }) => {
  const navigation = useNavigation();
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const [type, setType] = useState("home");
  const [newCategories, setNewCategories] = useState([]);
  const [retrieve, setRetrieve] = useState(true);

  const categoryData = () => {
    const category = ["latest", "politics", "sports"];
    // AsyncStorage.clear()
    AsyncStorage.getItem("@MyCategoryStore:key")
    .then((value) => {
      const cate = JSON.parse(value);
      if (value == null || cate === 0) {
          AsyncStorage.setItem(
            "@MyCategoryStore:key",
            JSON.stringify(category)
          );
        }
        if (!cate.includes("latest")) {
          cate.unshift("latest");
        }
        const data = cate.map((item, index) => {
          return {
            key: index,
            category: item,
          };
        });
        setNewCategories(data);
        setRetrieve(false);
      })
      .catch((error) => {
        console.log("Failed to save the category data to the storage.", error);
      });
  };

  useEffect(() => {
    categoryData();
  }, [updatedCategory]);

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
  }, [type, updatedCategory]);

  return (
    <>
      {!retrieve ? (
        <>
          <View className="relative flex-row items-center flex-1 flex-nowrap">
            <TouchableOpacity
              onPress={() => navigation.navigate("AddCategoryScreen")}
            >
              <MaterialCommunityIcons name="plus" size={24} color={"#2536A7"} />
            </TouchableOpacity>
            <FlatList
              ref={ref}
              data={newCategories}
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
      ) : (
        <>
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#0B646B" />
          </View>
        </>
      )}
    </>
  );
};

export default CategoryComponent;
