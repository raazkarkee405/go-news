import { View, Text, Pressable } from "react-native";
import React from "react";

const ProfileScreen = () => {
  const signOut = () => {
    console.log("sign out");
  };
  return (
    <View>
      <Pressable onPress={signOut}>
        <Text>Hello, Click here to sign out!</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
