import { View, Text, Pressable } from "react-native";
import React from "react";
import { Auth } from "aws-amplify";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const signOut = async () => {
    await Auth.signOut();
  };
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View>
        <Pressable onPress={signOut}>
          <Text>Hello, Click here to sign out!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
