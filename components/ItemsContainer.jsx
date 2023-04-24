import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Belgium } from "../assets";
import BookmarkComponent from "./BookmarkComponent";

const data = [
  {
    key: 1,
    category: "politics",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod tempore commodi, ex ipsum ipsam, sit expedita fugit incidunt animi doloribus veritatis facere quam. Quaerat harum ducimus dignissimos nemo saepe.",
    date: new Date().toLocaleString(),
    image:
      "https://cdn.pixabay.com/photo/2017/07/02/00/43/bundestag-2463236_960_720.jpg",
  },
  {
    key: 2,
    category: "politics",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod tempore commodi, ex ipsum ipsam, sit expedita fugit incidunt animi doloribus veritatis facere quam. Quaerat harum ducimus dignissimos nemo saepe.",
    date: new Date().toLocaleString(),
    image:
      "https://cdn.pixabay.com/photo/2017/10/13/11/49/putin-2847423_960_720.jpg",
  },
  {
    key: 3,
    category: "technology",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod tempore commodi, ex ipsum ipsam, sit expedita fugit incidunt animi doloribus veritatis facere quam. Quaerat harum ducimus dignissimos nemo saepe.",
    date: new Date().toLocaleString(),
    image:
      "https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_960_720.jpg",
  },
  {
    key: 4,
    category: "history",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod tempore commodi, ex ipsum ipsam, sit expedita fugit incidunt animi doloribus veritatis facere quam. Quaerat harum ducimus dignissimos nemo saepe.",
    date: new Date().toLocaleString(),
    image:
      "https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_960_720.jpg",
  },
  {
    key: 5,
    category: "history",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod tempore commodi, ex ipsum ipsam, sit expedita fugit incidunt animi doloribus veritatis facere quam. Quaerat harum ducimus dignissimos nemo saepe.",
    date: new Date().toLocaleString(),
    image:
      "https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_960_720.jpg",
  },
  {
    key: 6,
    category: "history",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod tempore commodi, ex ipsum ipsam, sit expedita fugit incidunt animi doloribus veritatis facere quam. Quaerat harum ducimus dignissimos nemo saepe.",
    date: new Date().toLocaleString(),
    image:
      "https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_960_720.jpg",
  },
  {
    key: 7,
    category: "history",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod tempore commodi, ex ipsum ipsam, sit expedita fugit incidunt animi doloribus veritatis facere quam. Quaerat harum ducimus dignissimos nemo saepe.",
    date: new Date().toLocaleString(),
    image:
      "https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_960_720.jpg",
  },
  {
    key: 8,
    category: "history",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod tempore commodi, ex ipsum ipsam, sit expedita fugit incidunt animi doloribus veritatis facere quam. Quaerat harum ducimus dignissimos nemo saepe.",
    date: new Date().toLocaleString(),
    image:
      "https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_960_720.jpg",
  },
];

const ItemsContainer = () => {
  return (
    <View className="flex-1 flex-col justify-between gap-5">
      {data?.length > 0 ? (
        data.map((item) => (
          <>
            <TouchableOpacity key={item.key} className="ml-4 mb-4 mt-4">
              <View>
                <Image
                  source={{ uri: item.image }}
                  className="w-[100px] h-[100px] object-cover rounded-2xl"
                />
              </View>
              <View className="absolute justify-between left-[115px] top-[18px] w-[210px] gap-2">
                <Text className="text-[14px] text-[#7C82A1] font-bold ">
                  {item.date}
                </Text>
                <Text className="text-[16px] font-medium truncate...">
                  {item.title?.length > 50 ? `${item.title.slice(0, 50)}..` : item.title}
                </Text>
              </View>
              <View className="absolute top-0 right-1">
                <BookmarkComponent color="#475AD7" />
              </View>
            </TouchableOpacity>
          </>
        ))
      ) : (
        <>
          <View className="w-full h-[400px] items-center space-y-8 justify-center">
            <Text className="text-2xl text-[#428288] font-semibold">
              Oops...No Data Found
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ItemsContainer;
