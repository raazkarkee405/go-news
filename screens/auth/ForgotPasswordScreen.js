import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SafeViewAndroid from "../../AndroidSafeArea";
import CustomInputComponent from "../../components/auth/CustomInputComponent";
import { useForm } from "react-hook-form";
import CustomButtonComponent from "../../components/auth/CustomButtonComponent";

const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const onNextPressed = () => {};
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
              Forgot Password 🤔
            </Text>
            <Text className="mt-2 text-[16px] text-[#7C82A1]">
              We need your username so we can send you the password reset code
              in your email.
            </Text>
          </View>
        </View>

        <View className="px-7 mt-3 flex-col">
          <CustomInputComponent
            name="username"
            control={control}
            placeholder="Username"
            iconName="account"
            rules={{
              required: "Username is required",
            }}
          />

          <CustomButtonComponent
            text="Next"
            onPress={handleSubmit(onNextPressed)}
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

export default ForgotPasswordScreen;
