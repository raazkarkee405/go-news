import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Avatar } from "../assets";
import { useNavigation } from "@react-navigation/native";

const ProfileIconComponent = () => {
  const navigation = useNavigation();
  return (
    <View className="w-12 h-12">
      <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
        <Image
          source={Avatar}
          className="w-full h-full rounded-full object-cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileIconComponent;
