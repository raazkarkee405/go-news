import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SafeViewAndroid from "../../AndroidSafeArea";
import CustomInputComponent from "../../components/auth/CustomInputComponent";
import { useForm } from "react-hook-form";
import CustomButtonComponent from "../../components/auth/CustomButtonComponent";
import SocialSignInComponent from "../../components/auth/SocialSignInComponent";

const SignInScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { error },
  } = useForm();
  const onSignInPressed = () => {};
  const onForgotPasswordPressed = () => {};
  const onSignUpPressed = () => {};
  const onSignInFacebook = () => {};
  const onSignInGoogle = () => {};
  const onSignInApple = () => {};
  return (
    <SafeAreaView
      style={SafeViewAndroid.AndroidSafeArea}
      className="flex-1 bg-white relative"
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className="flex-row items-center justify-between px-8 mt-2">
          <View>
            <Text className="text-[23px] font-semibold">Welcome Back 👋</Text>
            <Text className="mt-2 text-[16px] text-[#7C82A1]">
              I am happy to see you again. You can continue where you left off
              by logging in
            </Text>
          </View>
        </View>

        <View className="px-7 mt-3 flex-col">
          <CustomInputComponent
            name="username"
            control={control}
            placeholder="Username"
            iconName="account"
            rules={{ required: "Username is required" }}
          />
          <CustomInputComponent
            name="password"
            control={control}
            placeholder="Password"
            iconName="lock"
            secureTextEntry
            rules={{
              required: "Password is required",
              minLength: { value: 3, message: "Password is too short" },
            }}
          />

          <CustomButtonComponent
            text="Sign In"
            onPress={handleSubmit(onSignInPressed)}
          />
          <CustomButtonComponent
            text="Forgot Password?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />

          <SocialSignInComponent
            text="Sign In with Facebook"
            social="facebook"
            onPress={onSignInFacebook}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
          />

          <SocialSignInComponent
            text="Sign In with Google"
            social="google"
            onPress={onSignInGoogle}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
          />

          <SocialSignInComponent
          text="Sign In with Apple"
          social="apple"
          onPress={onSignInApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />


          <CustomButtonComponent
            text="Don't have an account? Create one"
            onPress={onSignUpPressed}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
