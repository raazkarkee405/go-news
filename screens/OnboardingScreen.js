import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../AndroidSafeArea";
import Onboarding from "react-native-onboarding-swiper";
import { OnboardingOne, OnboardingThree, OnboardingTwo } from "../assets";

const DotComponent = ({ selected }) => {
  return (
    <View
      className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
        selected ? "border border-[#475AD7]" : ""
      } p-2`}
    >
      <View
        className={`w-2 h-2 ${
          selected ? "bg-[#475AD7]" : "bg-[#8A96E5]"
        } rounded-full`}
      ></View>
    </View>
  );
};

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <Onboarding
      onSkip={() => navigation.replace("WelcomeScreen")}
      onDone={() => navigation.replace("WelcomeScreen")}
      DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={OnboardingOne}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Exciting News",
          subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={OnboardingTwo}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "With One Click",
          subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={OnboardingThree}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "From All Around the World",
          subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
