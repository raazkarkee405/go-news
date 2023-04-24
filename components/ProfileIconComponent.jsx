import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Avatar } from "../assets";

const ProfileIconComponent = () => {
  return (
    <View className="w-12 h-12">
      <TouchableOpacity>
        <Image
          source={Avatar}
          className="w-full h-full rounded-full object-cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileIconComponent;
