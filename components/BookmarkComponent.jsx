import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
const BookmarkComponent = ({ color }) => {
  const [bookmarked, setBookMarked] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => (bookmarked ? setBookMarked(false) : setBookMarked(true))}
    >
      {bookmarked ? (
        <MaterialCommunityIcons name="bookmark" size={30} color={color} />
      ) : (
        <MaterialCommunityIcons
          name="bookmark-outline"
          size={30}
          color={color}
        />
      )}
    </TouchableOpacity>
  );
};

export default BookmarkComponent;
