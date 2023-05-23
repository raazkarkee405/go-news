import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SafeViewAndroid from "../../AndroidSafeArea";
import CustomInputComponent from "../../components/auth/CustomInputComponent";
import { useForm } from "react-hook-form";
import CustomButtonComponent from "../../components/auth/CustomButtonComponent";

const NewPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const onConfirmPressed = () => {};
  const onSignInPressed = () => {};

  return (
    <SafeAreaView
      style={SafeViewAndroid.AndroidSafeArea}
      className="flex-1 bg-white relative"
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className="flex-row items-center justify-between px-8 mt-2">
          <View>
            <Text className="text-[23px] font-semibold">
              Create New Password 🔒
            </Text>
            <Text className="mt-2 text-[16px] text-[#7C82A1]">
              You can create a new password, please dont forget it too.
            </Text>
          </View>
        </View>

        <View className="px-7 mt-3 flex-col">
          <CustomInputComponent
            name="Code"
            control={control}
            placeholder="code"
            iconName="account"
            rules={{
              required: "Code is required",
            }}
          />

          <CustomInputComponent
            placeholder="Enter your new password"
            name="name"
            control={control}
            secureTextEntry
            iconName="lock"
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters long",
              },
            }}
          />

          <CustomButtonComponent
            text="Confirm"
            onPress={handleSubmit(onConfirmPressed)}
          />

          <CustomButtonComponent
            text="Back to Sign In"
            onPress={onSignInPressed}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPasswordScreen;
