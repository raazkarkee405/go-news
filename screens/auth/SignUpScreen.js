import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SafeViewAndroid from "../../AndroidSafeArea";
import CustomInputComponent from "../../components/auth/CustomInputComponent";
import { useForm } from "react-hook-form";
import CustomButtonComponent from "../../components/auth/CustomButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { error },
    watch,
  } = useForm();

  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate("SignInScreen");
  };
  const onSignUpPressed = async (data) => {
    const { username, password, email, name } = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, name, preferred_username: username },
      });
      navigation.navigate("ConfirmEmailScreen", { username });
    } catch (error) {
      Alert.alert("Oops", error.message);
    }
  };

  return (
    <SafeAreaView
      style={SafeViewAndroid.AndroidSafeArea}
      className="flex-1 bg-white relative"
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className="flex-row items-center justify-between px-8 mt-2">
          <View>
            <Text className="text-[23px] font-semibold">
              Welcome to GONews 👋
            </Text>
            <Text className="mt-2 text-[16px] text-[#7C82A1]">
              Hello, I guess you are new around here. You can start using the
              application after sign up.
            </Text>
          </View>
        </View>

        <View className="px-7 mt-3 flex-col">
          <CustomInputComponent
            name="name"
            placeholder="Name"
            iconName={"account"}
            control={control}
            rules={{
              required: "Name is required",
              minLength: { value: 3, message: "User is too short" },
              maxLength: { value: 20, message: "User is too long" },
            }}
          />
          <CustomInputComponent
            name="username"
            control={control}
            placeholder="Username"
            iconName="account"
            rules={{
              required: "Username is required",
              minLength: { value: 3, message: "Username is too short" },
              maxLength: { value: 20, message: "Username is too long" },
            }}
          />
          <CustomInputComponent
            name="email"
            control={control}
            iconName="email"
            rules={{
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            }}
            placeholder="Email"
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
          <CustomInputComponent
            name="password-repeat"
            placeholder="Repeat Password"
            control={control}
            iconName="lock"
            secureTextEntry
            rules={{
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            }}
          />

          <CustomButtonComponent
            text="Sign Up"
            onPress={handleSubmit(onSignUpPressed)}
          />
          <CustomButtonComponent
            text="Have an account? Sign In"
            onPress={onSignInPressed}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
