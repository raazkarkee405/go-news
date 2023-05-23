import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SafeViewAndroid from "../../AndroidSafeArea";
import CustomInputComponent from "../../components/auth/CustomInputComponent";
import { useForm } from "react-hook-form";
import CustomButtonComponent from "../../components/auth/CustomButtonComponent";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ConfirmEmailScreen = () => {
  const { control, handleSubmit } = useForm();
  const onConfirmPressed = () => {};

  const onResendPressed = () => {};
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
              Verification Code ✅
            </Text>
            <Text className="mt-2 text-[16px] text-[#7C82A1]">
              You need to enter your code we send to your email adress.
            </Text>
          </View>
        </View>

        <View className="px-7 mt-3 flex-col">
          <CustomInputComponent
            name="code"
            control={control}
            placeholder="Enter your confirmation code"
            iconName="lock"
            rules={{
              required: "Confirmation code is required",
            }}
          />

          <CustomButtonComponent
            text="Confirm"
            onPress={handleSubmit(onConfirmPressed)}
          />

          <CustomButtonComponent
            text="Resend Code"
            onPress={onResendPressed}
            type="SECONDARY"
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

export default ConfirmEmailScreen;
